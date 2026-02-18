import React from 'react'

function ElvSysxtem() {
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
                Contact Nova Phoenix for advanced ELV systems, security and smart automation solutions.
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
              <img src="/images/elv1.jpg" alt="" />
            </figure>
          </div>

          <div className="service-entry">

            <h2 className="text-anime-style-3">ELV Systems</h2>

            <p className="wow fadeInUp">
              Looking for cutting-edge ELV Systems solutions? At Nova Phoenix, we specialize in providing state-of-the-art ELV services that elevate your space to new heights.
            </p>

            <p className="wow fadeInUp">
              Our experienced team delivers comprehensive solutions including CCTV Surveillance Systems, Access Control and Time & Attendance Systems, and Gate Barriers & Turnstile Solutions tailored to meet your unique requirements.
            </p>

            <p className="wow fadeInUp">
              With a focus on innovation and efficiency, we leverage the latest technologies to enhance connectivity, security and automation in both commercial and residential environments.
            </p>

            <p className="wow fadeInUp">
              Looking for reliable and professional ELV system services in the United Arab Emirates? Nova Phoenix provides complete integrated ELV solutions.
            </p>

            {/* ELV Services List */}
            <div className="service-facility-box">
              <h2 className="text-anime-style-3">Our ELV Services Include</h2>

              <div className="service-benefit-list">
                <ul>
                  <li>Structured Cabling (Data & Voice)</li>
                  <li>CCTV Surveillance Systems</li>
                  <li>Access Control and Time Attendance Systems</li>
                  <li>Audio / Video Door Entry Systems</li>
                  <li>Home Automation Systems</li>
                  <li>Automatic Doors, Gate Barrier & Turnstile Solutions</li>
                  <li>PA & Voice Evacuation Systems</li>
                  <li>Intrusion Alarm Systems</li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="service-benefits-box">
              <h2 className="text-anime-style-3">Why Choose Nova Phoenix</h2>
              <ul>
                <li>Advanced security and automation technologies</li>
                <li>Reliable and scalable integrated systems</li>
                <li>Solutions suitable for commercial and residential properties</li>
                <li>Professional installation and technical support</li>
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

export default ElvSysxtem