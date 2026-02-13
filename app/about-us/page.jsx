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
            About us
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
                about us
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

{/* About Us Section Start */}
<div className="about-us">
  <div className="container">
    <div className="row section-row align-items-center">
      <div className="col-xl-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            About Our Construction
          </span>

          <h2
            className="text-effect"
            data-cursor="-opaque"
          >
            Expert financial and business consulting built on
            trust, precision,{" "}
            <span className="about-us-title-img-1">
              <img src="images/author-2.jpg" alt="" />
              <img src="images/author-1.jpg" alt="" />
              <img src="images/author-3.jpg" alt="" />
            </span>{" "}
            and{" "}
            <span className="about-us-title-img-2">
              <img
                src="images/about-us-title-img-1.jpg"
                alt=""
              />
            </span>{" "}
            proven results
          </h2>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      <div className="col-lg-12">
        {/* About Counter List Start */}
        <div
          className="about-counter-item-list wow fadeInUp"
          data-wow-delay="0.2s"
        >
          {/* About Counter Item */}
          <div className="about-counter-item">
            <ul>
              <li>Clients Served Successfully</li>
            </ul>
            <h2>
              <span className="counter">320</span>+
            </h2>
            <p>
              Helping businesses across industries achieve
              financial clarity and sustainable growth.
            </p>
          </div>

          {/* About Counter Item */}
          <div className="about-counter-item">
            <ul>
              <li>Client Retention Rate</li>
            </ul>
            <h2>
              <span className="counter">98</span>%
            </h2>
            <p>
              Our Client Retention Rate highlights building
              lasting relationships, ensuring
            </p>
          </div>

          {/* About Counter Item */}
          <div className="about-counter-item">
            <ul>
              <li>Dollars in Investments Managed</li>
            </ul>
            <h2>
              $<span className="counter">10</span>M+
            </h2>
            <p>
              Over $10M in investments carefully managed to
              maximize growth & secure our clients.
            </p>
          </div>

          {/* About Counter Item */}
          <div className="about-counter-item">
            <ul>
              <li>Expert Financial Advisors</li>
            </ul>
            <h2>
              <span className="counter">100</span>+
            </h2>
            <p>
              Our 100+ expert financial advisors guide you with
              precision.
            </p>
          </div>
        </div>
        {/* About Counter List End */}
      </div>

      <div className="col-lg-12">
        {/* Section Footer Text Start */}
        <div
          className="section-footer-text wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <p>
            Join our team and help weave innovation, quality, and
            success together worldwide.
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
        {/* Section Footer Text End */}
      </div>
    </div>
  </div>
</div>
{/* About Us Section End */}

