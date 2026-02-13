import React from 'react'

function page() {
  return (
    <>
            {/* Preloader Start */}
<div className="preloader">
  <div className="loading-container">
    <div className="loading"></div>
    <div id="loading-icon">
      <img src="/images/loader.svg" alt="Loading" />
    </div>
  </div>
</div>
{/* Preloader End */}


{/* Header Start */}
<header className="main-header">
  <div className="header-sticky">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo Start */}
        <a className="navbar-brand" href="index.html">
          <img src="images/logo.svg" alt="Logo" />
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
             Our services
          </h1>

          <nav className="wow fadeInUp">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">home</a>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
              >
                Our services
              </li>
            </ol>
          </nav>
        </div>
        {/* Page Header Box End */}
      </div>
    </div>
  </div>
</div>
{/* Page Header Section End */}

{/* Page Services Start */}
<div className="page-services">
  <div className="container">
    <div className="row service-items-list">

      <div className="col-xl-3 col-md-6">
        <div className="service-item wow fadeInUp">
          <div className="service-item-bg-shape">
            <img src="images/service-item-bg-shape-1.png" alt="" />
          </div>

          <div className="icon-box">
            <img src="images/icon-service-item-1.svg" alt="" />
          </div>

          <div className="service-item-body">
            <div className="service-item-content">
              <h2>
                <a href="service-single.html">Financial Planning</a>
              </h2>
              <p>Get expert guidance to streamline operations, solve challenges.</p>
            </div>

            <div className="service-item-btn">
              <a href="service-single.html" className="readmore-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="service-item active wow fadeInUp" data-wow-delay="0.2s">
          <div className="service-item-bg-shape">
            <img src="images/service-item-bg-shape-2.png" alt="" />
          </div>

          <div className="icon-box">
            <img src="images/icon-service-item-2.svg" alt="" />
          </div>

          <div className="service-item-body">
            <div className="service-item-content">
              <h2>
                <a href="service-single.html">Business Consulting</a>
              </h2>
              <p>Get expert guidance to streamline operations, solve challenges.</p>
            </div>

            <div className="service-item-btn">
              <a href="service-single.html" className="readmore-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
          <div className="service-item-bg-shape">
            <img src="images/service-item-bg-shape-3.png" alt="" />
          </div>

          <div className="icon-box">
            <img src="images/icon-service-item-3.svg" alt="" />
          </div>

          <div className="service-item-body">
            <div className="service-item-content">
              <h2>
                <a href="service-single.html">Investment Advisory</a>
              </h2>
              <p>Get expert guidance to streamline operations, solve challenges.</p>
            </div>

            <div className="service-item-btn">
              <a href="service-single.html" className="readmore-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
          <div className="service-item-bg-shape">
            <img src="images/service-item-bg-shape-1.png" alt="" />
          </div>

          <div className="icon-box">
            <img src="images/icon-service-item-4.svg" alt="" />
          </div>

          <div className="service-item-body">
            <div className="service-item-content">
              <h2>
                <a href="service-single.html">Strategic Consulting</a>
              </h2>
              <p>Get expert guidance to streamline operations, solve challenges.</p>
            </div>

            <div className="service-item-btn">
              <a href="service-single.html" className="readmore-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="0.8s">
          <div className="service-item-bg-shape">
            <img src="images/service-item-bg-shape-2.png" alt="" />
          </div>

          <div className="icon-box">
            <img src="images/icon-service-item-5.svg" alt="" />
          </div>

          <div className="service-item-body">
            <div className="service-item-content">
              <h2>
                <a href="service-single.html">Digital Marketing</a>
              </h2>
              <p>Get expert guidance to streamline operations, solve challenges.</p>
            </div>

            <div className="service-item-btn">
              <a href="service-single.html" className="readmore-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="1s">
          <div className="service-item-bg-shape">
            <img src="images/service-item-bg-shape-3.png" alt="" />
          </div>

          <div className="icon-box">
            <img src="images/icon-service-item-6.svg" alt="" />
          </div>

          <div className="service-item-body">
            <div className="service-item-content">
              <h2>
                <a href="service-single.html">Project Management</a>
              </h2>
              <p>Get expert guidance to streamline operations, solve challenges.</p>
            </div>

            <div className="service-item-btn">
              <a href="service-single.html" className="readmore-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="1.2s">
          <div className="service-item-bg-shape">
            <img src="images/service-item-bg-shape-1.png" alt="" />
          </div>

          <div className="icon-box">
            <img src="images/icon-service-item-7.svg" alt="" />
          </div>

          <div className="service-item-body">
            <div className="service-item-content">
              <h2>
                <a href="service-single.html">Smart Execution</a>
              </h2>
              <p>Get expert guidance to streamline operations, solve challenges.</p>
            </div>

            <div className="service-item-btn">
              <a href="service-single.html" className="readmore-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="service-item wow fadeInUp" data-wow-delay="1.4s">
          <div className="service-item-bg-shape">
            <img src="images/service-item-bg-shape-2.png" alt="" />
          </div>

          <div className="icon-box">
            <img src="images/icon-service-item-8.svg" alt="" />
          </div>

          <div className="service-item-body">
            <div className="service-item-content">
              <h2>
                <a href="service-single.html">Compliance Services</a>
              </h2>
              <p>Get expert guidance to streamline operations, solve challenges.</p>
            </div>

            <div className="service-item-btn">
              <a href="service-single.html" className="readmore-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
{/* Page Services End */}

{/* Our Story Section Start */}
<div className="our-story dark-section">
  {/* Video Start */}
  <div className="our-story-bg-video">
    {/* Selfhosted Video Start */}
    <video autoPlay muted loop id="storyvideo">
      <source
        src="https://demo.awaikenthemes.com/assets/videos/optive-story-bg.mp4"
        type="video/mp4"
      />
    </video>
    {/* Selfhosted Video End */}
  </div>
  {/* Video End */}

  <div className="container">
    <div className="row">
      <div className="col-xl-6">
        {/* Our Story Content Start */}
        <div className="our-story-content">
          {/* Our Story Content Header Start */}
          <div className="our-story-content-header">
            {/* Section Title Start */}
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">
                Watch Our Story
              </span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                From insight to impact how we empower our clients
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                We transform deep financial insights into meaningful action.
                By understanding each client's goals and challenges, we deliver
                strategic guidance, practical solutions.
              </p>
            </div>
            {/* Section Title End */}

            {/* Video Play Button Start */}
            <div className="video-play-button wow fadeInUp" data-wow-delay="0.4s">
              <a
                href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                className="popup-video bg-effect"
                data-cursor-text="Play"
              >
                <i className="fa-solid fa-play"></i>
              </a>
              <h3>Watch Our Video</h3>
            </div>
            {/* Video Play Button End */}
          </div>
          {/* Our Story Content Header End */}

          {/* Our Story Content Body Start */}
          <div
            className="our-story-content-body wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <h3>
              “ Strong financial planning combined with smart execution creates
              the foundation for sustainable growth.
            </h3>
          </div>
          {/* Our Story Content Body End */}
        </div>
        {/* Our Story Content End */}
      </div>

      <div className="col-xl-6">
        {/* Our Story History Box Start */}
        <div className="our-story-history-box">
          {/* Story History Box Header Start */}
          <div className="story-history-box-header wow fadeInUp">
            {/* Satisfy Client Images Start */}
            <div className="satisfy-client-images">
              {[1, 2, 3, 4, 5].map((item) => (
                <div className="satisfy-client-image" key={item}>
                  <figure className="image-anime">
                    <img src={`images/author-${item}.jpg`} alt="" />
                  </figure>
                </div>
              ))}
            </div>
            {/* Satisfy Client Images End */}

            {/* Story History Box Header Content Start */}
            <div className="story-history-box-header-content">
              <h3>
                <span className="counter">100</span>+ Awards & Recognitions
              </h3>
              <p>
                Our 100+ awards and recognitions reflect our commitment to stand
                as a testament to the trust our clients and peers place in our
                expertise and results.
              </p>
            </div>
            {/* Story History Box Header Content End */}
          </div>
          {/* Story History Box Header End */}

          {/* Story Counter Items List Start */}
          <div
            className="story-counter-items-list wow fadeInUp"
            data-wow-delay="0.2s"
          >
            {/* Story Counter Item */}
            <div className="story-counter-item">
              <div className="story-counter-item-header">
                <h2>
                  <span className="counter">40</span>+
                </h2>
                <h3>Industries Served</h3>
              </div>
              <div className="story-counter-item-content">
                <p>We proudly serve a wide range of industries.</p>
              </div>
            </div>

            {/* Story Counter Item */}
            <div className="story-counter-item">
              <div className="story-counter-item-header">
                <h2>
                  <span className="counter">98</span>%
                </h2>
                <h3>Client Satisfaction Rate</h3>
              </div>
              <div className="story-counter-item-content">
                <p>Our high client satisfaction rate reflects the trust.</p>
              </div>
            </div>
          </div>
          {/* Story Counter Items List End */}
        </div>
        {/* Our Story History Box End */}
      </div>
    </div>
  </div>
</div>
{/* Our Story Section End */}

{/* Why Choose Us Section Start */}
<div className="why-choose-us">
  <div className="container">
    <div className="row">

      <div className="col-xl-6">
        {/* Why Choose Us Image Box Start */}
        <div className="why-choose-us-image-box">
          <div className="why-choose-us-image">
            <figure className="image-anime reveal">
              <img src="images/why-choose-us-image.jpg" alt="" />
            </figure>
          </div>

          {/* Why Choose Growth Box Start */}
          <div className="why-choose-growth-box">
            <div className="why-choose-growth-box-header">
              <div className="icon-box">
                <img src="images/icon-why-choose-growth-box.svg" alt="" />
              </div>
              <div className="why-choose-growth-box-counter">
                <p>
                  +<span>0,54</span>%
                </p>
              </div>
            </div>

            <div className="why-choose-growth-box-body">
              <div className="why-choose-growth-box-content">
                <p>Total Growth</p>
                <h2>
                  <span className="counter">96.567</span>
                </h2>
              </div>
              <div className="why-choose-growth-box-image">
                <img src="images/why-choose-growth-box-image.svg" alt="" />
              </div>
            </div>
          </div>
          {/* Why Choose Growth Box End */}
        </div>
        {/* Why Choose Us Image Box End */}
      </div>

      <div className="col-xl-6">
        {/* Why Choose Us Content Start */}
        <div className="why-choose-content">
          <div className="section-title">
            <span className="section-sub-title wow fadeInUp">
              Why Choose Us
            </span>
            <h2 className="text-anime-style-3" data-cursor="-opaque">
              Trusted experts expertise to your financial growth
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              Our dedicated team works closely with you to understand your goals,
              provide strategic guidance, and implement actionable plans that
              drive growth, optimize performance.
            </p>
          </div>

          <div className="why-choose-body wow fadeInUp" data-wow-delay="0.4s">
            <div className="why-choose-body-item">
              <div className="icon-box">
                <img src="images/icon-why-choose-body-item-1.svg" alt="" />
              </div>
              <div className="why-choose-body-item-content">
                <h3>Expertise You Can Trust</h3>
                <p>
                  With years of hands-on experience in finance and business
                  strategy
                </p>
              </div>
            </div>

            <div className="why-choose-body-item">
              <div className="icon-box">
                <img src="images/icon-why-choose-body-item-2.svg" alt="" />
              </div>
              <div className="why-choose-body-item-content">
                <h3>Solution Tailored to Your Goal</h3>
                <p>
                  Every strategy we create is customized to your unique needs.
                </p>
              </div>
            </div>
          </div>

          <div className="why-choose-list wow fadeInUp" data-wow-delay="0.6s">
            <ul>
              <li>Building Strong Financial Futures</li>
              <li>Smart Experts for Smarter Growth</li>
              <li>Proven frameworks that deliver</li>
              <li>Expertise That Powers Your Growth</li>
            </ul>
          </div>

          <div className="why-choose-btn wow fadeInUp" data-wow-delay="0.8s">
            <a href="contact.html" className="btn-default">
              Learn More
            </a>
          </div>
        </div>
        {/* Why Choose Us Content End */}
      </div>

      <div className="col-lg-12">
        <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
          <p>
            Join our team and help weave innovation, quality, and success together
            worldwide.
          </p>
          <ul>
            <li>
              <span className="counter">4.9</span>/5
            </li>
            <li>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>Our 4200 Review</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>
{/* Why Choose Us Section End */}

{/* Our Testimonials Section Start */}
<div className="our-testimonials">
  {/* Video Start */}
  <div className="our-testimonial-bg-video">
    {/* Selfhosted Video Start */}
    <video autoPlay muted loop id="testimonialsvideo">
      <source
        src="https://demo.awaikenthemes.com/assets/videos/optive-testimonial-bg.mp4"
        type="video/mp4"
      />
    </video>
    {/* Selfhosted Video End */}
  </div>
  {/* Video End */}

  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/* Testimonial Slider Box Start */}
        <div className="testimonial-slider-box">
          {/* Section Title Start */}
          <div className="section-title">
            <span className="section-sub-title wow fadeInUp">
              Our Testimonials
            </span>
            <h2 className="text-anime-style-3" data-cursor="-opaque">
              What Clients Say
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              Our client's feedback reflects the trust, satisfaction, and success
              they experience through our financial advisory and business.
            </p>
          </div>
          {/* Section Title End */}

          {/* Testimonial Slider Start */}
          <div className="testimonial-slider wow fadeInUp">
            <div className="swiper">
              <div className="swiper-wrapper" data-cursor-text="Drag">
                {/* Testimonial Slide */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="testimonial-item-rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>

                    <div className="testimonial-item-content">
                      <p>
                        “ The team provided us with clear financial direction and
                        practical business strategies. Their insights helped us
                        streamline operations & plan growth with confidence.”
                      </p>
                    </div>

                    <div className="testimonial-item-author">
                      <div className="testimonial-author-image">
                        <figure>
                          <img src="images/author-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="testimonial-author-content">
                        <h2>Sarah Mitchell</h2>
                        <p>Operations Manager, Horizon Tech</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Slide */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="testimonial-item-rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>

                    <div className="testimonial-item-content">
                      <p>
                        “ The team provided us with clear financial direction and
                        practical business strategies. Their insights helped us
                        streamline operations & plan growth with confidence.”
                      </p>
                    </div>

                    <div className="testimonial-item-author">
                      <div className="testimonial-author-image">
                        <figure>
                          <img src="images/author-2.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="testimonial-author-content">
                        <h2>Brooklyn Simmons</h2>
                        <p>Homeowner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial Slider End */}
        </div>
        {/* Testimonial Slider Box End */}
      </div>
    </div>
  </div>
