import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FloatingButtons from '../Components/FloatingButtons';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting submission

    try {
      const response = await fetch('https://consulting-4rbe.onrender.com/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Request submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('An error occurred while submitting the form');
      }
    } catch (error) {
      toast.error('An error occurred while submitting the form');
    } finally {
      setLoading(false); // Set loading to false after submission completes
    }
  };

  return (
    <div>
      <Navbar />
      <div className="breadcumb-area d-flex">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="breadcumb-content">
                <div className="breadcumb-title">
                  <h4>Contact Us</h4>
                </div>
                <ul>
                  <li><a href="index.html"><i className="las la-home"></i> Home </a></li>
                  <li className="rotates"><i className="las la-slash"></i>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="contact_area inner_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section_title">
                <h4>GET IN TOUCH</h4>
                <h1>Trusted By the Genius</h1>
                <h1>People with Consalt</h1>
                <p>Media leadership skills before cross-media innovation main technology develop standardized platforms without consalt.</p>
              </div>
              <div className="contact_main_info">
                <div className="call-do-action-info">
                  <div className="call-do-social_icon">
                    <i className="las la-phone-volume"></i>
                  </div>
                  <div className="call_info">
                    <p>Call us Anytime</p>
                    <h3>+123 - (4567) - 890</h3>
                  </div>
                </div>
                <div className="call-do-action-info">
                  <div className="call-do-social_icon">
                    <i className="las la-envelope"></i>
                  </div>
                  <div className="call_info">
                    <p>Call us Anytime</p>
                    <h3>example@gmail.com</h3>
                  </div>
                </div>
                <div className="call-do-action-info">
                  <div className="call-do-social_icon">
                    <i className="las la-map-marker-alt"></i>
                  </div>
                  <div className="call_info">
                    <p>Our Locations</p>
                    <span>102/B Soltek New Elephant Road <br />California, USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-box style_two">
                <div className="section_title style_three style_four text-center">
                  <h4>CONTACT US</h4>
                  <h1>Get In Touch with Consalt</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input type="text" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input type="email" name="email" placeholder="E-Mail Address" value={formData.email} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-box message">
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Write Message" value={formData.message} onChange={handleChange} required></textarea>
                      </div>
                    </div>
                    <div className="contact-form">
                      <button type="submit" disabled={loading}>
                        {loading ? <CircularProgress size={24} /> : <><i className="far fa-thumbs-up"></i> Request Call Back</>}
                      </button>
                    </div>
                  </div>
                </form>
                <div id="status"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_shape2 dance2">
          <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_3/service_shpe2.png" alt="Contact Shape" />
        </div>
      </section>
      <div className="map-section">
        <div className="-custon-container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48384.367867189205!2d-74.01058227968896!3d40.71751035716885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1609671967457!5m2!1sen!2sbd"
                width="1920"
                height="520"
                allowFullScreen=""
                aria-hidden="false"
                title="Location Map"
                tabIndex="0">
              </iframe>
            </div>
          </div>
        </div>
      </div>
      <FloatingButtons/>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Contact;
