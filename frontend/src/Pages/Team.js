import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FloatingButtons from '../Components/FloatingButtons';

function Team() {
    const [loading, setLoading] = useState(true); // Add loading state

    // Simulate loading data
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulate loading for 1 second

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="breadcumb-area d-flex">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <div className="breadcumb-content">
                                <div className="breadcumb-title">
                                    <h4>Our Team</h4>
                                </div>
                                <ul>
                                    <li><a href="index.html"><i className="las la-home"></i> Home </a></li>
                                    <li className="rotates"><i className="las la-slash"></i>Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="team_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center">
                                <h4>MEET OUR TEAM</h4>
                                <h1>We’ve 36+ Active & Dedicated Members</h1>
                                <h1>for Helping the Customers</h1>
                                <p>Globally engage cross-media leadership skills before cross-media innovation forward
                                    develop standardized platforms without robust</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team_item style_three">
                                <div className="team_thumb">
                                    <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/team2.jpg" alt="Team Member" />
                                </div>
                                <div className="team-content">
                                    <h3><a href="#">Charles S. Brown</a></h3>
                                    <span>Lead Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team_item style_three">
                                <div className="team_thumb">
                                    <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/team.jpg" alt="Team Member" />
                                </div>
                                <div className="team-content">
                                    <h3><a href="#">Md. Abu Taleb</a></h3>
                                    <span>UI-UX Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team_item style_three">
                                <div className="team_thumb">
                                    <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/team2.jpg" alt="Team Member" />
                                </div>
                                <div className="team-content">
                                    <h3><a href="#">Noor Islam</a></h3>
                                    <span>Lead Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team_item style_three">
                                <div className="team_thumb">
                                    <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/inner-img/team4.png" alt="Team Member" />
                                </div>
                                <div className="team-content">
                                    <h3><a href="#">Jonakir Ammu</a></h3>
                                    <span>Marketing</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team_item style_three">
                                <div className="team_thumb">
                                    <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/inner-img/team5.png" alt="Team Member" />
                                </div>
                                <div className="team-content">
                                    <h3><a href="#">Kiron Mala Kotkoti</a></h3>
                                    <span>UI-UX Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team_item style_three">
                                <div className="team_thumb">
                                    <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/inner-img/team6.png" alt="Team Member" />
                                </div>
                                <div className="team-content">
                                    <h3><a href="#">Charles S. Brown</a></h3>
                                    <span>Lead Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FloatingButtons/>
            <Footer />
        </div>
    );
}

export default Team;
