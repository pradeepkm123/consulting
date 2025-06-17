import React from 'react'

function Footer() {
    return (
        <div>
            {/* style={{position:'absolute'}} */}
            <section class="footer_area boxed"> 
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="footer_logo">
                                <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                            </div>
                            <p class="footer_desc">Continually plagiarize virtual web service pro with home_one maximizing action</p>
                            <form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
                                <div class="subscribe_form">
                                    <input type="email" name="email" id="email" class="form-control" required="" data-error="Please enter your email" placeholder="Your E-Mail" />
                                        <button type="submit" class="btn">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-1"></div>
                        <div class="col-lg-2 col-md-6">
                            <div class="footer-widget-content">
                                <div class="footer-widget-title">
                                    <h4>Company</h4>
                                </div>
                                <div class="footer-widget-menu">
                                    <ul>
                                        <li><a href="#"><i class="bi bi-chevron-double-right"></i> Our Team</a></li>
                                        <li><a href="#"><i class="bi bi-chevron-double-right"></i> Contact Us</a></li>
                                        <li><a href="#"><i class="bi bi-chevron-double-right"></i> About</a></li>
                                        <li><a href="#"><i class="bi bi-chevron-double-right"></i> Blog</a></li>
                                        <li><a href="#"><i class="bi bi-chevron-double-right"></i> Privacy Policy</a></li>
                                        <li><a href="#"><i class="bi bi-chevron-double-right"></i> Terms and Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="footer-widget-content">
                                <div class="footer-widget-title">
                                    <h4>quick Links</h4>
                                </div>
                                <div class="footer-widget-menu">
                                    <ul>
                                        <li><a href="#"><i class="bi bi-chevron-double-right"></i> Internship</a></li>
                                        <li><a href="#"><i class="bi bi-chevron-double-right"></i> Job</a></li>
                                        <li><a href="#"><i class="bi bi-chevron-double-right"></i> Our Services</a></li>
                                        <li><a href="#"><i class="bi bi-chevron-double-right"></i> Industries</a></li>
                                        <li><a href="#"><i class="bi bi-chevron-double-right"></i> Franchise</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-widget-contact">
                                <div class="footer-widget-title">
                                    <h4>Contact</h4>
                                </div>
                                <div class="footer-widget-address style_two">
                                    <div class="footer_widget_icon style_upper">
                                        <i class="las la-map-marker-alt" style={{fontSize:'15px'}}></i>
                                    </div>
                                    <div class="footer-widget-address_text">
                                        <p>Our address:</p>
                                        <span>Old Westbury 256, New York 11201,
                                            United States</span>
                                    </div>
                                </div>
                                <div class="footer-widget-address">
                                    <div class="footer_widget_icon">
                                        <i class="las la-phone" style={{fontSize:'15px'}}></i>
                                    </div>
                                    <div class="footer-widget-address_text">
                                        <p>+880 123 (4567) 890</p>
                                    </div>
                                </div>
                                <div class="footer-widget-address">
                                    <div class="footer_widget_icon">
                                        <i class="las la-envelope-open" style={{fontSize:'15px'}}></i>
                                    </div>
                                    <div class="footer-widget-address_text">
                                        <p>example@gmail.com</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="row add-border align-items-center">
                        <div class="col-md-7">
                            <div class="footer-bottom-content">
                                <div class="footer-bottom-content-copy">
                                    <p>Copyright © 2025 HR Consulting Services</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 text-right">
                            <div class="footer-bottom-content">
                                <div class="footer-bottom-menu">
                                    <ul>
                                        <li><a href="#">FACEBOOK</a></li>
                                        <li><a href="#">TWITTER</a></li>
                                        <li><a href="#">INSTAGRAM</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Footer