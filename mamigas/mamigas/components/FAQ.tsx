import React from 'react'
import "@/assets/css/app.min.css";
import "@/assets/css/style.css";
import "@/assets/css/fontawesome.min.css";
import Script from 'next/script';

function FAQ() {
  return (
    <div>
      <div className="space" id="faq-sec">
        <div className="container">
          <div className="row gy-40 align-items-center">
            <div className="col-xl-6">
              <div className="title-area text-center text-xl-start">
                <span className="sub-title">
                  <img src="assets/img/theme-img/title_icon.svg" alt="shape" />
                  Frequently Asked Questions
                </span>
                <h2 className="sec-title">
                  FAQs – Mamigas Pharmaceutical Services
                </h2>
              </div>
              <div className="accordion active-white" id="faqAccordion4">
                <div className="accordion-card active">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      What types of pharmaceutical products do you supply?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion4"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Mediax Gynecology are provides comprehensives
                        Gynecological services, including obstetrics,
                        gynecological exams.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      How can hospitals or distributors place an order?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion4"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Mediax Gynecology are provides comprehensives
                        Gynecological services, including obstetrics,
                        gynecological exams.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      Do you offer delivery services across Ethiopia?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion4"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Mediax Gynecology are provides comprehensives
                        Gynecological services, including obstetrics,
                        gynecological exams.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      Are your medicines approved by Ethiopian regulatory
                      authorities?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion4"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Mediax Gynecology are provides comprehensives
                        Gynecological services, including obstetrics,
                        gynecological exams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xl-5">
                <div className="rounded-20">
                  <img
                    className="w-100"
                    src="assets/img/normal/faq_3.jpg"
                    alt="faq"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </div>
  );
}

export default FAQ