{/* Our Approach Section Start */}
<div className="our-approach bg-section">
  <div className="container">
    <div className="row">
      <div className="col-xl-6">
        {/* Our Approach Content Start */}
        <div className="our-approach-content">
          {/* Section Title Start */}
          <div className="section-title">
            <span className="section-sub-title wow fadeInUp">
              Our Approach
            </span>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Building strong foundations for long term business
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.2s"
            >
              We focus on creating scalable strategies that support
              growth, stability, and performance. By combining
              planning with execution, we help businesses achieve
              sustainable results.
            </p>
          </div>
          {/* Section Title End */}

          {/* Approach Accordion Start */}
          <div
            className="approach-accordian"
            id="a_accordion"
          >
            {/* Accordion Item */}
            <div className="accordion-item wow fadeInUp">
              <h2 className="accordion-header" id="a_heading1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#a_collapse1"
                  aria-expanded="true"
                  aria-controls="a_collapse1"
                >
                  <img
                    src="images/icon-approach-1.svg"
                    alt=""
                  />{" "}
                  Our Mission
                </button>
              </h2>
              <div
                id="a_collapse1"
                className="accordion-collapse collapse show"
                role="region"
                aria-labelledby="a_heading1"
                data-bs-parent="#a_accordion"
              >
                <div className="accordion-body">
                  <p>
                    Our mission is to empower individuals and
                    businesses with trusted financial guidance and
                    strategic consulting solutions that drive
                    sustainable growth. We are committed to
                    delivering clear insights, ethical advice, and
                    measurable results.
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion Item */}
            <div
              className="accordion-item wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h2 className="accordion-header" id="a_heading2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#a_collapse2"
                  aria-expanded="false"
                  aria-controls="a_collapse2"
                >
                  <img
                    src="images/icon-approach-2.svg"
                    alt=""
                  />{" "}
                  Our Vision
                </button>
              </h2>
              <div
                id="a_collapse2"
                className="accordion-collapse collapse"
                role="region"
                aria-labelledby="a_heading2"
                data-bs-parent="#a_accordion"
              >
                <div className="accordion-body">
                  <p>
                    Our vision is to empower individuals and
                    businesses with trusted financial guidance and
                    strategic consulting solutions that drive
                    sustainable growth. We are committed to
                    delivering clear insights, ethical advice, and
                    measurable results.
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion Item */}
            <div
              className="accordion-item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <h2 className="accordion-header" id="a_heading3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#a_collapse3"
                  aria-expanded="false"
                  aria-controls="a_collapse3"
                >
                  <img
                    src="images/icon-approach-3.svg"
                    alt=""
                  />{" "}
                  Our Values
                </button>
              </h2>
              <div
                id="a_collapse3"
                className="accordion-collapse collapse"
                role="region"
                aria-labelledby="a_heading3"
                data-bs-parent="#a_accordion"
              >
                <div className="accordion-body">
                  <p>
                    Our values focus on empowering individuals and
                    businesses with trusted financial guidance and
                    strategic consulting solutions that drive
                    sustainable growth. We are committed to
                    delivering clear insights, ethical advice, and
                    measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Approach Accordion End */}

          {/* Button Start */}
          <div
            className="approach-content-btn wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <a href="contact.html" className="btn-default">
              Learn More
            </a>
          </div>
          {/* Button End */}
        </div>
        {/* Our Approach Content End */}
      </div>

      <div className="col-xl-6">
        {/* Approach Image Box Start */}
        <div
          className="approach-image-box wow fadeInUp"
          data-wow-delay="0.2s"
        >
          {/* Image */}
          <div className="approach-image">
            <figure>
              <img
                src="images/approach-image.jpg"
                alt=""
              />
            </figure>
          </div>

          {/* Slider */}
          <div className="approach-content-slider">
            <div className="swiper">
              <div
                className="swiper-wrapper"
                data-cursor-text="Drag"
              >
                <div className="swiper-slide">
                  <div className="approach-content-slide-item">
                    <h3>
                      “Operational excellence is no longer about
                      efficiency alone it’s about agility, insight &
                      the ability to evolve.”
                    </h3>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="approach-content-slide-item">
                    <h3>
                      “Modern operational excellence is defined by
                      agility, clarity of insight, and continuous
                      renewal.”
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slider End */}
        </div>
        {/* Approach Image Box End */}
      </div>
    </div>
  </div>
</div>
{/* Our Approach Section End */}

{/* Our Benefits Section Start */}
<div className="our-benefits dark-section parallaxie">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            Our Benefits
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Benefits that Empower Success
          </h2>
          <p>
            Through expert guidance, tailored solutions, and a
            results-driven approach, we empower you to overcome
            challenges and achieve success with clarity and
            confidence.
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      <div className="col-xl-3 col-md-6">
        {/* Benefit Item Start */}
        <div className="benefit-item wow fadeInUp">
          <div className="benefit-item-header">
            <div className="icon-box">
              <img
                src="images/icon-benefit-item-1.svg"
                alt=""
              />
            </div>
            <div className="benefit-item-content">
              <h3>Tailored Solutions</h3>
              <p>
                Customized strategies designed to align perfectly
                seamlessly.
              </p>
            </div>
          </div>
          <div className="benefit-item-list">
            <ul>
              <li>Flexible and scalable</li>
              <li>Goal-focused strategies</li>
              <li>Customized to your needs</li>
            </ul>
          </div>
        </div>
        {/* Benefit Item End */}
      </div>

      <div className="col-xl-3 col-md-6">
        <div
          className="benefit-item wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="benefit-item-header">
            <div className="icon-box">
              <img
                src="images/icon-benefit-item-2.svg"
                alt=""
              />
            </div>
            <div className="benefit-item-content">
              <h3>Expert Support</h3>
              <p>
                Experienced professionals guiding you with clarity,
                confidence.
              </p>
            </div>
          </div>
          <div className="benefit-item-list">
            <ul>
              <li>Flexible and scalable</li>
              <li>Goal-focused strategies</li>
              <li>Customized to your needs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div
          className="benefit-item wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="benefit-item-header">
            <div className="icon-box">
              <img
                src="images/icon-benefit-item-3.svg"
                alt=""
              />
            </div>
            <div className="benefit-item-content">
              <h3>Long-Term Value</h3>
              <p>
                Sustainable solutions that support growth,
                efficiency, and success.
              </p>
            </div>
          </div>
          <div className="benefit-item-list">
            <ul>
              <li>Flexible and scalable</li>
              <li>Goal-focused strategies</li>
              <li>Customized to your needs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div
          className="benefit-item wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <div className="benefit-item-header">
            <div className="icon-box">
              <img
                src="images/icon-benefit-item-4.svg"
                alt=""
              />
            </div>
            <div className="benefit-item-content">
              <h3>Proven Results</h3>
              <p>
                A results-driven approach focused on measurable
                outcomes.
              </p>
            </div>
          </div>
          <div className="benefit-item-list">
            <ul>
              <li>Flexible and scalable</li>
              <li>Goal-focused strategies</li>
              <li>Customized to your needs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-lg-12">
        {/* Section Footer Text Start */}
        <div
          className="section-footer-text section-satisfy-img wow fadeInUp"
          data-wow-delay="0.4s"
        >
          {/* Satisfy Client Images Start */}
          <div className="satisfy-client-images">
            <div className="satisfy-client-image">
              <figure className="image-anime">
                <img
                  src="images/author-1.jpg"
                  alt=""
                />
              </figure>
            </div>
            <div className="satisfy-client-image add-more">
              <img
                src="images/icon-phone-white.svg"
                alt=""
              />
            </div>
          </div>
          {/* Satisfy Client Images End */}

          <p>
            Let's make something great work together.{" "}
            <a href="contact.html">Get Free Quote</a>
          </p>
        </div>
        {/* Section Footer Text End */}
      </div>
    </div>
  </div>
