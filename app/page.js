import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
<header className="main-header main-header-metal">
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
                <a className="nav-link" href="/">Home</a>
                {/* <ul>
                  <li className="nav-item">
                    <a className="nav-link" href="index-2.html">Home - Version 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="index-4.html">Home - Version 2</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="index-3.html">Home - Version 3</a>
                  </li>
                </ul> */}
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about-us">About Us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>

              {/* <li className="nav-item submenu">
                <a className="nav-link" href="#">Pages</a>
                <ul>
                  <li className="nav-item"><a className="nav-link" href="service-single.html">Service Details</a></li>
                  <li className="nav-item"><a className="nav-link" href="blog-single.html">Blog Details</a></li>
                  <li className="nav-item"><a className="nav-link" href="case-study.html">Case Study</a></li>
                  <li className="nav-item"><a className="nav-link" href="case-study-single.html">Case Study Details</a></li>
                  <li className="nav-item"><a className="nav-link" href="team.html">Our Team</a></li>
                  <li className="nav-item"><a className="nav-link" href="team-single.html">Team Details</a></li>
                  <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing Plan</a></li>
                  <li className="nav-item"><a className="nav-link" href="testimonials.html">Testimonials</a></li>
                  <li className="nav-item"><a className="nav-link" href="image-gallery.html">Image Gallery</a></li>
                  <li className="nav-item"><a className="nav-link" href="video-gallery.html">Video Gallery</a></li>
                  <li className="nav-item"><a className="nav-link" href="faqs.html">FAQs</a></li>
                  <li className="nav-item"><a className="nav-link" href="404.html">404</a></li>
                </ul>
              </li> */}

              <li className="nav-item">
                <a className="nav-link" href="/contact-us">Contact Us</a>
              </li>

            </ul>
          </div>

          {/* Header Btn Start */}
          <div className="header-btn">
            <a href="/contact-us" className="btn-default">
              Get Free Quote
            </a>
          </div>
          {/* Header Btn End */}
        </div>
        {/* Main Menu End */}

        <div className="navbar-toggle"></div>
      </div>
    </nav>

    <div className="responsive-menu"></div>
  </div>
</header>
{/* Header End */}


{/* Hero Section Start */}
<div className="hero-metal bg-section dark-section">
  <div className="container">
    <div className="row">

      <div className="col-lg-12">
        {/* Hero Content Start */}
        <div className="hero-content-metal">

          {/* Section Title Start */}
          <div className="section-title">
            <span className="section-sub-title wow fadeInUp">
              Smart Strategies. Lasting Results.
            </span>

            <h1
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              data-cursor="-opaque"
            >
              Transforming finance{" "}
              <span className="hero-title-img-1">
                <img src="images/icon-hero-title-img-1.svg" alt="" />
              </span>{" "}
              with trusted{" "}
              <span className="hero-title-img-2">
                <img src="images/icon-hero-title-img-2.svg" alt="" />
              </span>{" "}
              expertise
            </h1>
          </div>
          {/* Section Title End */}

          {/* Hero Content List Start */}
          <div
            className="hero-content-list-metal wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <ul>
              <li>Expert Financial Strategy</li>
              <li>Business Growth Advisory</li>
              <li>Risk Assessment Services</li>
            </ul>
          </div>
          {/* Hero Content List End */}
        </div>
        {/* Hero Content End */}
      </div>

      <div className="col-lg-12">
        {/* Hero Information Boxes Start */}
        <div className="hero-info-boxes-metal">

          {/* Hero Image Box 1 Start */}
          <div className="hero-image-box-1-metal wow fadeInUp">

            <div className="hero-image-metal">
              <figure className="image-anime">
                <img src="images/h1.jpg" alt=""/>
              </figure>
            </div>

            <div className="hero-image-content-box-metal">
              <div className="hero-image-content-title-metal">
                <h2>“Empowering Your Financial And Business Growth”</h2>
              </div>

              <div className="hero-image-content-Body-metal">
                <div className="hero-image-content-list-metal">
                  <ul>
                    <li>Growth</li>
                    <li>Consulting</li>
                  </ul>
                </div>

                <div className="hero-image-content-btn-metal">
                  <a href="contact.html">
                    <img src="images/arrow-white.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Image Box 1 End */}

          {/* Hero Info Item Start */}
          <div
            className="hero-info-item-metal wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="hero-info-item-header-metal">
              <div className="icon-box">
                <img
                  src="images/hero-info-item-chart-metal.png"
                  alt=""
                />
              </div>

              <div className="hero-info-item-content-metal">
                <h2>
                  <span className="counter">30</span>%
                </h2>
                <p>Financial Solutions</p>
              </div>
            </div>

            <div className="hero-info-item-content-metal">
              <h2>
                <span className="counter">98</span>%
              </h2>
              <p>Client Satisfaction &amp; Retention Rate</p>
            </div>
          </div>
          {/* Hero Info Item End */}

          {/* Hero Image Box 2 Start */}
          <div
            className="hero-image-box-2-metal wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="hero-image-metal">
              <figure className="image-anime">
                <img src="images/h2.jpg" alt="" />
              </figure>
            </div>

            <div className="hero-image-content-box-metal">
              <div className="hero-image-content-title-metal">
                <h2>Expert Advisory Support</h2>
              </div>

              <div className="hero-image-content-btn-metal">
                <a href="contact.html">
                  <img src="images/arrow-white.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* Hero Image Box 2 End */}

        </div>
        {/* Hero Information Boxes End */}
      </div>

    </div>
  </div>
