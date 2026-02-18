import React from 'react'

function OfficeAutomation() {
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
                Contact Nova Phoenix for reliable office automation equipment and smart workplace solutions.
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
              <img src="/images/automation.jpg" alt="" />
            </figure>
          </div>

          <div className="service-entry">

            <h2 className="text-anime-style-3">Office Automation Solutions</h2>

            <p className="wow fadeInUp">
              We offer a wide range of office automation solutions. We specialize in providing top-notch office equipment solutions, ensuring that your office equipment runs smoothly and efficiently.
            </p>

            <p className="wow fadeInUp">
              Whether you’re in need of AV solutions, color copy machines, interactive screens, or IT products, our diverse range of products and services are designed to meet the unique demands of businesses, large and small.
            </p>

            {/* Services Included */}
            <div className="service-facility-box">
              <h2 className="text-anime-style-3">Our Office Automation Products</h2>

              <div className="service-benefit-list">
                <ul>
                  <li>Printers and Photo Copying Machines</li>
                  <li>Interactive Screens and Projectors</li>
                  <li>ID Card Printers</li>
                  <li>IT and Network Products</li>
                  <li>Office Furnitures</li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="service-benefits-box">
              <h2 className="text-anime-style-3">Why Choose Nova Phoenix</h2>
              <ul>
                <li>Complete office technology solutions under one provider</li>
                <li>Reliable equipment performance and support</li>
                <li>Solutions suitable for small to large businesses</li>
                <li>Modern workplace productivity improvement</li>
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

export default OfficeAutomation