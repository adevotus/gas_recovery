import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="super_container">
      {/* Header */}
      <Header />
      {/* Home */}
      <div className="home">
        <div className="home_slider_container">
          {/* Home Slider */}
          <div className="owl-carousel owl-theme home_slider">
            {/* Slider Item */}
            <div className="owl-item">
              {/* Background image artist https://unsplash.com/@benwhitephotography */}
              <div className="home_slider_background" style={{ backgroundImage: 'url(../src/assets/images/index.jpg)' }} />
              <div className="home_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="home_content text-center">
                        <div className="home_logo"><img src="../src/assets/images/home_logo.png" /> </div>
                        <div className="home_text">
                          <div className="home_title">Complete Online Courses</div>
                          <div className="home_subtitle">Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue ut, fermentum ipsum.</div>
                        </div>
                        <div className="home_buttons">
                          <div className="button home_button"><a href="#">learn more<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true" /></div></a></div>
                          <div className="button home_button"><a href="#">see all courses<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true" /></div></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider Item */}
            <div className="owl-item">
              {/* Background image artist https://unsplash.com/@benwhitephotography */}
              <div className="home_slider_background" style={{ backgroundImage: 'url(../src/assets/images/index.jpg)' }} />
              <div className="home_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="home_content text-center">
                        <div className="home_logo"><img src="../src/assets/images/home_logo.png" /></div>
                        <div className="home_text">
                          <div className="home_title">Complete Online Courses</div>
                          <div className="home_subtitle">Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue ut, fermentum ipsum.</div>
                        </div>
                        <div className="home_buttons">
                          <div className="button home_button"><a href="#">learn more<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true" /></div></a></div>
                          <div className="button home_button"><a href="#">see all courses<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true" /></div></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider Item */}
            <div className="owl-item">
              {/* Background image artist https://unsplash.com/@benwhitephotography */}
              <div className="home_slider_background" style={{ backgroundImage: 'url(../src/assets/images/index.jpg)' }} />
              <div className="home_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="home_content text-center">
                        <div className="home_logo"><img src="../src/assets/images/home_logo.png" /></div>
                        <div className="home_text">
                          <div className="home_title">Complete Online Courses</div>
                          <div className="home_subtitle">Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue ut, fermentum ipsum.</div>
                        </div>
                        <div className="home_buttons">
                          <div className="button home_button"><a href="#">learn more<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true" /></div></a></div>
                          <div className="button home_button"><a href="#">see all courses<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true" /></div></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Course */}
      <div className="featured">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Home Slider Nav */}
              <div className="home_slider_nav_container d-flex flex-row align-items-start justify-content-between">
                <div className="home_slider_nav home_slider_prev trans_200"><i className="fa fa-angle-left" aria-hidden="true" /></div>
                <div className="home_slider_nav home_slider_next trans_200"><i className="fa fa-angle-right" aria-hidden="true" /></div>
              </div>
              <div className="featured_container">
                <div className="row mt-5">
                  <div className="col-lg-6 featured_col">
                    <div className="featured_content">
                      <div className="featured_header d-flex flex-row align-items-center justify-content-start">
                        <div className="featured_tag"><a href="#">About GSA Recovery Services Limited </a></div>
                        {/* <div className="featured_price ml-auto">Price: <span>3444</span></div> */}
                      </div>
                      <div className="featured_title"><h3><a href="#"></a></h3></div>
                      <div className="featured_text"><p style={{ textAlign: "justify" }}>
                        GSA Recovery Services Limited is a fast-growing debt recovery professional firm in Tanzania.
                        We offer a wide range of services through a team of experienced professionals. Our services
                        encompass accounts receivables management, debt collection notices, pre-legal and legal debt collection,
                        and enforcement court proceedings.
                      </p>
                        <div className="featured_tag text-center mt-4"><a href="#">Read More. </a></div>
                      </div>

                    </div>
                  </div>
                  <div className="col-lg-6 featured_col">
                    {/* Background image artist https://unsplash.com/@jtylernix */}
                    <div className="featured_background" style={{ backgroundImage: 'url(../src/assets/images/featured.jpg)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Courses */}
      <div className="courses">
        <div className="container">
          <div className="row about_row row-lg-eq-height">
          <div className="col-lg-6">
              <div className="about_image"><img src="../src/assets/images/about_1.jpg" alt="https://unsplash.com/@jtylernix" /></div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="about_title text-center" style={{fontSize:"25px"}}>Why GSA Recovery Services Limited</div>
                <div className="about_text">
                  <ul >
                    <li><i className="fa fa-dot-circle-o" aria-hidden="true"></i> Proven track record of successful debt recovery</li> <br />
                    <li><i className="fa fa-dot-circle-o" aria-hidden="true"></i>  Highly trained and experienced team of professionals</li><br />
                    <li><i className="fa fa-dot-circle-o" aria-hidden="true"></i>  Cutting-edge technology for efficient debt collection</li><br/>
                    <li><i className="fa fa-dot-circle-o" aria-hidden="true"></i>  Commitment to ethical and legal debt collection practices</li><br />
                    <li><i className="fa fa-dot-circle-o" aria-hidden="true"></i>  Customized solutions tailored to your specific needs</li><br />
                    <li><i className="fa fa-dot-circle-o" aria-hidden="true"></i>  Transparent reporting and regular updates</li><br />
                    <li><i className="fa fa-dot-circle-o" aria-hidden="true"></i>  Comprehensive support from initial contact to successful recovery</li><br />
                  </ul>
                  <p style={{ textAlign: "justify" }}>At GSA, we understand that each debt collection case is unique.
                   We take pride in our ability to adapt to the evolving needs of our clients while maintaining the highest 
                   level of professionalism and integrity. Let us help you recover what's rightfully yours.</p>
                   <div className="featured_tag text-center mt-4"><a href="#">Read More. </a></div>
                </div>

              </div>
            </div>
           
          </div>
         
        </div>
      </div>
      <div className="grouped_sections">
        <div className="container">
          <div className="row" id="service">
            <div className="col-lg-12 grouped_col">
              <div className="grouped_title text-center" >Our Services </div>
            </div>
          </div>
          <div className="row">
            {/* Why Choose Us */}
            <div className="col-lg-6 grouped_col">
              <div className="events">
                {/* Event */}
                <div className="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="event_date d-flex flex-column align-items-center justify-content-center">
                      <div className="event_day">20</div>
                      <div className="event_month">April</div>
                    </div>
                  </div>
                  <div className="event_body">
                    <div className="event_title"><a href="#">Debt Collection Services:</a></div>
                    <div className="event_subtitle">
                      <p>
                        We assists creditors in recovering debts from individual consumers who have unpaid loans, credit card balances,
                        medical bills, or other personal debts.
                        Commercial Debt Collection: Commercial debt recovery involves collecting unpaid invoices, loans, or outstanding payments
                        from businesses and organizations.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Event */}
                <div className="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="event_date d-flex flex-column align-items-center justify-content-center">
                      <div className="event_day">23</div>
                      <div className="event_month">April</div>
                    </div>
                  </div>
                  <div className="event_body">
                    <div className="event_title"><a href="#">Skip Tracing</a></div>
                    <div className="event_subtitle">We use advanced tools and techniques to locate debtors who may have moved or
                      changed their contact information to avoid payment.</div>
                  </div>
                </div>
                {/* Event */}

                {/* Event */}
                <div className="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="event_date d-flex flex-column align-items-center justify-content-center">
                      <div className="event_day">27</div>
                      <div className="event_month">April</div>
                    </div>
                  </div>
                  <div className="event_body">
                    <div className="event_title"><a href="#">Legal Support</a></div>
                    <div className="event_subtitle">Pre-Legal Collections: Before pursuing legal action, we attempt to collect debts through negotiation and communication with debtors.
                      Legal Collections: When necessary, we can initiate legal proceedings, such as filing lawsuits, obtaining judgments, and pursuing wage garnishments or property liens.</div>
                  </div>
                </div>
                {/* Event */}

              </div>
            </div>

            {/* Events */}
            <div className="col-lg-6 grouped_col">
              <div className="events">
                {/* Event */}
                <div className="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="event_date d-flex flex-column align-items-center justify-content-center">
                      <div className="event_day">20</div>
                      <div className="event_month">April</div>
                    </div>
                  </div>
                  <div className="event_body">
                    <div className="event_title"><a href="#">Credit Reporting</a></div>
                    <div className="event_subtitle">We may report debtors' payment information to credit bureaus,
                      which can impact debtors' credit scores and encourage them to pay their debts.</div>
                  </div>
                </div>
                {/* Event */}
                <div className="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="event_date d-flex flex-column align-items-center justify-content-center">
                      <div className="event_day">23</div>
                      <div className="event_month">April</div>
                    </div>
                  </div>
                  <div className="event_body">
                    <div className="event_title"><a href="#">Technology and Data Analytics</a></div>
                    <div className="event_subtitle">We leverage technology and data analytics to improve their success rates.
                      They use software and algorithms to prioritize debts,
                      predict debtor behavior, and optimize their collection efforts.</div>
                  </div>
                </div>
                {/* Event */}
                <div className="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="event_date d-flex flex-column align-items-center justify-content-center">
                      <div className="event_day">25</div>
                      <div className="event_month">April</div>
                    </div>
                  </div>
                  <div className="event_body">
                    <div className="event_title"><a href="#">Education and Consultation</a></div>
                    <div className="event_subtitle">We offer consulting services to clients, advising them on best practices for managing and preventing
                      debt in the future.</div>
                  </div>
                </div>
                {/* Event */}
                <div className="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="event_date d-flex flex-column align-items-center justify-content-center">
                      <div className="event_day">27</div>
                      <div className="event_month">April</div>
                    </div>
                  </div>
                  <div className="event_body">
                    <div className="event_title"><a href="#">Asset Investigation</a></div>
                    <div className="event_subtitle">In cases where debtors are suspected of concealing assets, debt recovery we conduct asset
                      investigations to identify and recover hidden assets.</div>
                  </div>
                </div>

              </div>
            </div>
            {/* News */}

          </div>
        </div>
      </div>
      {/* Milestones */}
      <div className="milestones">
        {/* Background image artis https://unsplash.com/@thepootphotographer */}
        <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="../src/assets/images/milestones.jpg" data-speed="0.8" />
        <div className="container">
          <div className="row milestones_container">
            {/* Milestone */}
            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon"><img src="../src/assets/images/milestone_1.svg" /></div>
                <div className="milestone_counter" data-end-value={1548}>0</div>
                <div className="milestone_text">Online Courses</div>
              </div>
            </div>
            {/* Milestone */}
            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon"><img src="../src/assets/images/milestone_2.svg" /></div>
                <div className="milestone_counter" data-end-value={7286}>0</div>
                <div className="milestone_text">Students</div>
              </div>
            </div>
            {/* Milestone */}
            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon"><img src="../src/assets/images/milestone_3.svg" /></div>
                <div className="milestone_counter" data-end-value={257}>0</div>
                <div className="milestone_text">Teachers</div>
              </div>
            </div>
            {/* Milestone */}
            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon"><img src="../src/assets/images/milestone_4.svg" /></div>
                <div className="milestone_counter" data-end-value={39}>0</div>
                <div className="milestone_text">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sections */}



      {/* Footer */}
      <Footer />
    </div>

  )
}
