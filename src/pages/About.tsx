import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
    return (
        <div className="super_container">
            {/* Header */}
            <Header />
            {/* Home */}

            {/* About */}
            <div className="about">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col">
                            <div className="home_content text-center">
                                <div className="home_title">About us</div>
                                <div className="breadcrumbs">
                                    <ul>
                                        <li><h3 style={{fontWeight:"bold"}}>About us</h3></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row about_row row-lg-eq-height mt-5">
                        <div className="col-lg-6">
                            <div className="about_content">
                                <div className="about_title">About GSA Recovery Services Limited</div>
                                <div className="about_text">
                                    <p style={{ textAlign: "justify" }}>GSA Recovery Services Limited is a fast-growing debt recovery professional firm in Tanzania. We offer a wide range of
                                        services through a team of experienced professionals. Our services encompass accounts receivables management,
                                        debt collection notices, pre-legal and legal debt collection, and enforcement court proceedings. Our proficiency in
                                        Tanzania's debt collection laws and
                                        regulations enables us to provide timely and successful solutions to recover outstanding debts for businesses.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about_image"><img src="../src/assets/images/about_1.jpg" alt="https://unsplash.com/@jtylernix" /></div>
                        </div>
                    </div>
                    <div className="row about_row row-lg-eq-height">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="about_image"><img src="../src/assets/images/about_1.jpg" /></div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="about_content">
                                <div className="about_title">eLearn's Vision</div>
                                <div className="about_text">
                                    <p style={{ textAlign: "justify" }}>
                                        GSA was incorporated with a mission to make debt recovery convenient, risk-free, and accessible to businesses of all sizes.
                                        We recognize the challenges and costs associated with collecting debts abroad, which often require specialized expertise in
                                        local culture, language, and legal frameworks.</p>
                                    <p style={{ textAlign: "justify" }}>
                                        Our commitment to our vision prioritizes people, which is why we offer personalized services with a dedicated contact person for
                                        each case. We understand that a uniform approach to debt collection isn't suitable for all cases,
                                        so we tailor our solutions to meet the unique needs of each client. Our team of experts works tirelessly to ensure that our clients
                                        receive the best possible service and support, with consistent pricing and clear communication about case progress.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* Courses Slider */}
                            <h3>Our Principles</h3>
                            <div className="courses_slider_container">
                                <div className="owl-carousel owl-theme courses_slider">
                                    {/* Slider Item */}
                                    <div className="owl-item">
                                        <div className="course">
                                            <div className="course_body">

                                                <div className="course_title"><h3><a href="courses.html">Transparency</a></h3></div>
                                                <div className="course_text">
                                                    <p style={{ textAlign: "justify" }}>
                                                        We believe in being transparent with our clients and debtors alike. We provide clear and
                                                        concise information about our services, fees, and policies to ensure that all parties understand the process.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* Slider Item */}
                                    <div className="owl-item">
                                        <div className="course">
                                            <div className="course_body">

                                                <div className="course_title"><h3><a href="courses.html">Conflict of interest</a></h3></div>
                                                <div className="course_text">
                                                    <p style={{ textAlign: "justify" }}>
                                                        We take steps to avoid conflicts of interest, such as ensuring that our employees
                                                        do not have personal relationships with
                                                        debtors or clients that could compromise our impartiality.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* Slider Item */}
                                    <div className="owl-item">
                                        <div className="course">
                                            <div className="course_body">

                                                <div className="course_title"><h3><a href="courses.html">Compliance with local laws</a></h3></div>
                                                <div className="course_text">
                                                    <p style={{ textAlign: "justify" }}>
                                                        We comply with all applicable local, state, and federal laws related to debt collection,
                                                        including the Fair Debt Collection Practices Act (FDCPA) and other relevant regulations.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="course">
                                            <div className="course_body">

                                                <div className="course_title"><h3><a href="courses.html">Ethical practices</a></h3></div>
                                                <div className="course_text">
                                                    <p style={{ textAlign: "justify" }}>
                                                        We strive to treat debtors with respect and dignity, and to avoid any tactics that
                                                        could be considered harassing or
                                                        abusive. We also seek to resolve disputes in a fair and equitable manner.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="course">
                                            <div className="course_body">

                                                <div className="course_title"><h3><a href="courses.html">Confidentiality</a></h3></div>
                                                <div className="course_text">
                                                    <p style={{ textAlign: "justify" }}>
                                                        We take data protection and privacy seriously, and we follow industry best practices to safeguard the personal
                                                        information of our clients and debtors.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Courses Slider Nav */}
                                <div className="courses_slider_nav courses_slider_prev trans_200"><i className="fa fa-angle-left" aria-hidden="true" /></div>
                                <div className="courses_slider_nav courses_slider_next trans_200"><i className="fa fa-angle-right" aria-hidden="true" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Milestones */}

            {/* Teachers */}

            {/* Footer */}
            <Footer />
        </div>



    )
}