</div>
{/* Our Benefits Section End */}

{/* Why Choose Us Section Start */}
<div className="why-choose-us">
  <div className="container">
    <div className="row">
      <div className="col-xl-6">
        {/* Why Choose Us Image Box Start */}
        <div className="why-choose-us-image-box">
          {/* Why Choose Us Image Start */}
          <div className="why-choose-us-image">
            <figure className="image-anime reveal">
              <img
                src="images/why-choose-us-image.jpg"
                alt=""
              />
            </figure>
          </div>
          {/* Why Choose Us Image End */}

          {/* Why Choose Growth Box Start */}
          <div className="why-choose-growth-box">
            {/* Growth Box Header */}
            <div className="why-choose-growth-box-header">
              <div className="icon-box">
                <img
                  src="images/icon-why-choose-growth-box.svg"
                  alt=""
                />
              </div>
              <div className="why-choose-growth-box-counter">
                <p>
                  +<span>0,54</span>%
                </p>
              </div>
            </div>

            {/* Growth Box Body */}
            <div className="why-choose-growth-box-body">
              <div className="why-choose-growth-box-content">
                <p>Total Growth</p>
                <h2>
                  <span className="counter">
                    96.567
                  </span>
                </h2>
              </div>
              <div className="why-choose-growth-box-image">
                <img
                  src="images/why-choose-growth-box-image.svg"
                  alt=""
                />
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
          {/* Section Title Start */}
          <div className="section-title">
            <span className="section-sub-title wow fadeInUp">
              Why Choose Us
            </span>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Trusted experts expertise to your financial growth
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Our dedicated team works closely with you to
              understand your goals, provide strategic guidance,
              and implement actionable plans that drive growth,
              optimize performance.
            </p>
          </div>
          {/* Section Title End */}

          {/* Body Start */}
          <div
            className="why-choose-body wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="why-choose-body-item">
              <div className="icon-box">
                <img
                  src="images/icon-why-choose-body-item-1.svg"
                  alt=""
                />
              </div>
              <div className="why-choose-body-item-content">
                <h3>Expertise You Can Trust</h3>
                <p>
                  With years of hands-on experience in finance and
                  business strategy
                </p>
              </div>
            </div>

            <div className="why-choose-body-item">
              <div className="icon-box">
                <img
                  src="images/icon-why-choose-body-item-2.svg"
                  alt=""
                />
              </div>
              <div className="why-choose-body-item-content">
                <h3>Solution Tailored to Your Goal</h3>
                <p>
                  Every strategy we create is customized to your
                  unique needs.
                </p>
              </div>
            </div>
          </div>
          {/* Body End */}

          {/* List Start */}
          <div
            className="why-choose-list wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <ul>
              <li>Building Strong Financial Futures</li>
              <li>Smart Experts for Smarter Growth</li>
              <li>Proven frameworks that deliver</li>
              <li>Expertise That Powers Your Growth</li>
            </ul>
          </div>
          {/* List End */}

          {/* Button Start */}
          <div
            className="why-choose-btn wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <a href="contact.html" className="btn-default">
              Learn More
            </a>
          </div>
          {/* Button End */}
        </div>
        {/* Why Choose Us Content End */}
      </div>

      <div className="col-lg-12">
        {/* Section Footer Text Start */}
        <div
          className="section-footer-text wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <p>
            Join our team and help weave innovation, quality, and
            success together worldwide.
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
        {/* Section Footer Text End */}
      </div>
    </div>
  </div>
