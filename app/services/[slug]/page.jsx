import ElectroMechanical from '@/app/components/ElectroMechanical'
import ElvSysxtem from '@/app/components/ElvSysxtem'
import FacilitiesManagement from '@/app/components/FacilitiesManagement'
import Footer from '@/app/components/Footer'
import GeneralContracting from '@/app/components/GeneralContracting'
import Header from '@/app/components/Header'
import InteriorDesign from '@/app/components/InteriorDesign'
import OfficeAutomation from '@/app/components/OfficeAutomation'
import React from 'react'

// ===== Service Mapping (Slug → Component + Title) =====
const services = {
  "general-contracting": {
    title: "General Contracting",
    component: GeneralContracting,
  },
  "facilities-management": {
    title: "Facilities Management",
    component: FacilitiesManagement,
  },
  "electro-mechanical-mep": {
    title: "Electro Mechanical (MEP)",
    component: ElectroMechanical,
  },
  "interior-design-fit-out": {
    title: "Interior Design & Fit Out",
    component: InteriorDesign,
  },
  "office-automation-solutions": {
    title: "Office Automation Solutions",
    component: OfficeAutomation,
  },
  "elv-systems": {
    title: "ELV Systems",
    component: ElvSysxtem,
  },
};

// ===== Static Params (for SEO + Performance) =====
export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

// ===== Dynamic Page =====
function page({ params }) {
  const { slug } = params;

  const service = services[slug];

  // If invalid slug → 404
  if (!service) return notFound();

  const ServiceComponent = service.component;
  const title = service.title;
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
            {title}
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
           {title}
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

{/* <GeneralContracting/>
<ElectroMechanical/>
<ElvSysxtem/>
<FacilitiesManagement/>
<InteriorDesign/>
<OfficeAutomation/> */}

   {/* ===== MAIN SERVICE CONTENT (DYNAMIC) ===== */}
      <ServiceComponent />
{/* Main Footer Start */}
<Footer/>
{/* Main Footer End */}


    </>
  )
}

export default page