</div>
{/* Our Testimonials Section End */}

{/* Our Faqs Section Start */}
<div className="our-faqs">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            Frequently Asked Questions
          </span>
          <h2 className="text-anime-style-3" data-cursor="-opaque">
            Clear Answers to Questions
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            We believe informed decisions start with clarity. This section
            addresses common questions about our services, process, and approach.
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      <div className="col-xl-6">
        {/* FAQ Accordion Start */}
        <div className="faq-accordion" id="accordion">
          {/* FAQ Item */}
          <div className="accordion-item wow fadeInUp">
            <h2 className="accordion-header" id="heading1">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                Q1. Can you help my business improve profitability?
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse"
              role="region"
              aria-labelledby="heading1"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  We recommend reviewing your financial plan at least annually or
                  whenever there's a significant life or business change to
                  ensure it aligns with your objectives.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item */}
          <div
            className="accordion-item wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h2 className="accordion-header" id="heading2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                Q2. What services do you offer for individual financial planning?
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              role="region"
              aria-labelledby="heading2"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  We recommend reviewing your financial plan at least annually or
                  whenever there's a significant life or business change to
                  ensure it aligns with your objectives.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item */}
          <div
            className="accordion-item wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <h2 className="accordion-header" id="heading3">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                Q3. How often should I review my financial plan?
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse show"
              role="region"
              aria-labelledby="heading3"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  We recommend reviewing your financial plan at least annually or
                  whenever there's a significant life or business change to
                  ensure it aligns with your objectives.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item */}
          <div
            className="accordion-item wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <h2 className="accordion-header" id="heading4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                Q4. How do you approach risk management for businesses?
              </button>
            </h2>
            <div
              id="collapse4"
              className="accordion-collapse collapse"
              role="region"
              aria-labelledby="heading4"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  We recommend reviewing your financial plan at least annually or
                  whenever there's a significant life or business change to
                  ensure it aligns with your objectives.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item */}
          <div
            className="accordion-item wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <h2 className="accordion-header" id="heading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
              >
                Q5. What types of investments do you recommend?
              </button>
            </h2>
            <div
              id="collapse5"
              className="accordion-collapse collapse"
              role="region"
              aria-labelledby="heading5"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  We recommend reviewing your financial plan at least annually or
                  whenever there's a significant life or business change to
                  ensure it aligns with your objectives.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item */}
          <div
            className="accordion-item wow fadeInUp"
            data-wow-delay="1s"
          >
            <h2 className="accordion-header" id="heading6">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse6"
                aria-expanded="false"
                aria-controls="collapse6"
              >
                Q6. How do you ensure my investments are secure?
              </button>
            </h2>
            <div
              id="collapse6"
              className="accordion-collapse collapse"
              role="region"
              aria-labelledby="heading6"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <p>
                  We recommend reviewing your financial plan at least annually or
                  whenever there's a significant life or business change to
                  ensure it aligns with your objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Accordion End */}
      </div>

      <div className="col-xl-6">
        {/* Faq Image Box Start */}
        <div className="faq-image-box">
          <div className="faq-image">
            <figure className="image-anime reveal">
              <img src="images/faq-image.jpg" alt="" />
            </figure>
          </div>

          {/* FAQ CTA Box Start */}
          <div className="faq-cta-box">
            <div className="faq-cta-box-image">
              <div className="faq-cta-image">
                <figure>
                  <img src="images/faq-cta-box-image.jpg" alt="" />
                </figure>
              </div>

              <div className="video-play-button">
                <a
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video bg-effect"
                  data-cursor-text="Play"
                >
                  <i className="fa-solid fa-play"></i>
                </a>
              </div>
            </div>

            <div className="faq-cta-box-content">
              <h3>“Success in business comes from clear strategy.”</h3>
            </div>
          </div>
          {/* FAQ CTA Box End */}
        </div>
        {/* Faq Image Box End */}
      </div>

      <div className="col-xl-12">
        {/* FAQ Company Slider Start */}
        <div
          className="faq-company-slider-box wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="faq-company-content">
            <hr />
            <h3>Trusted By Leading Businesses Worldwide</h3>
            <hr />
          </div>

          <div className="faq-company-slider">
            <div className="swiper">
              <div className="swiper-wrapper">
                {[1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
                  <div className="swiper-slide" key={idx}>
                    <div className="faq-company-logo">
                      <img
                        src={`images/company-supports-logo-${i}.svg`}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Company Slider End */}
      </div>
    </div>
  </div>
</div>
{/* Our Faqs Section End */}

{/* Main Footer Start */}
<footer className="main-footer-metal dark-section">
  <div className="container">
    <div className="row">
      <div className="col-xl-4">
        {/* About Footer Start */}
        <div className="about-footer-metal">
          {/* Footer Logo Start */}
          <div className="footer-logo-metal">
            <img src="images/footer-logo.svg" alt="" />
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
              <li><a href="index-3.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="blog.html">Our Blogs</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-links-metal">
            <h3>Our Services</h3>
            <ul>
              <li><a href="service-single.html">Financial Planning</a></li>
              <li><a href="service-single.html">Wealth Management</a></li>
              <li><a href="service-single.html">Investment Strategies</a></li>
              <li><a href="service-single.html">Risk Management</a></li>
              <li><a href="service-single.html">Digital Marketing</a></li>
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
                <a href="tel:+123456798">+(123) 456-798</a>
              </li>
              <li>
                <b>Email:</b>{" "}
                <a href="mailto:info@domainname.com">
                  info@domainname.com
                </a>
              </li>
              <li>
                <b>Address:</b> 123 Business Avenue, New Park,
                New York, NY 10001
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