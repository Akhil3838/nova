import React from 'react'

function Header() {
  return (
    <>
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <a className="navbar-brand" href="/">
              <img src="/images/logo1.png" alt="Logo" />
            </a>
            {/* Logo End */}
    
            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item ">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                    {/* <ul>
                      <li className="nav-item">
                        <a className="nav-link" href="index-2.html">
                          Home - Version 1
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="index-4.html">
                          Home - Version 2
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="index-3.html">
                          Home - Version 3
                        </a>
                      </li>
                    </ul> */}
                  </li>
    
                  <li className="nav-item">
                    <a className="nav-link" href="/about-us">
                      About Us
                    </a>
                  </li>
    
                  <li className="nav-item">
                    <a className="nav-link" href="/services">
                      Services
                    </a>
                  </li>
    
                  {/* <li className="nav-item">
                    <a className="nav-link" href="/blog">
                      Blog
                    </a>
                  </li> */}
    
                  {/* <li className="nav-item submenu">
                    <a className="nav-link" href="#">
                      Pages
                    </a>
                    <ul>
                      <li className="nav-item">
                        <a className="nav-link" href="service-singl">
                          Service Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog-single.html">
                          Blog Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="case-study.html">
                          Case Study
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="case-study-single.html"
                        >
                          Case Study Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="team.html">
                          Our Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="team-single.html"
                        >
                          Team Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="pricing.html">
                          Pricing Plan
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="testimonials.html"
                        >
                          Testimonials
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="image-gallery.html"
                        >
                          Image Gallery
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="video-gallery.html"
                        >
                          Video Gallery
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="faqs.html">
                          FAQs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="404.html">
                          404
                        </a>
                      </li>
                    </ul>
                  </li> */}
    
                  <li className="nav-item">
                    <a className="nav-link" href="/contact-us">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
    
              {/* Header Button Start */}
              <div className="header-btn">
                <a href="/contact-us" className="btn-default">
                  Get Free Quote
                </a>
              </div>
              {/* Header Button End */}
            </div>
            {/* Main Menu End */}
    
            <div className="navbar-toggle"></div>
          </div>
        </nav>
    
        <div className="responsive-menu"></div>
      </div>
    </header>
    
    </>
  )
}

export default Header