</div>
{/* Why Choose Us Section End */}

{/* Our Expertise Section Start */}
<div className="our-expertise">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6">
        {/* Expertise Content Box Start */}
        <div className="expertise-content-box">
          {/* Section Title Start */}
          <div className="section-title section-title-center">
            <span className="section-sub-title wow fadeInUp">
              Our Global Reach
            </span>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Bringing our expertise client across the globe
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.2s"
            >
              With a strong international presence and a diverse
              network of professionals, we deliver trusted expertise
              to clients worldwide.
            </p>
          </div>
          {/* Section Title End */}

          {/* Expertise Content List Start */}
          <div
            className="expertise-content-list wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <ul>
              <li>Focused on achieving results you track</li>
              <li>Assistance to ensure sustained success</li>
              <li>Industry professionals providing insight</li>
              <li>Specifically to fit your unique business</li>
            </ul>
          </div>
          {/* Expertise Content List End */}

          {/* Expertise Content Button Start */}
          <div
            className="expertise-content-btn wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <a href="contact.html" className="btn-default">
              Learn More
            </a>
          </div>
          {/* Expertise Content Button End */}
        </div>
        {/* Expertise Content Box End */}
      </div>

      <div className="col-xl-6">
        {/* Expertise Map Image Start */}
        <div className="expertise-map-image wow fadeInUp">
          <figure>
            <img
              src="images/world-map-image.png"
              alt=""
            />
          </figure>
        </div>
        {/* Expertise Map Image End */}
      </div>

      <div className="col-lg-12">
        {/* Expertise Counter List Start */}
        <div
          className="expertise-counter-list wow fadeInUp"
          data-wow-delay="0.2s"
        >
          {/* Counter Item */}
          <div className="expertise-counter-item">
            <h2>
              <span className="counter">250</span>+
            </h2>
            <p>Projects Completed</p>
          </div>

          {/* Counter Item */}
          <div className="expertise-counter-item">
            <h2>
              <span className="counter">1</span>K+
            </h2>
            <p>Satisfied Clients</p>
          </div>

          {/* Counter Item */}
          <div className="expertise-counter-item">
            <h2>
              <span className="counter">50</span>+
            </h2>
            <p>Global Locations</p>
          </div>

          {/* Counter Item */}
          <div className="expertise-counter-item">
            <h2>
              <span className="counter">98</span>%
            </h2>
            <p>Client satisfaction rate</p>
          </div>

          {/* Counter Item */}
          <div className="expertise-counter-item">
            <h2>
              <span className="counter">50</span>+
            </h2>
            <p>Industry Awards</p>
          </div>
        </div>
        {/* Expertise Counter List End */}
      </div>
    </div>
  </div>
</div>
{/* Our Expertise Section End */}


