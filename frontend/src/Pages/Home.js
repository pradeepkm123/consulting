import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from '../Components/Footer';
import "../Pages/Home.css";
import ClientSlider from './ClientSlider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FloatingButtons from '../Components/FloatingButtons';

function Home() {
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const solutionApproachSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div>
            <div className="consalt-header-area upper" id="sticky-header mob">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 pt-10">    
                            <div className="header-logo">
                                <a href="/"><img src="assets/images/logo.png" alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header-menu">
                                <ul className="nav_scroll">
                                    <li><a href="#">Home <span></span></a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/services">Our Services <span></span></a></li>
                                    <li><a href="#">Pages <span><i className="las la-angle-down"></i></span></a>
                                        <ul className="sub_menu">
                                            <li><a href="/internship">Internship</a></li>
                                            <li><a href="/team">Our Team</a></li>
                                            <li><a href="/jobs">Job</a></li>
                                            <li><a href="/resume">Submit Resume</a></li>
                                            <li><a href="protfolio-details.html">Admin Login</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/industries">Industries <span></span></a></li>
                                    <li><a href="/blogs">Blogs <span></span></a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 pt-10">
                            // <div className="header-button">
                            //     <a href="/contact">Get A Quote <i className="las la-arrow-right"></i></a>
                            // </div>
                            {/* <div className="sidebar-btn">
                                <div className="nav-btn navSidebar-button"><span><i className="las la-bars"></i></span></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
                <div className="mobile-menu">
                    <nav className="header-menu">
                        <ul className="nav_scroll">
                            <li><a href="#">Home</a>
                                <ul className="sub_menu">
                                    <li><a href="index.html">Home Version 01</a></li>
                                    <li><a href="index-2.html">Home Version 02</a></li>
                                    <li><a href="index-3.html">Home Version 03</a></li>
                                    <li><a href="index-4.html">Home Version 04</a></li>
                                    <li><a href="index-5.html">Home Version 05</a></li>
                                    <li><a href="index-6.html">Home Version 06</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="#">Service</a>
                                <ul className="sub_menu">
                                    <li><a href="service.html">Our Service</a></li>
                                    <li><a href="service-details.html">Service Details</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Page</a>
                                <ul className="sub_menu">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="service.html">Our Service</a></li>
                                    <li><a href="service-details.html">Service Details</a></li>
                                    <li><a href="team.html">Our Team</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="protfolio-details.html">Portfolio Details</a></li>
                                    <li><a href="404.html">Error Page</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Portfolio</a>
                                <ul className="sub_menu">
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="protfolio-details.html">Portfolio Details</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Blog</a>
                                <ul className="sub_menu">
                                    <li><a href="blog-grid.html">Blog</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <section className="hero_area d-flex align-items-center boxed">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero_content">
                                <h1>Crafting the Digital <br />Solutions for your<br />Business</h1>
                                <p>Continually plagiarize virtual web services with home_one maximizing
                                    action items. Globally build front-end</p>
                                <div className="slider_button">
                                    <div className="hero_btn">
                                        <a href="/contact">Get Started Now <span></span></a>
                                    </div>
                                    <div className="slider_info">
                                        <span><i className="las la-phone" style={{ fontSize: '20px' }}></i><a href="#">CALL : +123 (45678) 000</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-thumb">
                                <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/hero_thumb.png" alt="" />
                                <div className="video-icon">
                                    <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://youtu.be/BS4TUd7FJSg"><i className="las la-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero_shape testi-shapes">
                    <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/hero_shape.png" alt="" />
                </div>
            </section>
            <section className="about_area boxed">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about_thumb">
                                <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/about_thumb.png" alt="" />
                                <div className="about_play">
                                    <a data-aos="flip-left" className="banner-play-btn">
                                        <div className="text-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="250.5" height="250.5" viewBox="0 0 250.5 250.5">
                                                <path d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125" id="e-path-35ee1b2"></path>
                                                <text>
                                                    <textPath id="e-text-path-35ee1b2" href="#e-path-35ee1b2" startOffset="0%">
                                                        BUSINESS * CONSULTANT  *   MARKETING  *  VISSIONS   *
                                                    </textPath>
                                                </text>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about_content">
                                <h3>ABOUT COMPANY</h3>
                                <h1>Since 2007, We’re working Consulting agency <br /> group of more than 120+ talented peoples <br /> helps companies</h1>
                                <p>Globally engage cross-media leadership skills before cross-media innovation
                                    develop standardized platforms without robust applications. Conveniently
                                    go forward collaboration and idea-sharing</p>
                                <div className="about_list">
                                    <ul>
                                        <li><i className="las la-check-double"></i>Professional Team Member</li>
                                        <li><i className="las la-check-double"></i>Professional Team Member</li>
                                        <li><i className="las la-check-double"></i>Professional Team Member</li>
                                    </ul>
                                </div>
                                <div className="about_button">
                                    <div className="about_btn">
                                        <a href="/contact">More About Us<span></span></a>
                                    </div>
                                    <div className="about_info">
                                        <span><i className="fas fa-envelope-open"></i><a href="#">example@gmail.com</a></span>
                                    </div>
                                </div>
                                <div className="about_shape">
                                    <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/about_shpe.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service_area boxed" style={{padding:'45px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center style_two">
                                <h4>FEATURED SERVICE</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Slider {...solutionApproachSettings}>
                            <div className="col-lg-4 col-md-6">
                                <div className="service_single_item">
                                    <div className="service_thumb">
                                        <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb01.png" alt="" />
                                    </div>
                                    <div className="service_content">
                                        <h3>Globally Enable Accurate System Sustainable</h3>
                                        <div className="service_btn">
                                            <a href="service-details.html">Read More <i className="las la-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service_single_item">
                                    <div className="service_thumb">
                                        <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb02.png" alt="" />
                                    </div>
                                    <div className="service_content">
                                        <h3>Cultivate Exceptional Net Works Markets</h3>
                                        <div className="service_btn">
                                            <a href="service-details.html">Read More <i className="las la-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service_single_item">
                                    <div className="service_thumb">
                                        <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/service_thumb03.png" alt="" />
                                    </div>
                                    <div className="service_content">
                                        <h3>Communicate Technically Sound Infrastructure</h3>
                                        <div className="service_btn">
                                            <a href="service-details.html">Read More <i className="las la-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="counter_area boxed">
                <div className="container">
                    <div className="counter_upper">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="section_title style_two">
                                    <h5 style={{ color: '#fdff41' }}>Industry expert consultant</h5>
                                    <h1>We help industries to get skilled candidates</h1>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="consalt_btn text-right">
                                    <a href="contact.html">View more <span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="counter-single-item">
                                <div className="counter-content none">
                                    <div className="counter-_number">
                                        <h1 className="counter">12</h1>
                                        <span>K+</span>
                                    </div>
                                    <div className="counter_title">
                                        <h5>Total <br /> CLIENTS</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="counter-single-item">
                                <div className="counter-content">
                                    <div className="counter-_number">
                                        <h1 className="counter">950</h1>
                                        <span>+</span>
                                    </div>
                                    <div className="counter_title">
                                        <h5>Placements</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="counter-single-item">
                                <div className="counter-content">
                                    <div className="counter-_number">
                                        <h1 className="counter">4.7</h1>
                                        <span>*</span>
                                    </div>
                                    <div className="counter_title">
                                        <h5>Years of <br />Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="case-study-area boxed">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center">
                                <h4>LATEST Blogs</h4>
                                <h1>Recently We’ve Finished those works</h1>
                                <h1>With highly Satisfaction</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Slider {...settings}>
                            <div className="col-lg-12">
                                <div className="case-study-single-box">
                                    <div className="case-study-thumb">
                                        <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/work-1.jpg" alt="" />
                                        <div className="single_portfolio_icon">
                                            <a href="portfolio.html"><i className="flaticon flaticon-right-arrow"></i></a>
                                        </div>
                                        <div className="case-study-content">
                                            <h3><a href="portfolio.html">Business Implement</a></h3>
                                            <p>Technology</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="case-study-single-box">
                                    <div className="case-study-thumb">
                                        <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/work-2.jpg" alt="" />
                                        <div className="single_portfolio_icon">
                                            <a href="portfolio.html"><i className="flaticon flaticon-right-arrow"></i></a>
                                        </div>
                                        <div className="case-study-content">
                                            <h3><a href="portfolio.html">Business Implement</a></h3>
                                            <p>Technology</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="case-study-single-box">
                                    <div className="case-study-thumb">
                                        <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/work-3.jpg" alt="" />
                                        <div className="single_portfolio_icon">
                                            <a href="portfolio.html"><i className="flaticon flaticon-right-arrow"></i></a>
                                        </div>
                                        <div className="case-study-content">
                                            <h3><a href="portfolio.html">Business Implement</a></h3>
                                            <p>Technology</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="case-study-single-box">
                                    <div className="case-study-thumb">
                                        <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/work-4.jpg" alt="" />
                                        <div className="single_portfolio_icon">
                                            <a href="portfolio.html"><i className="flaticon flaticon-right-arrow"></i></a>
                                        </div>
                                        <div className="case-study-content">
                                            <h3><a href="portfolio.html">Business Implement</a></h3>
                                            <p>Technology</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="brand_area">
                <ClientSlider />
            </section>
            <FloatingButtons/>
            <Footer />
        </div>
    );
}

export default Home;