</div>
{/* Hero Section End */}

{/* About Us Section Start */}
<div className="about-us-metal">
  <div className="container">
    <div className="row align-items-center">

      <div className="col-xl-6">
        {/* About Us Image Box Start */}
        <div className="about-us-image-box-metal">

          <div className="about-us-image-metal">
            <figure className="image-anime reveal">
              <img src="images/about1.avif" alt="" />
            </figure>
          </div>

          <div className="about-customer-review-box-metal">

            <div className="about-us-review-box-metal">
              <div className="section-footer-text">
                <ul>
                  <li><span className="counter">4.9</span>/5</li>
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

            <div className="about-customer-info-box-metal">

              <div className="about-customer-info-header-metal">
                <div className="icon-box">
                  <img
                    src="images/icon-about-customer-info-metal.svg"
                    alt=""
                  />
                </div>
                <div className="about-customer-info-content-metal">
                  <h3>Personalized Business Growth Strategies</h3>
                </div>
              </div>

              <div className="about-customer-info-body-metal">

                <div className="about-satisfy-customer-box-metal">
                  <div className="satisfy-client-images">
                    {[1, 2, 3].map((img) => (
                      <div className="satisfy-client-image" key={img}>
                        <figure className="image-anime">
                          <img src={`images/author-${img}.jpg`} alt="" />
                        </figure>
                      </div>
                    ))}
                  </div>

                  <div className="about-satisfy-customer-content-metal">
                    <p>2k+ Happy Customer</p>
                  </div>
                </div>

                <div className="about-customer-progress-circle-metal">
                  <div
                    className="circle"
                    data-size="60"
                    data-value="0.82"
                  >
                    <div className="progress_value">
                      <span className="pro_data"></span>
                      <span>%</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="col-xl-6">
        {/* About Us Content Start */}
        <div className="about-us-content-metal">

          <div className="section-title">
            <span className="section-sub-title wow fadeInUp">
              About Us
            </span>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Nova Phoenix
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Nova Phoenix General Contracting and Maintenance Company is a leading and
              reputable construction and facility management organization with a strong
              commitment to excellence, professionalism, and customer satisfaction. Nova
              Phoenix has established itself as a highly specialized construction,
              maintenance, interior designing, civil and MEP works. Our unparalleled
              engineering skills, professionalism and strong commitment to each and every
              project have made us the preferred choice for both government and private
              sectors. Nova Phoenix believes in meeting the highest standards of quality
              services. As a quality company, we are committed to complying with the
              industry standards, codes and practice. We work in partnership with
              consultants, building contractors, interior contractors, building facility
              team, site in charges and clients to guarantee a planned and systematic
              installation, inspection, testing, commissioning and maintenance of civil
              &amp; MEP services.
            </p>
          </div>

          <div
            className="about-us-body-metal wow fadeInUp"
            data-wow-delay="0.4s"
          >

            <div className="about-us-counter-box-metal">
              <h2><span className="counter">25</span>+</h2>
              <p>Years of experience</p>
            </div>

            <div className="about-us-items-list-metal">

              <div className="about-us-item-metal">
                <div className="icon-box">
                  <img
                    src="images/icon-about-body-item-1-metal.svg"
                    alt=""
                  />
                </div>
                <div className="about-us-item-content-metal">
                  <h3>Trust-Focused Approach</h3>
                  <p>We prioritize transparency, integrity, and open rooted.</p>
                </div>
              </div>

              <div className="about-us-item-metal">
                <div className="icon-box">
                  <img
                    src="images/icon-about-body-item-2-metal.svg"
                    alt=""
                  />
                </div>
                <div className="about-us-item-content-metal">
                  <h3>Proven Industry Experience</h3>
                  <p>We prioritize transparency, integrity, and open rooted.</p>
                </div>
              </div>

            </div>
          </div>

          <div
            className="about-us-footer-metal wow fadeInUp"
            data-wow-delay="0.6s"
          >

            <div className="about-us-btn-metal">
              <a href="about.html" className="btn-default">
                Learn About Our Farm
              </a>
            </div>

            <div className="about-author-Box">
              <div className="about-author-image">
                <figure className="image-anime">
                  <img src="images/author-1.jpg" alt="" />
                </figure>
              </div>

              <div className="about-author-content">
                <h3>Jenny Wilson</h3>
                <p>Co. Founder &amp; Business Manager</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</div>
{/* About Us Section End */}

