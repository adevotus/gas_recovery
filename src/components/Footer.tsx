import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        {/* About */}
        <div className="col-lg-3 footer_col">
          <div className="footer_about">
            <div className="logo_container">
              <a href="#">
                <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                  <div className="logo_img"><img src="../src/assets/images/logo.png" /></div>
                  <div className="logo_text">learn</div>
                </div>
              </a>
            </div>
            <div className="footer_about_text">
              <p>Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar.</p>
            </div>
            <div className="footer_social">
              <ul>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              </ul>
            </div>
            <div className="copyright">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved |  <a href="https://adeweb.co.tz" target="_blank">adeweb</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</div>
          </div>
        </div>
        <div className="col-lg-3 footer_col">
          <div className="footer_links">
            <div className="footer_title">Quick menu</div>
            <ul className="footer_list">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 footer_col">
          <div className="footer_links">
            <div className="footer_title">Useful Links</div>
            <ul className="footer_list">
              <li><a href="courses.html">GSA AFRICA</a></li>
              <li><a href="#">GSA CONSULTING</a></li>
              <li><a href="news.html">News</a></li>
              <li><a href="#">Teachers</a></li>
            
            </ul>
          </div>
        </div>
        <div className="col-lg-3 footer_col">
          <div className="footer_contact">
            <div className="footer_title">Contact Us</div>
            <div className="footer_contact_info">
              <div className="footer_contact_item">
                <div className="footer_contact_title">Address:</div>
                <div className="footer_contact_line">Derm plaza , Makumbusho Dar es salaam</div>
              </div>
              <div className="footer_contact_item">
                <div className="footer_contact_title">Phone:</div>
                <div className="footer_contact_line">+53 345 7953 32453</div>
              </div>
              <div className="footer_contact_item">
                <div className="footer_contact_title">Email:</div>
                <div className="footer_contact_line">yourmail@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default  Footer