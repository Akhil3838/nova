import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

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
                <img src="images/blog1.jpg" alt="" />
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
                <img src="images/blog2.jpg" alt="" />
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
                <img src="images/blog3.jpg" alt="" />
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
<Footer/>
{/* Main Footer End */}


    </>
  )
}

export default page