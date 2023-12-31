

export default function Header() {
  return (
    <div>
 <header className="header">
      {/* Top Bar */}
      <div className="top_bar">
        <div className="top_bar_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                  <ul className="top_bar_contact_list">
                    <li><div className="question">Have any questions?</div></li>
                    <li>
                      <div>GSA RECOVERY LIMITED</div>
                    </li>
                    <li>
                      <div>info@gsarsl.co.tz</div>
                    </li>
                  </ul>
                  <div className="top_bar_login ml-auto">
                    <ul>
                      <li><a href="https://gsaafrica.com/">GSA AFRICA</a></li>
                      {/* <li><a href="#">GSA CONSULTING</a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Content */}
      <div className="header_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header_content d-flex flex-row align-items-center justify-content-start">
                <div className="logo_container">
                  <a href="#">
                    <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                      {/* <div className="logo_img"><img src="../src/assets/images/logo.png" /></div> */}
                      <div className="logo_text">GSA Recovery</div>
                    </div>
                  </a>
                </div>
                <nav className="main_nav_contaner ml-auto">
                  <ul className="main_nav">
                    <li><a href="/">home</a></li>
                    <li><a href="/about">about us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">contact</a></li>
                  </ul>
                  <div className="search_button"><i className="fa fa-search" aria-hidden="true" /></div>
                  {/* Hamburger */}
                  <div className="hamburger menu_mm">
                    <i className="fa fa-bars menu_mm" aria-hidden="true" />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Search Panel */}
      <div className="header_search_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
                <form action="#" className="header_search_form">
                  <input type="search" className="search_input" placeholder="Search" />
                  <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Menu */}
    <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
      <div className="menu_close_container"><div className="menu_close"><div /><div /></div></div>
      <div className="search">
        <form action="#" className="header_search_form menu_mm">
          <input type="search" className="search_input menu_mm" placeholder="Search" />
          <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
            <i className="fa fa-search menu_mm" aria-hidden="true" />
          </button>
        </form>
      </div>
      <nav className="menu_nav">
        <ul className="menu_mm">
          <li className="menu_mm"><a href="/">Home</a></li>
          <li className="menu_mm"><a href="/about">About</a></li>
          <li className="menu_mm"><a href="/services">Service</a></li>
  
          <li className="menu_mm"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="menu_extra">
        <div className="menu_phone"><span className="menu_title">phone:</span>+255 782 515 655</div>
        <div className="menu_social">
          <span className="menu_title">follow us</span>
          <ul>
            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
          </ul>
        </div>
      </div>
    </div>

    </div>

    
  )
}
