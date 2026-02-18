import React from 'react'

function FacilitiesManagement() {
  return (
    <>
    {/* Page Service Single Start */}
<div className="page-service-single">
  <div className="container">
    <div className="row">
      
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
                Need reliable facilities management services? Contact Nova Phoenix for professional maintenance and support.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-8">
        <div className="service-single-content">

          <div className="page-single-image">
            <figure className="image-anime reveal">
              <img src="/images/blog3.jpg" alt="" />
            </figure>
          </div>

          <div className="service-entry">
            <p className="wow fadeInUp">
              Facilities Management is a complete service for full renovations and everyday general maintenance. Our team of qualified tradesmen focuses on delivering the highest standard of workmanship with a positive attitude and professional execution for all valued clients.
            </p>

            <p className="wow fadeInUp" data-wow-delay="0.2s">
              We ensure reliable support, timely service, and efficient handling of residential and industrial property maintenance requirements.
            </p>

            <div className="service-facility-box">
              <h2 className="text-anime-style-3">What This Service Includes</h2>
              <p className="wow fadeInUp">
                We provide complete building upkeep and maintenance solutions covering technical and operational services.
              </p>

              <div className="service-facility-image-content">
                <div className="service-facility-content">

                  <div className="service-facility-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon-box">
                      <img src="/images/icon-service-facility-1.svg" alt="" />
                    </div>
                    <div className="service-facility-item-content">
                      <h3>Residential & Industrial Complexes</h3>
                      <p>
                        Maintenance support for apartments, villas, commercial and industrial facilities.
                      </p>
                    </div>
                  </div>

                  <div className="service-facility-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box">
                      <img src="/images/icon-service-facility-2.svg" alt="" />
                    </div>
                    <div className="service-facility-item-content">
                      <h3>MEP & Civil Maintenance</h3>
                      <p>
                        Mechanical, Electrical, Plumbing and civil repair works handled by skilled professionals.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="service-facility-image wow fadeInUp" data-wow-delay="0.2s">
                  <figure>
                    <img src="/images/why-choose1.jpg" alt="" />
                  </figure>
                </div>
              </div>

              <p className="wow fadeInUp">
                Additional services include housekeeping & cleaning services, hard & soft landscaping, and ongoing preventive maintenance.
              </p>
            </div>

            <div className="service-benefits-box">
              <h2 className="text-anime-style-3">Key Benefits of Services</h2>
              <p className="wow fadeInUp">
                We deliver dependable maintenance services with skilled manpower, quality materials, and efficient management ensuring long-term property performance.
              </p>

              <div className="service-benefit-list wow fadeInUp" data-wow-delay="0.2s">
                <ul>
                  <li>Professional and qualified maintenance team</li>
                  <li>Complete building maintenance under one company</li>
                  <li>Timely service and reliable support</li>
                  <li>Cost-effective long term solutions</li>
                </ul>
              </div>

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

export default FacilitiesManagement