{/* Our Process Section Start */}
<div className="our-process">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            Our Process
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Strategic Process Built Around
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.2s"
          >
            We follow a structured and transparent process to ensure
            your financial success. From understanding your unique
            needs to designing customized strategies.
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      <div className="col-lg-12">
        {/* Process Steps Item List Start */}
        <div className="process-steps-item-list">
          {/* Step 1 */}
          <div className="process-step-item box-1 wow fadeInUp">
            <div className="process-step-item-header">
              <div className="process-step-item-no">
                <h2>01.</h2>
              </div>
              <div className="process-step-item-image">
                <figure>
                  <img
                    src="images/process-step-item-image-1.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <div className="process-step-item-content">
              <h3>Initial Consultation</h3>
              <p>
                We begin by understanding your business goals,
                financial challenges, and long-term vision.
              </p>
              <ul>
                <li>Clear identification of opportunities.</li>
                <li>Deep analysis of your goals.</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="process-step-item box-2 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="process-step-item-header">
              <div className="process-step-item-no">
                <h2>02.</h2>
              </div>
              <div className="process-step-item-image">
                <figure>
                  <img
                    src="images/process-step-item-image-2.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <div className="process-step-item-content">
              <h3>Strategy Development</h3>
              <p>
                Based on our insights, we create a customized roadmap
                tailored to your needs.
              </p>
              <ul>
                <li>Clear identification of opportunities.</li>
                <li>Deep analysis of your goals.</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="process-step-item box-3 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="process-step-item-header">
              <div className="process-step-item-no">
                <h2>03.</h2>
              </div>
              <div className="process-step-item-image">
                <figure>
                  <img
                    src="images/process-step-item-image-3.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <div className="process-step-item-content">
              <h3>Execution Support</h3>
              <p>
                We implement the strategy with precision and provide
                ongoing guidance.
              </p>
              <ul>
                <li>Clear identification of opportunities.</li>
                <li>Deep analysis of your goals.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Process Steps Item List End */}
      </div>

      <div className="col-lg-12">
        {/* Our Process Footer Start */}
        <div
          className="our-process-footer wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="our-process-footer-list">
            <ul>
              <li>Financial Consulting</li>
              <li>Digital Marketing</li>
              <li>Investment Advisory</li>
              <li>Financial Services</li>
            </ul>
          </div>

          <div className="section-footer-text section-satisfy-img">
            <div className="satisfy-client-images">
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img
                    src="images/author-1.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <div className="satisfy-client-image add-more">
                <img
                  src="images/icon-phone-white.svg"
                  alt=""
                />
              </div>
            </div>

            <p>
              Let's make something great work together.{" "}
              <a href="contact.html">Get Free Quote</a>
            </p>
          </div>
        </div>
        {/* Our Process Footer End */}
      </div>
    </div>
  </div>
</div>
{/* Our Process Section End */}


{/* Our Team Section Start */}
<div className="our-team">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            Our Expert Team
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Trusted Advisor with Experience
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.2s"
          >
            We provide strategic guidance, personalized solutions,
            and insights you can rely on to navigate complex
            challenges with confidence and clarity.
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      <div className="col-xl-3 col-md-6">
        {/* Team Item */}
        <div className="team-item wow fadeInUp">
          <div className="team-item-image">
            <a href="team-single.html" data-cursor-text="View">
              <figure>
                <img src="images/team-1.jpg" alt="" />
              </figure>
            </a>
          </div>

          <div className="team-item-body">
            <div className="team-item-content">
              <h2>
                <a href="team-single.html">John Anderson</a>
              </h2>
              <p>Chief Executive Officer</p>
            </div>

            <div className="team-social-list">
              <ul>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div
          className="team-item wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="team-item-image">
            <a href="team-single.html" data-cursor-text="View">
              <figure>
                <img src="images/team-2.jpg" alt="" />
              </figure>
            </a>
          </div>

          <div className="team-item-body">
            <div className="team-item-content">
              <h2>
                <a href="team-single.html">Michael Lee</a>
              </h2>
              <p>Head of Marketing</p>
            </div>

            <div className="team-social-list">
              <ul>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div
          className="team-item wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="team-item-image">
            <a href="team-single.html" data-cursor-text="View">
              <figure>
                <img src="images/team-3.jpg" alt="" />
              </figure>
            </a>
          </div>

          <div className="team-item-body">
            <div className="team-item-content">
              <h2>
                <a href="team-single.html">David Kim</a>
              </h2>
              <p>Technology Lead</p>
            </div>

            <div className="team-social-list">
              <ul>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div
          className="team-item wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <div className="team-item-image">
            <a href="team-single.html" data-cursor-text="View">
              <figure>
                <img src="images/team-4.jpg" alt="" />
              </figure>
            </a>
          </div>

          <div className="team-item-body">
            <div className="team-item-content">
              <h2>
                <a href="team-single.html">Esther Howard</a>
              </h2>
              <p>Chief Financial Officer</p>
            </div>

            <div className="team-social-list">
              <ul>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12">
        {/* Section Footer Text Start */}
        <div
          className="section-footer-text wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <p>
            <span>Free</span> Work with a team that drives real
            results.{" "}
            <a href="contact.html">
              Get Your Free Consultation
            </a>
          </p>
        </div>
        {/* Section Footer Text End */}
      </div>
    </div>
  </div>
</div>
{/* Our Team Section End */}

