import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
<div className="super_container">
    {/* Header */}
   <Header/>
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
                      <div className="featured_tag"><a href="#">GSA Recovery Services Limited </a></div>
                      {/* <div className="featured_price ml-auto">Price: <span>3444</span></div> */}
                    </div>
                    <div className="featured_title"><h3><a href="#">Online Literature Course</a></h3></div>
                    <div className="featured_text">is a fast-growing debt recovery professional firm in Tanzania. We offer a wide range of 
                    services through a team of experienced professionals. </div>
                    <div className="featured_footer d-flex align-items-center justify-content-start">
                      <div className="featured_author_image"><img src="../src/assets/images/featured_author.jpg" /></div>
                      {/* <div className="featured_author_name">By <a href="#">James S. Morrison</a></div>
                      <div className="featured_sales ml-auto"><span>352</span> Sales</div> */}
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
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="section_title text-center"><h2>Choose your course</h2></div>
            <div className="section_subtitle">Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="course_search">
              <form action="#" className="course_search_form d-flex flex-md-row flex-column align-items-start justify-content-between">
                <div><input type="text" className="course_input" placeholder="Course" /></div>
                <div><input type="text" className="course_input" placeholder="Level" /></div>
                <button className="course_button"><span>search course</span><span className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true" /></span></button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* Courses Slider */}
            <div className="courses_slider_container">
              <div className="owl-carousel owl-theme courses_slider">
                {/* Slider Item */}
                <div className="owl-item">
                  <div className="course">
                    <div className="course_image"><img src="../src/assets/images/course_1.jpg" /></div>
                    <div className="course_body">
                      <div className="course_header d-flex flex-row align-items-center justify-content-start">
                        <div className="course_tag"><a href="#">Featured</a></div>
                        <div className="course_price ml-auto">Price: <span>$35</span></div>
                      </div>
                      <div className="course_title"><h3><a href="courses.html">Online Literature Course</a></h3></div>
                      <div className="course_text">Maecenas rutrum viverra sapien sed ferm entum. Morbi tempor odio eget lacus tempus pulvinar.</div>
                      <div className="course_footer d-flex align-items-center justify-content-start">
                        <div className="course_author_image"><img src="../src/assets/images/featured_author.jpg" alt="https://unsplash.com/@anthonytran" /></div>
                        <div className="course_author_name">By <a href="#">James S. Morrison</a></div>
                        <div className="course_sales ml-auto"><span>352</span> Sales</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slider Item */}
                <div className="owl-item">
                  <div className="course">
                    <div className="course_image"><img src="../src/assets/images/course_2.jpg" /></div>
                    <div className="course_body">
                      <div className="course_header d-flex flex-row align-items-center justify-content-start">
                        <div className="course_tag"><a href="#">New</a></div>
                        <div className="course_price ml-auto">Price: <span>$35</span></div>
                      </div>
                      <div className="course_title"><h3><a href="courses.html">Social Media Course</a></h3></div>
                      <div className="course_text">Maecenas rutrum viverra sapien sed ferm entum. Morbi tempor odio eget lacus tempus pulvinar.</div>
                      <div className="course_footer d-flex align-items-center justify-content-start">
                        <div className="course_author_image"><img src="../src/assets/images/course_author_2.jpg" /></div>
                        <div className="course_author_name">By <a href="#">Mark Smith</a></div>
                        <div className="course_sales ml-auto"><span>352</span> Sales</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slider Item */}
                <div className="owl-item">
                  <div className="course">
                    <div className="course_image"><img src="../src/assets/images/course_3.jpg" alt="https://unsplash.com/@annademy" /></div>
                    <div className="course_body">
                      <div className="course_header d-flex flex-row align-items-center justify-content-start">
                        <div className="course_tag"><a href="#">Featured</a></div>
                        <div className="course_price ml-auto">Price: <span>$35</span></div>
                      </div>
                      <div className="course_title"><h3><a href="courses.html">Marketing Course</a></h3></div>
                      <div className="course_text">Maecenas rutrum viverra sapien sed ferm entum. Morbi tempor odio eget lacus tempus pulvinar.</div>
                      <div className="course_footer d-flex align-items-center justify-content-start">
                        <div className="course_author_image"><img src="../src/assets/images/course_author_3.jpg" /></div>
                        <div className="course_author_name">By <a href="#">Julia Williams</a></div>
                        <div className="course_sales ml-auto"><span>352</span> Sales</div>
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
    <div className="grouped_sections">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 grouped_col">
          <div className="grouped_title text-center">Our Services </div>
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
   <Footer/>
  </div>   
  
  )
}