{/* Our Services Section Start */}
<div className="our-services-metal bg-section">
  <div className="container">

    <div className="row section-row">
      <div className="col-lg-12">
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            Our Services
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Comprehensive Solutions Built on Quality & Expertise
          </h2>
        </div>
      </div>
    </div>

    <div className="row service-item-list-metal">

      {/* General Contracting */}
      <div className="col-xl-3 col-md-6">
        <div className="service-item-metal wow fadeInUp">
          <div className="service-item-header-metal">
            <div className="icon-box">
              <img src="images/icon-our-service-1-metal.svg" alt="" />
            </div>
            <div className="service-item-content-metal">
              <h2>
                <a href="service-single.html">General Contracting</a>
              </h2>
              <p>Reliable end-to-end construction services delivered with precision.</p>
            </div>
          </div>

          <div className="service-item-btn-metal">
            <a href="service-single.html" className="readmore-btn">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Facilities Management */}
      <div className="col-xl-3 col-md-6">
        <div
          className="service-item-metal active wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="service-item-header-metal">
            <div className="icon-box">
              <img src="images/icon-our-service-2-metal.svg" alt="" />
            </div>
            <div className="service-item-content-metal">
              <h2>
                <a href="service-single.html">Facilities Management</a>
              </h2>
              <p>Efficient maintenance solutions ensuring safety and performance.</p>
            </div>
          </div>

          <div className="service-item-btn-metal">
            <a href="service-single.html" className="readmore-btn">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* MEP Services */}
      <div className="col-xl-3 col-md-6">
        <div
          className="service-item-metal wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="service-item-header-metal">
            <div className="icon-box">
              <img src="images/icon-our-service-3-metal.svg" alt="" />
            </div>
            <div className="service-item-content-metal">
              <h2>
                <a href="service-single.html">MEP Services</a>
              </h2>
              <p>Expert electro-mechanical & plumbing solutions for all projects.</p>
            </div>
          </div>

          <div className="service-item-btn-metal">
            <a href="service-single.html" className="readmore-btn">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Interior Design & Fit-Out */}
      <div className="col-xl-3 col-md-6">
        <div
          className="service-item-metal wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <div className="service-item-header-metal">
            <div className="icon-box">
              <img src="images/icon-our-service-4-metal.svg" alt="" />
            </div>
            <div className="service-item-content-metal">
              <h2>
                <a href="service-single.html">Interior Design & Fit-Out</a>
              </h2>
              <p>Complete interior solutions tailored to functional elegance.</p>
            </div>
          </div>

          <div className="service-item-btn-metal">
            <a href="service-single.html" className="readmore-btn">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="col-lg-12">
        <div
          className="section-footer-text wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <p>
            Delivering excellence through innovation, engineering, and trusted partnerships.
          </p>
          <ul>
            <li><span className="counter">4.9</span>/5</li>
            <li>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </li>
            <li>Trusted by 4200+ Clients</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>
{/* Our Services Section End */}

{/* Why Choose Us Section Start */}
<div className="why-choose-us-metal">
  <div className="container">
    <div className="row">

      <div className="col-xl-6">
        <div className="why-choose-content-metal">

          <div className="section-title">
            <span className="section-sub-title wow fadeInUp">
              Why Choose Us
            </span>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Expert Guidance for Smart Financial Decision
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Businesses and individuals choose our expertise because we combine
              strategic insight, analytical precision, and a personalized
              approach that places your goals.
            </p>
          </div>

          <div
            className="why-choose-items-list-metal wow fadeInUp"
            data-wow-delay="0.4s"
          >

            <div className="why-choose-item-metal">
              <div className="why-choose-item-header-metal">
                <div className="icon-box">
                  <img
                    src="images/icon-why-choose-item-1-metal.svg"
                    alt=""
                  />
                </div>
                <div className="why-choose-item-no-metal">
                  <h3>01</h3>
                </div>
              </div>
              <div className="why-choose-item-content-metal">
                <h2><span className="counter">98</span>%</h2>
                <p>Client Satisfaction &amp; Retention Rate</p>
              </div>
            </div>

            <div className="why-choose-item-metal">
              <div className="why-choose-item-header-metal">
                <div className="icon-box">
                  <img
                    src="images/icon-why-choose-item-2-metal.svg"
                    alt=""
                  />
                </div>
                <div className="why-choose-item-no-metal">
                  <h3>02</h3>
                </div>
              </div>
            <div className="why-choose-item-content-metal">
              <h2>₹<span className="counter">50</span></h2>
              <p>Crore+ Wealth Guided and Managed</p>
            </div>
            </div>

          </div>

          <div
            className="why-choose-cta-box-metal wow fadeInUp"
            data-wow-delay="0.6s"
          >

            <div className="why-choose-cta-client-box-metal">
              <div className="why-choose-cta-client-box-header-metal">

                <div className="satisfy-client-images">
                  {[1, 2, 3].map((img) => (
                    <div className="satisfy-client-image" key={img}>
                      <figure className="image-anime">
                        <img src={`images/author-${img}.jpg`} alt="" />
                      </figure>
                    </div>
                  ))}
                </div>

                <div className="why-choose-cta-client-content-metal">
                  <p>2k+ Happy Customer</p>
                </div>
              </div>

              <div className="why-choose-cta-client-content-metal">
                <h3>Clients Empowered Across Multiple Sectors</h3>
              </div>
            </div>

            <div className="why-choose-cta-client-box-metal">
              <div className="why-choose-cta-progress-circle-metal">
                <div
                  className="circle"
                  data-size="100"
                  data-value="0.82"
                >
                  <div className="progress_value">
                    <span className="pro_data"></span>
                    <span>%</span>
                  </div>
                </div>
              </div>

              <div className="why-choose-cta-progress-circle-content-metal">
                <p>Data Information</p>
                <h3>₹<span className="counter">1,234.00</span></h3>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="col-xl-6">
        <div
          className="why-choose-image-box-metal wow fadeInUp"
          data-wow-delay="0.2s"
        >

          <div className="why-choose-image-metal">
            <figure className="image-anime">
              <img
                src="images/why-choose1.jpg"
                alt=""
              />
            </figure>
          </div>

          <div className="about-customer-info-box-metal">
            <div className="about-customer-info-header-metal">
              <div className="icon-box">
                <img
                  src="images/icon-about-customer-info-metal.svg"
                  alt=""
                />
              </div>
              <div className="about-customer-info-content-metal">
                <h3>Personalized Business Growth Strategies</h3>
              </div>
            </div>

            <div className="about-customer-info-body-metal">

              <div className="about-satisfy-customer-box-metal">
                <div className="satisfy-client-images">
                  {[1, 2, 3].map((img) => (
                    <div className="satisfy-client-image" key={img}>
                      <figure className="image-anime">
                        <img src={`images/author-${img}.jpg`} alt="" />
                      </figure>
                    </div>
                  ))}
                </div>

                <div className="about-satisfy-customer-content-metal">
                  <p>2k+ Happy Customer</p>
                </div>
              </div>

              <div className="about-customer-progress-circle-metal">
                <div
                  className="circle"
                  data-size="60"
                  data-value="0.82"
                >
                  <div className="progress_value">
                    <span className="pro_data"></span>
                    <span>%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
{/* Why Choose Us Section End */}