{/* Our Testimonials Section Start */}
<div className="our-testimonials">
  {/* Video Start */}
  <div className="our-testimonial-bg-video">
    {/* Self-hosted Video Start */}
    {/*
    <video autoPlay muted loop id="testimonialsvideo">
      <source
        src="images/our-story-bg-video-bg-video.mp4"
        type="video/mp4"
      />
    </video>
    */}

    <video autoPlay muted loop id="testimonialsvideo">
      <source
        src="https://demo.awaikenthemes.com/assets/videos/optive-testimonial-bg.mp4"
        type="video/mp4"
      />
    </video>
    {/* Self-hosted Video End */}

    {/* YouTube Video Option */}
    {/*
    <div
      id="testimonialsvideo"
      className="player"
      data-property="{videoURL:'OjTRVpgtcG4',containment:'.hero-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0, stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"
    ></div>
    */}
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
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              What Clients Say
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Our client's feedback reflects the trust, satisfaction,
              and success they experience through our financial
              advisory and business.
            </p>
          </div>
          {/* Section Title End */}

          {/* Testimonial Slider Start */}
          <div className="testimonial-slider wow fadeInUp">
            <div className="swiper">
              <div
                className="swiper-wrapper"
                data-cursor-text="Drag"
              >
                {/* Slide 1 */}
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
                        “The team provided us with clear financial
                        direction and practical business strategies.
                        Their insights helped us streamline operations
                        & plan growth with confidence.”
                      </p>
                    </div>

                    <div className="testimonial-item-author">
                      <div className="testimonial-author-image">
                        <figure>
                          <img
                            src="images/author-1.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="testimonial-author-content">
                        <h2>Sarah Mitchell</h2>
                        <p>
                          Operations Manager, Horizon Tech
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
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
                        “The team provided us with clear financial
                        direction and practical business strategies.
                        Their insights helped us streamline operations
                        & plan growth with confidence.”
                      </p>
                    </div>

                    <div className="testimonial-item-author">
                      <div className="testimonial-author-image">
                        <figure>
                          <img
                            src="images/author-2.jpg"
                            alt=""
                          />
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


{/* Our FAQs Section Start */}
<div className="our-faqs">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            Frequently Asked Questions
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Clear Answers to Questions
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.2s"
          >
            We believe informed decisions start with clarity. This
            section addresses common questions about our services,
            process, and approach.
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
                  We recommend reviewing your financial plan at least
                  annually or whenever there's a significant life or
                  business change to ensure it aligns with your
                  objectives.
                </p>
              </div>
            </div>
          </div>

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
                Q2. What services do you offer for individual financial
                planning?
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
                  We recommend reviewing your financial plan at least
                  annually or whenever there's a significant life or
                  business change to ensure it aligns with your
                  objectives.
                </p>
              </div>
            </div>
          </div>

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
                  We recommend reviewing your financial plan at least
                  annually or whenever there's a significant life or
                  business change to ensure it aligns with your
                  objectives.
                </p>
              </div>
            </div>
          </div>

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
                  We recommend reviewing your financial plan at least
                  annually or whenever there's a significant life or
                  business change to ensure it aligns with your
                  objectives.
                </p>
              </div>
            </div>
          </div>

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
                  We recommend reviewing your financial plan at least
                  annually or whenever there's a significant life or
                  business change to ensure it aligns with your
                  objectives.
                </p>
              </div>
            </div>
          </div>

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
                  We recommend reviewing your financial plan at least
                  annually or whenever there's a significant life or
                  business change to ensure it aligns with your
                  objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Accordion End */}
      </div>

      <div className="col-xl-6">
        {/* FAQ Image Box Start */}
        <div className="faq-image-box">
          <div className="faq-image">
            <figure className="image-anime reveal">
              <img src="images/faq-image.jpg" alt="" />
            </figure>
          </div>

          <div className="faq-cta-box">
            <div className="faq-cta-box-image">
              <div className="faq-cta-image">
                <figure>
                  <img
                    src="images/faq-cta-box-image.jpg"
                    alt=""
                  />
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
              <h3>
                “Success in business comes from clear strategy.”
              </h3>
            </div>
          </div>
        </div>
        {/* FAQ Image Box End */}
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
                {[
                  "company-supports-logo-1.svg",
                  "company-supports-logo-2.svg",
                  "company-supports-logo-3.svg",
                  "company-supports-logo-4.svg",
                  "company-supports-logo-1.svg",
                  "company-supports-logo-2.svg",
                  "company-supports-logo-3.svg",
                  "company-supports-logo-4.svg",
                ].map((logo, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="faq-company-logo">
                      <img src={`images/${logo}`} alt="" />
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
{/* Our FAQs Section End */}

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