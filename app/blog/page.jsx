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
            Blogs
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
                blog
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

{/* Page Blog Start */}
<div className="page-blog">
  <div className="container">
    <div className="row">

      <div className="col-xl-4 col-md-6">
        <div className="post-item wow fadeInUp">
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure className="image-anime">
                <img src="images/post-1.jpg" alt="" />
              </figure>
            </a>
            <div className="post-item-tags">
              <a href="blog-single.html">Financial Planning</a>
            </div>
          </div>

          <div className="post-item-body">
            <div className="post-item-content">
              <h2>
                <a href="blog-single.html">
                  Top Industry Trends That Are Shaping the Future of Operations
                </a>
              </h2>
            </div>
            <div className="post-item-btn">
              <a href="blog-single.html" className="readmore-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-md-6">
        <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure className="image-anime">
                <img src="images/post-2.jpg" alt="" />
              </figure>
            </a>
            <div className="post-item-tags">
              <a href="blog-single.html">Personal Finance</a>
            </div>
          </div>

          <div className="post-item-body">
            <div className="post-item-content">
              <h2>
                <a href="blog-single.html">
                  Optimizing Operations Through Strategic Cost Control
                </a>
              </h2>
            </div>
            <div className="post-item-btn">
              <a href="blog-single.html" className="readmore-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-md-6">
        <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure className="image-anime">
                <img src="images/post-3.jpg" alt="" />
              </figure>
            </a>
            <div className="post-item-tags">
              <a href="blog-single.html">Business Markets</a>
            </div>
          </div>

          <div className="post-item-body">
            <div className="post-item-content">
              <h2>
                <a href="blog-single.html">
                  How Businesses Can Improve Cash Flow in Uncertain Markets
                </a>
              </h2>
            </div>
            <div className="post-item-btn">
              <a href="blog-single.html" className="readmore-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12">
        <div className="page-pagination wow fadeInUp" data-wow-delay="0.4s">
          <ul className="pagination">
            <li>
              <a href="#"><i className="fa-solid fa-angle-left"></i></a>
            </li>
            <li className="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li>
              <a href="#"><i className="fa-solid fa-angle-right"></i></a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>
{/* Page Blog End */}

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