{/* Our Story Section Start */}
<div className="our-story-metal dark-section parallaxie">
  <div className="container">

    <div className="row align-items-center">
      <div className="col-xl-6">
        <div className="section-title">
          <span className="section-sub-title wow fadeInUp">
            Watch Our Story
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Watch how We Empower Growth Through Videos
          </h2>
        </div>
      </div>

      <div className="col-xl-6">
        <div
          className="video-play-button story-play-button wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <a
            href="https://www.youtube.com/watch?v=Y-x0efG1seA"
            className="popup-video bg-effect"
            data-cursor-text="Play"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-play"></i>
          </a>
          <span>Watch Our Video</span>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-12">
        <div
          className="our-story-list-metal wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <ul>
            <li>Expert Finance Planning For Growth</li>
            <li>Strategic Business Consult You Trust</li>
            <li>Data-Driven Decisions Made Simple</li>
            <li>Personal Strategies For Success</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>
{/* Our Story Section End */}

{/* Our Case Studies Section Start */}
<div className="our-case-study case-study-metal">
  <div className="container">

    <div className="row section-row">
      <div className="col-lg-12">
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            Our Case Studies
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Explore Projects that Highlight our Strategic Expertise
          </h2>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-12">

        <div className="case-study-item-list">

          <div className="case-study-item wow fadeInUp">
            <div className="case-study-item-image">
              <a
                href="case-study-single.html"
                data-cursor-text="View"
              >
                <figure>
                  <img
                    src="images/case1.jpg"
                    alt=""
                  />
                </figure>
              </a>
            </div>

            <div className="case-study-item-btn">
              <a href="case-study-single.html">
                <img
                  src="images/arrow-white.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="case-study-item-content">
              <ul>
                <li><a href="#">Retail &amp; E-Commerce</a></li>
              </ul>
              <h2>
                <a href="case-study-single.html">
                  Retail Growth Optimization
                </a>
              </h2>
            </div>
          </div>

          <div
            className="case-study-item wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="case-study-item-image">
              <a
                href="case-study-single.html"
                data-cursor-text="View"
              >
                <figure>
                  <img
                    src="images/case2.jpg"
                    alt=""
                  />
                </figure>
              </a>
            </div>

            <div className="case-study-item-btn">
              <a href="case-study-single.html">
                <img
                  src="images/arrow-white.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="case-study-item-content">
              <ul>
                <li><a href="#">Compliance Consulting</a></li>
              </ul>
              <h2>
                <a href="case-study-single.html">
                  Corporate Tax Optimization
                </a>
              </h2>
            </div>
          </div>

          <div
            className="case-study-item wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="case-study-item-image">
              <a
                href="case-study-single.html"
                data-cursor-text="View"
              >
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/problem-solving-concept-with-kids-wearing-helmets_23-2149908702.jpg?t=st=1771312747~exp=1771316347~hmac=eb7643cf4372483a54b03284e734f7412193c20773086401a7bf1bef62e184db&w=1480"
                    alt=""
                  />
                </figure>
              </a>
            </div>

            <div className="case-study-item-btn">
              <a href="case-study-single.html">
                <img
                  src="images/arrow-white.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="case-study-item-content">
              <ul>
                <li><a href="#">Technology</a></li>
              </ul>
              <h2>
                <a href="case-study-single.html">
                  Startup Funding Success
                </a>
              </h2>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-12">
        <div
          className="section-footer-text section-satisfy-img wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <p>
            <span>Free</span> Let&apos;s make something great work together.{" "}
            <a href="contact.html">Get Free Quote</a>
          </p>
        </div>
      </div>

    </div>
  </div>
</div>
{/* Our Case Studies Section End */}


