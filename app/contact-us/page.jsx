import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

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
<Header/>
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
<Footer/>
{/* Main Footer End */}

    </>
  )
}

export default page