import React from 'react'

function page() {
  return (
    <>

            {/* Preloader Start */}
{/* <div className="preloader">
  <div className="loading-container">
    <div className="loading"></div>
    <div id="loading-icon">
      <img src="/images/loader.svg" alt="Loading" />
    </div>
  </div>
</div> */}
{/* Preloader End */}


{/* Header Start */}
<header className="main-header">
  <div className="header-sticky">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo Start */}
        <a className="navbar-brand" href="/">
          <img src="images/logo1.png" alt="Logo" />
        </a>
        {/* Logo End */}

        {/* Main Menu Start */}
        <div className="collapse navbar-collapse main-menu">
          <div className="nav-menu-wrapper">
            <ul className="navbar-nav mr-auto" id="menu">
              <li className="nav-item submenu">
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

              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>

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
{/* Header End */}

{/* Page Header Section Start */}
<div className="page-header bg-section parallaxie">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/* Page Header Box Start */}
        <div className="page-header-box">
          <h1
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Contact us
          </h1>

          {/* <nav className="wow fadeInUp">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">home</a>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
              >
                Contact us
              </li>
            </ol>
          </nav> */}
        </div>
        {/* Page Header Box End */}
      </div>
    </div>
  </div>
</div>
{/* Page Header Section End */}

{/* Page Contact Us Start */}
<div className="page-contact-us">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        {/* Contact Image Form Box Start */}
        <div className="contact-content-form-box">
          <div className="contact-us-content-box">
            <div className="contact-us-content-header">
              <div className="contact-us-content">
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Contact Us Today
                </h2>
                <p className="wow fadeInUp">
                  Whether you have questions, require expert guidance, or are ready to start a project, we're here to provide support.
                </p>
              </div>

              {/* Contact Info List Start */}
              <div className="contact-info-list">
                {/* Contact Info Item */}
                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon-box">
                    <img src="images/icon-phone-primary.svg" alt="" />
                  </div>
                  <div className="contact-info-item-content">
                    <h3>Call Now!</h3>
                    <p>
                      <a href="tel:123456789">+00 123 456 789</a>
                    </p>
                  </div>
                </div>

                {/* Contact Info Item */}
                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="images/icon-mail-primary.svg" alt="" />
                  </div>
                  <div className="contact-info-item-content">
                    <h3>E-mail Us!</h3>
                    <p>
                      <a href="mailto:support@domainname.com">support@domainname.com</a>
                    </p>
                  </div>
                </div>

                {/* Contact Info Item */}
                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <img src="images/icon-location-primary.svg" alt="" />
                  </div>
                  <div className="contact-info-item-content">
                    <h3>Our Location!</h3>
                    <p>123 Business Avenue, Corporate Park, New York, NY 10001</p>
                  </div>
                </div>
              </div>
              {/* Contact Info List End */}
            </div>

            {/* Contact Social List Start */}
            <div className="contact-social-list wow fadeInUp" data-wow-delay="0.8s">
              <h3>Follow Me On Socials:</h3>
              <ul>
                <li>
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
            {/* Contact Social List End */}
          </div>

          {/* Contact Form Start */}
          <div className="contact-us-form">
            <form
              id="contactForm"
              action="#"
              method="POST"
              data-toggle="validator"
              className="contact-form wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="row">
                <div className="form-group col-md-6 mb-4">
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    id="fname"
                    placeholder="First Name *"
                    required
                  />
                </div>

                <div className="form-group col-md-6 mb-4">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control"
                    id="lname"
                    placeholder="Last Name *"
                    required
                  />
                </div>

                <div className="form-group col-md-6 mb-4">
                  <label>Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email Address *"
                    required
                  />
                </div>

                <div className="form-group col-md-6 mb-4">
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Phone Number *"
                    required
                  />
                </div>

                <div className="form-group col-md-12 mb-5">
                  <label>Message:</label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Any Additional Message..."
                  ></textarea>
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn-default">
                    Submit Message
                  </button>
                  <div id="msgSubmit" className="h3 hidden"></div>
                </div>
              </div>
            </form>
          </div>
          {/* Contact Form End */}
        </div>
        {/* Contact Image Form Box End */}
      </div>
    </div>
  </div>
</div>
{/* Page Contact Us End */}


{/* Google Map Start */}
<div className="google-map">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            Our Location
          </span>
          <h2 className="text-anime-style-3" data-cursor="-opaque">
            Find Us where Expertise Meets
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Our location is designed to make connecting with us easy and convenient.
            Situated in a strategic area, we provide a welcoming space where expertise,
            collaboration.
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>
  </div>

  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        {/* Google Map IFrame Start */}
        <div className="google-map-iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Google Map IFrame End */}
      </div>
    </div>
  </div>
</div>
{/* Google Map End */}

{/* Main Footer Start */}
<footer className="main-footer-metal dark-section">
  <div className="container">
    <div className="row">
      <div className="col-xl-4">
        {/* About Footer Start */}
        <div className="about-footer-metal">
          {/* Footer Logo Start */}
          <div className="footer-logo-metal">
          <img src="images/logo1.png" alt="Logo" />
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
              <li><a href="/blog">Our Blogs</a></li>
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
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Dribbble</a></li>
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
{/* Main Footer End */}

    </>
  )
}

export default page