{/* Core Features Section Start */}
<div className="core-features-metal">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            Core Feature
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Core Feature Powering Financial and Business Success
          </h2>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      <div className="col-xl-4 col-md-6">
        {/* Feature Item Start */}
        <div className="feature-item-metal wow fadeInUp">
          {/* Feature Item Header Start */}
          <div className="feature-item-header-metal">
            <div className="icon-box">
              <img
                src="images/icon-feature-item-1-metal.svg"
                alt=""
              />
            </div>

            {/* Feature Item Content Start */}
            <div className="feature-item-content-metal">
              <h3>Personalized Strategies</h3>
              <p>
                Our personalized strategies are around your unique goals,
                financial situation.
              </p>
            </div>
            {/* Feature Item Content End */}
          </div>
          {/* Feature Item Header End */}

          {/* Feature Item Image Start */}
          <div className="feature-item-image-metal">
            <img
              src="images/feature-item-image-1-metal.png"
              alt=""
            />
          </div>
          {/* Feature Item Image End */}
        </div>
        {/* Feature Item End */}
      </div>

      <div className="col-xl-4 col-md-6">
        {/* Feature Item Start */}
        <div
          className="feature-item-metal wow fadeInUp"
          data-wow-delay="0.2s"
        >
          {/* Feature Item Header Start */}
          <div className="feature-item-header-metal">
            <div className="icon-box">
              <img
                src="images/icon-feature-item-2-metal.svg"
                alt=""
              />
            </div>

            {/* Feature Item Content Start */}
            <div className="feature-item-content-metal">
              <h3>Data-Driven Insights</h3>
              <p>
                Our personalized strategies are around your unique goals,
                financial situation.
              </p>
            </div>
            {/* Feature Item Content End */}
          </div>
          {/* Feature Item Header End */}

          {/* Feature Item Image Start */}
          <div className="feature-item-image-metal">
            <img
              src="images/feature-item-image-2-metal.png"
              alt=""
            />
          </div>
          {/* Feature Item Image End */}
        </div>
        {/* Feature Item End */}
      </div>

      <div className="col-xl-4 col-md-6">
        {/* Feature Item Start */}
        <div
          className="feature-item-metal wow fadeInUp"
          data-wow-delay="0.4s"
        >
          {/* Feature Item Header Start */}
          <div className="feature-item-header-metal">
            <div className="icon-box">
              <img
                src="images/icon-feature-item-3-metal.svg"
                alt=""
              />
            </div>

            {/* Feature Item Content Start */}
            <div className="feature-item-content-metal">
              <h3>Risk Management</h3>
              <p>
                Our personalized strategies are around your unique goals,
                financial situation.
              </p>
            </div>
            {/* Feature Item Content End */}
          </div>
          {/* Feature Item Header End */}

          {/* Feature Item Image Start */}
          <div className="feature-item-image-metal">
            <img
              src="images/feature-item-image-3-metal.png"
              alt=""
            />
          </div>
          {/* Feature Item Image End */}
        </div>
        {/* Feature Item End */}
      </div>

      <div className="col-lg-12">
        {/* Section Footer Text Start */}
        <div
          className="section-footer-text wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <p>
            Join our team and help weave innovation, quality, and success
            together worldwide.
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
{/* Core Features Section End */}

{/* Our Pricing Section Start */}
<div className="our-pricing-metal">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            Our Pricing Plans
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Trusted Advisory Pricing Plans
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.2s"
          >
            Our pricing plans are designed to offer flexible, transparent
            solutions that meet the unique financial and consulting needs
            of businesses at every stage of growth.
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      <div className="col-xl-4 col-md-6">
        {/* Pricing Item Start */}
        <div className="pricing-item-metal wow fadeInUp">
          {/* Pricing Item Header Start */}
          <div className="pricing-item-header-metal">
            {/* Icon Box Start */}
            <div className="icon-box">
              <img
                src="images/icon-pricing-item-1-metal.svg"
                alt=""
              />
            </div>
            {/* Icon Box End */}

            {/* Pricing Item Title Start */}
            <div className="pricing-item-title-metal">
              <h2>Basic Advisory Plan</h2>
            </div>
            {/* Pricing Item Title End */}
          </div>
          {/* Pricing Item Header End */}

          {/* Pricing Item Content Start */}
          <div className="pricing-item-content-metal">
            <p>
              Essential financial guidance and business strategy
              support for startup & small business.
            </p>
            <h3>
              ₹199<sub>/Per Month</sub>
            </h3>
          </div>
          {/* Pricing Item Content End */}

          {/* Pricing Item List Start */}
          <div className="pricing-item-list-metal">
            <h3>Features:</h3>
            <ul>
              <li>Personalized financial consultation</li>
              <li>Quarter financial health assessment</li>
              <li>Advanced reporting and analytics</li>
              <li>Monthly one & one strategy sessions</li>
            </ul>
          </div>
          {/* Pricing Item List End */}

          {/* Pricing Item Button Start */}
          <div className="pricing-item-btn-metal">
            <a href="contact.html" className="btn-default">
              Choose Your Plan
            </a>
          </div>
          {/* Pricing Item Button End */}
        </div>
        {/* Pricing Item End */}
      </div>

      <div className="col-xl-4 col-md-6">
        {/* Pricing Item Start */}
        <div
          className="pricing-item-metal wow fadeInUp"
          data-wow-delay="0.2s"
        >
          {/* Pricing Item Header Start */}
          <div className="pricing-item-header-metal">
            {/* Icon Box Start */}
            <div className="icon-box">
              <img
                src="images/icon-pricing-item-2-metal.svg"
                alt=""
              />
            </div>
            {/* Icon Box End */}

            {/* Pricing Item Title Start */}
            <div className="pricing-item-title-metal">
              <h2>Professional Growth Plan</h2>
            </div>
            {/* Pricing Item Title End */}
          </div>
          {/* Pricing Item Header End */}

          {/* Pricing Item Content Start */}
          <div className="pricing-item-content-metal">
            <p>
              Essential financial guidance and business strategy
              support for startup & small business.
            </p>
            <h3>
              ₹499<sub>/Per Month</sub>
            </h3>
          </div>
          {/* Pricing Item Content End */}

          {/* Pricing Item List Start */}
          <div className="pricing-item-list-metal">
            <h3>Features:</h3>
            <ul>
              <li>Personalized financial consultation</li>
              <li>Quarter financial health assessment</li>
              <li>Advanced reporting and analytics</li>
              <li>Monthly one & one strategy sessions</li>
            </ul>
          </div>
          {/* Pricing Item List End */}

          {/* Pricing Item Button Start */}
          <div className="pricing-item-btn-metal">
            <a href="contact.html" className="btn-default">
              Choose Your Plan
            </a>
          </div>
          {/* Pricing Item Button End */}
        </div>
        {/* Pricing Item End */}
      </div>

      <div className="col-xl-4 col-md-6">
        {/* Pricing Item Start */}
        <div
          className="pricing-item-metal wow fadeInUp"
          data-wow-delay="0.4s"
        >
          {/* Pricing Item Header Start */}
          <div className="pricing-item-header-metal">
            {/* Icon Box Start */}
            <div className="icon-box">
              <img
                src="images/icon-pricing-item-3-metal.svg"
                alt=""
              />
            </div>
            {/* Icon Box End */}

            {/* Pricing Item Title Start */}
            <div className="pricing-item-title-metal">
              <h2>Premium Strategy Plan</h2>
            </div>
            {/* Pricing Item Title End */}
          </div>
          {/* Pricing Item Header End */}

          {/* Pricing Item Content Start */}
          <div className="pricing-item-content-metal">
            <p>
              Essential financial guidance and business strategy
              support for startup & small business.
            </p>
            <h3>
              ₹699<sub>/Per Month</sub>
            </h3>
          </div>
          {/* Pricing Item Content End */}

          {/* Pricing Item List Start */}
          <div className="pricing-item-list-metal">
            <h3>Features:</h3>
            <ul>
              <li>Personalized financial consultation</li>
              <li>Quarter financial health assessment</li>
              <li>Advanced reporting and analytics</li>
              <li>Monthly one & one strategy sessions</li>
            </ul>
          </div>
          {/* Pricing Item List End */}

          {/* Pricing Item Button Start */}
          <div className="pricing-item-btn-metal">
            <a href="contact.html" className="btn-default">
              Choose Your Plan
            </a>
          </div>
          {/* Pricing Item Button End */}
        </div>
        {/* Pricing Item End */}
      </div>

      <div className="col-lg-12">
        {/* Pricing Benefits List Start */}
        <div
          className="pricing-benefit-list-metal wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <ul>
            <li>
              <img src="images/icon-pricing-benefit-1.svg" alt="" />
              Get 30 day free trial
            </li>
            <li>
              <img src="images/icon-pricing-benefit-2.svg" alt="" />
              No any hidden fees pay
            </li>
            <li>
              <img src="images/icon-pricing-benefit-3.svg" alt="" />
              You can cancel anytime
            </li>
          </ul>
        </div>
        {/* Pricing Benefits List End */}
      </div>
    </div>
  </div>
</div>
{/* Our Pricing Section End */}

