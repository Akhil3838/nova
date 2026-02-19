import React from 'react'

function Footer() {
  return (
    <>
    <footer className="main-footer-metal dark">
  <div className="container">
    <div className="row">
      <div className="col-xl-4">
        {/* About Footer Start */}
        <div className="about-footer-metal">
          {/* Footer Logo Start */}
          <div className="footer-logo-metal">
          <img src="/images/logo1.png" alt="Logo"  style={{background:'white'}} className='rounded-2'/>
          </div>
          {/* Footer Logo End */}

          {/* Footer Newsletter Form Start */}
          <div className="footer-newsletter-form-metal">
            <h2>Subscribe</h2>
            <form id="newslettersForm" action="#" method="POST">
              <div className="form-group">
                <input
                  type="email"
                  name="mail"
                  className="form-control"
                  id="mail"
                  placeholder="Email Address *"
                  required
                />
                <button
                  type="submit"
                  className="newsletter-btn-metal"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
          {/* Footer Newsletter Form End */}
        </div>
        {/* About Footer End */}
      </div>

      <div className="col-xl-8">
        {/* Footer Links Box Start */}
        <div className="footer-links-box-metal">
          {/* Quick Links */}
          <div className="footer-links-metal">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/services">Services</a></li>
              {/* <li><a href="/blog">Our Blogs</a></li> */}
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-links-metal">
            <h3>Our Services</h3>
           <ul>
  <li><a href="/services">General Contracting</a></li>
  <li><a href="/services">Facilities Management</a></li>
  <li><a href="/services">Electro Mechanical Services (MEP)</a></li>
  <li><a href="/services">Interior Design & Fit-Out</a></li>
  <li><a href="/services">ELV Systems</a></li>
</ul>

          </div>

          {/* Social Media */}
          <div className="footer-links-metal">
            <h3>Social Media</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>

              {/* <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Dribbble</a></li> */}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-links-metal footer-contact-list-metal">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <b>Phone:</b>{" "}
                <a href="tel:+123456798">+9976455554</a>
              </li>
              <li>
                <b>Email:</b>{" "}
                <a href="#">
                  nova@.com
                </a>
              </li>
              <li>
                <b>Address:</b> 123 Main Street, kakkanad,
                kochi, 66461
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Links Box End */}
      </div>

      <div className="col-xl-12">
        {/* Footer Copyright Start */}
        <div className="footer-copyright-text-metal">
          <p>Copyright © 2026 All Rights Reserved.</p>
        </div>
        {/* Footer Copyright End */}
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer