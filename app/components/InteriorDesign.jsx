import React from 'react'

function InteriorDesign() {
  return (
    <>
    {/* Page Service Single Start */}
<div className="page-service-single">
  <div className="container">
    <div className="row">

      {/* Sidebar */}
      <div className="col-lg-4">
        <div className="page-single-sidebar">

          <div className="page-category-list wow fadeInUp">
            <h2 className="page-category-list-title">Explore Our Services</h2>
            <ul>
             <li><a href="/services/general-contracting">General Contracting</a></li>
              <li><a href="/services/office-automation-solutions">Office Automation</a></li>
              <li><a href="/services/facilities-management">Facilities Management</a></li>
              <li><a href="/services/interior-design-fit-out">Interior Design & Fit Out</a></li>
              <li><a href="/services/elv-system">Elv system</a></li>
            </ul>
          </div>

          <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
            <div className="icon-box">
              <img src="/images/icon-headphone-white.svg" alt="" />
            </div>
            <div className="sidebar-cta-content">
              <h2>Call Us At: <a href="tel:+123456789">+(123) 456 - 789</a></h2>
              <p>
                Contact Nova Phoenix for complete Interior Design and Fit-Out solutions tailored to your space.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="col-lg-8">
        <div className="service-single-content">

          <div className="page-single-image">
            <figure className="image-anime reveal">
              <img src="/images/int1.jpg" alt="" />
            </figure>
          </div>

          <div className="service-entry">

            <h2 className="text-anime-style-3">Complete Solution for Interior Design and Fit Out</h2>

            <p className="wow fadeInUp">
              Nova Phoenix offers end-to-end services tailored to your unique requirements, integrating seamlessly from Shell & Core Fit-Out through detailed Spatial Planning. We are delivering uncompromising quality and personalized service.
            </p>

            <p className="wow fadeInUp">
              Our custom-made home, office, and modular kitchen interior designs ensure that every space is unique. We blend style and functionality to match your lifestyle.
            </p>

            <p className="wow fadeInUp">
              Our dedicated team ensures every step, from initial design to final execution, aligns perfectly with your goals and expectations.
            </p>

            {/* Services Included */}
            <div className="service-facility-box">
              <h2 className="text-anime-style-3">Our Interior Designing Services Includes</h2>

              <p className="wow fadeInUp">
                Offering wide range of workplace services from office refurbishment, office fit-out, office interior design, home and flat interior works.
              </p>

              <div className="service-benefit-list">
                <ul>
                  <li>Office Interior</li>
                  <li>Office Fit out</li>
                  <li>Office Refurbishment</li>
                  <li>Home and Flat Interior</li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="service-benefits-box">
              <h2 className="text-anime-style-3">Why Choose Nova Phoenix</h2>
              <ul>
                <li>Customized designs tailored to client lifestyle and workspace needs</li>
                <li>Complete turnkey solutions from planning to execution</li>
                <li>Professional project management and supervision</li>
                <li>High quality finishing and material selection</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</div>
{/* Page Service Single End */}

    </>
  )
}

export default InteriorDesign