{/* Our Testimonial Section Start */}
<div className="our-testimonials-metal dark-section">
  <div className="container">
    <div className="row section-row align-items-center">
      <div className="col-xl-7">
        {/* Section Title Start */}
        <div className="section-title">
          <span className="section-sub-title wow fadeInUp">
            Our Testimonials
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Client Experiences that Highlight our Proven Results
          </h2>
        </div>
        {/* Section Title End */}
      </div>

      <div className="col-xl-5">
        {/* Section Button Start */}
        <div className="section-btn">
          <a
            href="testimonials.html"
            className="btn-default btn-highlighted"
          >
            View All Review
          </a>
        </div>
        {/* Section Button End */}
      </div>
    </div>

    <div className="row">
      <div className="col-xl-5">
        {/* Testimonial Image Box Start */}
        <div className="testimonial-image-box-metal wow fadeInUp">
          {/* Testimonial Image Start */}
          <div className="testimonial-image-metal">
            <figure className="image-anime">
              <img
                src="images/testimonial-image-metal.jpg"
                alt=""
              />
            </figure>
          </div>
          {/* Testimonial Image End */}

          {/* Testimonials CTA Box Start */}
          <div className="testimonials-cta-box-metal">
            {/* Testimonials CTA Header Start */}
            <div className="testimonials-cta-header-metal">
              <h2>4.9/5</h2>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            {/* Testimonials CTA Header End */}

            {/* Satisfy Client Images Start */}
            <div className="satisfy-client-images">
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img src="images/author-1.jpg" alt="" />
                </figure>
              </div>
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img src="images/author-2.jpg" alt="" />
                </figure>
              </div>
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img src="images/author-3.jpg" alt="" />
                </figure>
              </div>
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img src="images/author-4.jpg" alt="" />
                </figure>
              </div>
            </div>
            {/* Satisfy Client Images End */}

            {/* Testimonials CTA Content Start */}
            <div className="testimonials-cta-content">
              <p>
                <span>2k+</span> Happy Customer
              </p>
            </div>
            {/* Testimonials CTA Content End */}
          </div>
          {/* Testimonials CTA Box End */}
        </div>
        {/* Testimonial Image Box End */}
      </div>

      <div className="col-xl-7">
        {/* Testimonial Slider Start */}
        <div
          className="testimonial-slider-metal wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="swiper">
            <div
              className="swiper-wrapper"
              data-cursor-text="Drag"
            >
              {/* Testimonial Slide Start */}
              <div className="swiper-slide">
                {/* Testimonial Item Start */}
                <div className="testimonial-item-metal">
                  {/* Testimonial Header Start */}
                  <div className="testimonial-item-header-metal">
                    {/* Rating Start */}
                    <div className="testimonial-item-rating-metal">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    {/* Rating End */}

                    {/* Content Start */}
                    <div className="testimonial-item-content-metal">
                      <p>
                        “Partnering with this advisory team was a
                        game-changer for my business. Their insights
                        were practical, easy to follow, and deeply
                        aligned with my long-term goals. I finally
                        felt like every decision I made was backed by
                        real expertise.”
                      </p>
                    </div>
                    {/* Content End */}
                  </div>
                  {/* Testimonial Header End */}

                  {/* Footer Start */}
                  <div className="testimonial-item-author-metal">
                    <div className="testimonial-author-image-metal">
                      <figure>
                        <img
                          src="images/author-1.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="testimonial-author-content-metal">
                      <h2>Jenny Wilson</h2>
                      <p>Market Research Analyst</p>
                    </div>
                  </div>
                  {/* Footer End */}
                </div>
                {/* Testimonial Item End */}
              </div>
              {/* Testimonial Slide End */}

              {/* Testimonial Slide Start */}
              <div className="swiper-slide">
                <div className="testimonial-item-metal">
                  <div className="testimonial-item-header-metal">
                    <div className="testimonial-item-rating-metal">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>

                    <div className="testimonial-item-content-metal">
                      <p>
                        “Partnering with this advisory team was a
                        game-changer for my business. Their insights
                        were practical, easy to follow, and deeply
                        aligned with my long-term goals.”
                      </p>
                    </div>
                  </div>

                  <div className="testimonial-item-author-metal">
                    <div className="testimonial-author-image-metal">
                      <figure>
                        <img
                          src="images/author-2.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="testimonial-author-content-metal">
                      <h2>Eleanor Pena</h2>
                      <p>Senior Financial Advisor</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Slide End */}
            </div>

            <div className="testimonial-btn-metal">
              <div className="testimonial-button-prev-metal"></div>
              <div className="testimonial-button-next-metal"></div>
            </div>
          </div>
        </div>
        {/* Testimonial Slider End */}
      </div>
    </div>
  </div>
</div>
{/* Our Testimonial Section End */}

{/* Our Team Section Start */}
<div className="our-team-metal">
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
            and insights you can rely on to navigate complex challenges
            with confidence and clarity.
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      <div className="col-xl-3 col-md-6">
        {/* Team Item Start */}
        <div className="team-item-metal wow fadeInUp">
          {/* Team Item Header Start */}
          <div className="team-item-header-metal">
            {/* Team Item Image Start */}
            <div className="team-item-image-metal">
              <a
                href="team-single.html"
                data-cursor-text="View"
              >
                <figure>
                  <img src="images/team-1.jpg" alt="" />
                </figure>
              </a>
            </div>
            {/* Team Item Image End */}

            {/* Team Social List Start */}
            <div className="team-social-list-metal">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* Team Social List End */}
          </div>
          {/* Team Item Header End */}

          {/* Team Item Content Start */}
          <div className="team-item-content-metal">
            <h2>
              <a href="team-single.html">Aarav Mehta</a>
            </h2>
            <p>Senior Financial Advisor</p>
          </div>
          {/* Team Item Content End */}
        </div>
        {/* Team Item End */}
      </div>

      <div className="col-xl-3 col-md-6">
        <div
          className="team-item-metal wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="team-item-header-metal">
            <div className="team-item-image-metal">
              <a href="team-single.html" data-cursor-text="View">
                <figure>
                  <img src="images/team-2.jpg" alt="" />
                </figure>
              </a>
            </div>

            <div className="team-social-list-metal">
              <ul>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="team-item-content-metal">
            <h2>
              <a href="team-single.html">David Kapoor</a>
            </h2>
            <p>Business Strategy Consultant</p>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div
          className="team-item-metal wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="team-item-header-metal">
            <div className="team-item-image-metal">
              <a href="team-single.html" data-cursor-text="View">
                <figure>
                  <img src="images/team-3.jpg" alt="" />
                </figure>
              </a>
            </div>

            <div className="team-social-list-metal">
              <ul>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="team-item-content-metal">
            <h2>
              <a href="team-single.html">Rohan Desai</a>
            </h2>
            <p>Investment Portfolio Specialist</p>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div
          className="team-item-metal wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <div className="team-item-header-metal">
            <div className="team-item-image-metal">
              <a href="team-single.html" data-cursor-text="View">
                <figure>
                  <img src="images/team-4.jpg" alt="" />
                </figure>
              </a>
            </div>

            <div className="team-social-list-metal">
              <ul>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="team-item-content-metal">
            <h2>
              <a href="team-single.html">Darrell Malhotra</a>
            </h2>
            <p>Market Research Analyst</p>
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
            <span>Free</span> Work with a team that drives real results.{" "}
            <a href="contact.html">Get Your Free Consultation</a>
          </p>
        </div>
        {/* Section Footer Text End */}
      </div>
    </div>
  </div>
