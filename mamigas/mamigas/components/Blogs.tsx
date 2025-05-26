import React from 'react'

function Blogs() {
  return (
    <div>
      <section
        className="space"
        id="blog-sec"
        data-bg-src="assets/img/bg/blog_bg_1.jpg"
      >
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title">
                  <img src="assets/img/theme-img/title_icon.svg" alt="shape" />
                  Our Blog
                </span>
                <h2 className="sec-title">Our Latest News & Blogs</h2>
              </div>
            </div>
            <div className="col-lg-auto d-none d-lg-block">
              <div className="sec-btn">
                <a href="blog.html" className="th-btn style4">
                  View All Post
                </a>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="blogSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_1.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-user"></i>By Mediax
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-calendar"></i>15 March, 2024
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          How Business Is Taking Over & What to Do About It
                        </a>
                      </h3>
                      <a href="blog-details.html" className="th-btn btn-sm">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_2.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-user"></i>By Mediax
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-calendar"></i>16 March, 2024
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Health vs. Wealth Navigate Business in Medicine
                        </a>
                      </h3>
                      <a href="blog-details.html" className="th-btn btn-sm">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_3.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-user"></i>By Mediax
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-calendar"></i>17 March, 2024
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Preserving Care Strategy Amidst Food Changes
                        </a>
                      </h3>
                      <a href="blog-details.html" className="th-btn btn-sm">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_4.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-user"></i>By Mediax
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-calendar"></i>19 March, 2024
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Healthcare Tips Navigating Business & Patient Care
                        </a>
                      </h3>
                      <a href="blog-details.html" className="th-btn btn-sm">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_1.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-user"></i>By Mediax
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-calendar"></i>15 March, 2024
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Strategies Against Corporate Intrusion in Healthcare
                        </a>
                      </h3>
                      <a href="blog-details.html" className="th-btn btn-sm">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_2.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-user"></i>By Mediax
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-calendar"></i>16 March, 2024
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Transform Your Nutrition with Organic Meal
                        </a>
                      </h3>
                      <a href="blog-details.html" className="th-btn btn-sm">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              data-slider-prev="#blogSlider1"
              className="slider-arrow slider-prev"
            >
              <i className="far fa-arrow-left"></i>
            </button>
            <button
              data-slider-next="#blogSlider1"
              className="slider-arrow slider-next"
            >
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs