import React from 'react'

function ElectroMechanical() {
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
              <li><a href="#">Electro Mechanical Services (MEP)</a></li>
              <li><a href="#">General Contracting</a></li>
              <li><a href="#">Property Maintenance</a></li>
              <li><a href="#">Renovations & Alterations</a></li>
              <li><a href="#">Fit Out Works</a></li>
            </ul>
          </div>

          <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
            <div className="icon-box">
              <img src="/images/icon-headphone-white.svg" alt="" />
            </div>
            <div className="sidebar-cta-content">
              <h2>Call Us At: <a href="tel:+123456789">+(123) 456 - 789</a></h2>
              <p>
                Contact Nova Phoenix for complete Mechanical, Electrical and Plumbing engineering solutions.
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
              <img src="/images/service-single-image.jpg" alt="" />
            </figure>
          </div>

          <div className="service-entry">

            <h2 className="text-anime-style-3">Electro Mechanical Services (MEP)</h2>

            <p className="wow fadeInUp">
              We offer wide range of MEP (Mechanical, Electrical, and Plumbing) Services including MEP Building Services, Infrastructure and Fire Systems. Our team has skilled engineers, air-conditioning mechanics, electricians, plumbers, supervisors and expert laborers committed to providing high quality engineering services.
            </p>

            <p className="wow fadeInUp">
              We promote innovation and modern technology to improve productivity and enhance system efficiency. Each system is tailored to the project to improve functionality, reduce operational cost and minimize environmental impact.
            </p>

            {/* Mechanical Systems */}
            <div className="service-facility-box">
              <h2 className="text-anime-style-3">Mechanical Systems</h2>

              <div className="service-benefit-list">
                <ul>
                  <li>
                    <strong>HVAC (Heating, Ventilation, and Air Conditioning):</strong> 
                    Design and installation of climate control systems ensuring proper temperature, air quality and humidity levels for occupant comfort. Includes ductwork, air handlers, heat pumps, boilers and chillers.
                  </li>
                </ul>
              </div>
            </div>

            {/* Electrical Systems */}
            <div className="service-facility-box">
              <h2 className="text-anime-style-3">Electrical Systems</h2>

              <div className="service-benefit-list">
                <ul>
                  <li>
                    <strong>Power Distribution:</strong> Installation of panels, transformers, wiring and circuit breakers distributing electricity safely across the building.
                  </li>
                  <li>
                    <strong>Lighting Systems:</strong> Lighting solutions from standard fixtures to energy-efficient LED and motion-sensor systems.
                  </li>
                  <li>
                    <strong>Backup Power:</strong> Generator and UPS systems ensuring uninterrupted operation during power outages.
                  </li>
                </ul>
              </div>
            </div>

            {/* Plumbing Systems */}
            <div className="service-facility-box">
              <h2 className="text-anime-style-3">Plumbing Systems</h2>

              <div className="service-benefit-list">
                <ul>
                  <li>
                    <strong>Water Supply & Distribution:</strong> Installation of pipes, pumps, tanks and fixtures providing reliable potable and irrigation water supply.
                  </li>
                  <li>
                    <strong>Drainage & Waste Systems:</strong> Drainage networks removing wastewater and rainwater preventing flooding and maintaining sanitation.
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="service-benefits-box">
              <h2 className="text-anime-style-3">Key Benefits</h2>
              <ul>
                <li>Improves building efficiency and occupant comfort</li>
                <li>Reduces operational and maintenance costs</li>
                <li>Energy efficient and environmentally friendly</li>
                <li>Reliable long-term performance</li>
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

export default ElectroMechanical