</div>
{/* Our Team Section End */}

{/* Our FAQs Section Start */}
<div className="our-faqs-metal">
  <div className="container">
    <div className="row">
      <div className="col-xl-6">
        {/* Our FAQ Content Start */}
        <div className="our-faqs-content-metal">
          {/* Section Title Start */}
          <div className="section-title">
            <span className="section-sub-title wow fadeInUp">
              Frequently Asked Questions
            </span>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
            >
              Quick Help a Common Questions
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Get fast, reliable answers to the questions our clients ask
              most, helping you make confident financial and business
              decisions with ease.
            </p>
          </div>
          {/* Section Title End */}

          {/* Contact Us Circle Start */}
          <div
            className="contact-us-circle-metal wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <a href="contact.html">
              <img
                src="images/contact-us-circle.svg"
                alt=""
              />
            </a>
          </div>
          {/* Contact Us Circle End */}
        </div>
        {/* Our FAQ Content End */}
      </div>

      <div className="col-xl-6">
        {/* FAQ Accordion Start */}
        <div
          className="faq-accordion-metal"
          id="accordion"
        >
          {/* FAQ Item Start */}
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
                How can your service improve my financial stability?
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
                  We combine data-driven planning, expert market insights,
                  and personalized financial strategies to help clients
                  build stable, sustainable, and long-term financial
                  success.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ Item End */}

          {/* FAQ Item Start */}
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
                What strategies do you use for business growth?
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
                  We combine data-driven planning, expert market insights,
                  and personalized financial strategies to help clients
                  build stable, sustainable, and long-term financial
                  success.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ Item End */}

          {/* FAQ Item Start */}
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
                How do you ensure long-term client financial success?
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
                  We combine data-driven planning, expert market insights,
                  and personalized financial strategies to help clients
                  build stable, sustainable, and long-term financial
                  success.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ Item End */}

          {/* FAQ Item Start */}
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
                What makes your financial advisory approach truly unique?
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
                  We combine data-driven planning, expert market insights,
                  and personalized financial strategies to help clients
                  build stable, sustainable, and long-term financial
                  success.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ Item End */}

          {/* FAQ Item Start */}
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
                How quickly can clients expect measurable business results?
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
                  We combine data-driven planning, expert market insights,
                  and personalized financial strategies to help clients
                  build stable, sustainable, and long-term financial
                  success.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ Item End */}
        </div>
        {/* FAQ Accordion End */}
      </div>
    </div>
  </div>
</div>
{/* Our FAQs Section End */}

{/* Our Blog Section Start */}
<div className="our-blog">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span className="section-sub-title wow fadeInUp">
            Latest Blogs
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
          >
            Stay Updated with The Trends
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.2s"
          >
            Keep up with the latest developments in finance,
            investments, and business strategy. Our blog provides
            timely insights, expert advice, and practical tips to
            help you make informed
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div className="post-item wow fadeInUp">
          {/* Post Featured Image Start */}
          <div className="post-featured-image">
            <a
              href="blog-single.html"
              data-cursor-text="View"
            >
              <figure className="image-anime">
                <img
                  src="images/post-1.jpg"
                  alt=""
                />
              </figure>
            </a>
            <div className="post-item-tags">
              <a href="blog-single.html">
                Financial Planning
              </a>
            </div>
          </div>
          {/* Post Featured Image End */}

          {/* Post Item Body Start */}
          <div className="post-item-body">
            <div className="post-item-content">
              <h2>
                <a href="blog-single.html">
                  Top Industry Trends That Are Shaping the
                  Future of Operations
                </a>
              </h2>
            </div>
            <div className="post-item-btn">
              <a
                href="blog-single.html"
                className="readmore-btn"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Post Item Body End */}
        </div>
        {/* Post Item End */}
      </div>

      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div
          className="post-item wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure className="image-anime">
                <img src="images/post-2.jpg" alt="" />
              </figure>
            </a>
            <div className="post-item-tags">
              <a href="blog-single.html">
                Personal Finance
              </a>
            </div>
          </div>

          <div className="post-item-body">
            <div className="post-item-content">
              <h2>
                <a href="blog-single.html">
                  Optimizing Operations Through Strategic
                  Cost Control
                </a>
              </h2>
            </div>
            <div className="post-item-btn">
              <a
                href="blog-single.html"
                className="readmore-btn"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* Post Item End */}
      </div>

      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div
          className="post-item wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure className="image-anime">
                <img src="images/post-3.jpg" alt="" />
              </figure>
            </a>
            <div className="post-item-tags">
              <a href="blog-single.html">
                Business Markets
              </a>
            </div>
          </div>

          <div className="post-item-body">
            <div className="post-item-content">
              <h2>
                <a href="blog-single.html">
                  How Businesses Can Improve Cash Flow in
                  Uncertain Markets
                </a>
              </h2>
            </div>
            <div className="post-item-btn">
              <a
                href="blog-single.html"
                className="readmore-btn"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* Post Item End */}
      </div>
    </div>
  </div>
</div>
{/* Our Blog Section End */}


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
  );
}
