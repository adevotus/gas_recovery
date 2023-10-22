import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Contact() {
    return (
        <div className="super_container">
            {/* Header */}
            <Header />
            {/* Home */}
            {/* <div className="home"> */}
            {/* Background image artist https://unsplash.com/@thepootphotographer */}
            {/* <div className="home_background parallax_background parallax-window" data-parallax="scroll" data-image-src="../src/assets/images/contact.jpg" data-speed="0.8" /> */}
            {/* <div className="home_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home_content text-center">
                                    <div className="home_title">Contact</div>
                                    <div className="breadcrumbs">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li>Contact</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
            {/* Contact */}
            
            <div className="contact mt-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-center mt-5">
                            <div className="home_title">Contact</div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><h3 style={{fontWeight:"bold"}}>Contact us</h3></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="container-fluid">
                    <div className="row row-xl-eq-height">
                        {/* Contact Content */}
                        <div className="col-xl-6">
                            <div className="contact_content">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="contact_about">
                                            <div className="logo_container">
                                                <a href="#">
                                                    <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                                                        <div className="logo_img"><img src="../src/assets/images/logo.png" /></div>
                                                        <div className="logo_text">learn</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="contact_about_text">
                                                <p style={{ textAlign: "justify" }}> Contact us today to discuss your debt recovery needs and explore how we can work together to achieve outstanding results</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="contact_info_container">
                                            <div className="contact_info_main_title">Contact Us</div>
                                            <div className="contact_info">
                                                <div className="contact_info_item">
                                                    <div className="contact_info_title">Address:</div>
                                                    <div className="contact_info_line">GSA Recovery Services Limited
                                                        Derm Plaza, 11th Floor, Plot No. 18,<br /> Block 45A Along New Bagamoyo Road, Kijitonyama Area <br />P.O. Box 2680 <br />Dar es salaam, Tanzania</div>
                                                </div>
                                                <div className="contact_info_item">
                                                    <div className="contact_info_title">Phone:</div>
                                                    <div className="contact_info_line"> +255 782 515 655</div>
                                                </div>
                                                <div className="contact_info_item">
                                                    <div className="contact_info_title">Email:</div>
                                                    <div className="contact_info_line">info@gsaconsulting.co.tz</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Contact Map */}
                        <div className="col-xl-6">

                            <div className="contact_content">
                                <h3>Send Your  message Here</h3>
                                <div className="mt-5">
                                    <form action="#" id="contact_form" className="contact_form">
                                        <div>
                                            <div className="row">
                                                <div className="col-lg-6 contact_name_col">
                                                    <input type="text" className="contact_input" placeholder="Name" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="email" className="contact_input" placeholder="E-mail" />
                                                </div>
                                            </div>
                                        </div>
                                        <div><input type="text" className="contact_input" placeholder="Subject" /></div>
                                        <div><textarea className="contact_input contact_textarea" placeholder="Message" defaultValue={""} /></div>
                                        <button className="contact_button"><span>send message</span><span className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true" /></span></button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>

    )
}

export default Contact