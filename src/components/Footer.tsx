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
                  <div className="logo_text">GSA</div>
                </div>
              </a>
            </div>
            <div className="footer_about_text">
              <p style={{textAlign:"justify"}}>GSA Recovery Services Limited is a fast-growing debt recovery professional firm in Tanzania. We offer a wide range of services through a team of experienced professionals.
                </p>
            </div>
            <div className="footer_social">
              <ul>
                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              </ul>
            </div>
            <div className="copyright" style={{color:"#000"}}>
              Copyright © 2023 |  developed <a href="https://adeweb.co.tz" target="_blank">adeweb</a>
             </div>
          </div>
        </div>
        <div className="col-lg-3 footer_col">
          <div className="footer_links">
            <div className="footer_title">Quick menu</div>
            <ul className="footer_list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
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
                <div className="footer_contact_line">Derm Plaza, 11th Floor, <br />Bagamoyo Road, 
           <br />P.O. Box 2680 <br />
      Dar es salaam, Tanzania</div> 
              </div>
              <div className="footer_contact_item">
                <div className="footer_contact_title">Phone:</div>
                <div className="footer_contact_line"> +255 782 515 655</div>
              </div>
              <div className="footer_contact_item">
                <div className="footer_contact_title">Email:</div>
                <div className="footer_contact_line">info@gsaconsulting.co.tz</div>
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