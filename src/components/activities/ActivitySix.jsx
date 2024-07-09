import { useEffect } from 'react';

const ActivitySix = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details">
                <h2 style={{ textAlign: 'center' }}>
                  Trading of Pulses and Grains – Exporting
                </h2>
                {/* <p>our values and vaulted us to the top of our industry.</p> */}
              </div>
            </div>
          </div>
          {/* <div className="breadcrums"> */}
          {/* <div className="container">
              <div className="row">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa-solid fa-house" />
                      <p>Home</p>
                    </a>
                  </li>
                  <li className="current">
                    <p>About Us</p>
                  </li>
                </ul>
              </div>
            </div> */}
          {/* </div> */}
        </section>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="who-we-are">
              <div>
                {/* <h3 className="mb-5 text-center" style={{ fontSize: '48px' }}>
                  Wide Range of Products
                </h3> */}
                {/* <p style={{ textAlign: 'justify' }}> */}
                <div style={{ textAlign: 'justify' }}>
                  <p style={{ fontSize: '20px', textAlign: 'justify' }}>
                    At OMDYS International LLP we take pride in being a premier
                    exporter of high-quality pulses and grains to markets around
                    the world. With years of experience and a commitment to
                    excellence, we have established ourselves as a trusted
                    source for premium agricultural products. Our dedication to
                    quality, reliability, and customer satisfaction sets us
                    apart in the industry.
                  </p>
                  {/* <br />
                  <p>
                    At OMDYS International LLP, we understand the critical role
                    that electronic components play in today's technology-driven
                    world. Whether you are a small-scale electronics hobbyist or
                    a large-scale manufacturer, we have the products and
                    services to support your projects and businesses.
                  </p> */}
                </div>
              </div>
              <figure>
                {/* <img
                    className="w-100"
                    src="https://winsfolio.net/html/builty/assets/images/about-d-1.jpg"
                    alt="About Image One"
                  /> */}
              </figure>
            </div>
          </div>
        </div>
      </div>

      <section className=" no-top project-completed our-projects-one">
        <div className="container mb-4">
          <figure style={{ position: 'relative', zIndex: 9 }}>
            <img
              className="w-100"
              src="assets/svg4/Pulses & Grains.svg"
              // src="https://winsfolio.net/html/builty/assets/images/about-h-i-w.jpg"
              alt="About How It Works"
            />
          </figure>
        </div>

        {/* -------------------------------- */}
        <section className=" no-top project-completed our-projects-one">
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">
                        Our Extensive Product Range
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  We offer an extensive range of pulses and grains sourced from
                  the finest farms and producers. Our product portfolio
                  includes:
                </p>

                {/* <p className="m-4" style={{ fontSize: '20px' }}>
                All our PPE products undergo rigorous testing and certification
                to ensure compliance with global regulatory requirements,
                including FDA, CE, ISO, and ASTM standards. Whether it's
                surgical masks, respirators, gloves, or protective apparel, you
                can trust OMDYS to deliver PPE solutions that meet or exceed
                industry benchmarks for safety and performance.
              </p> */}

                <div className="prj-post mb-2">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <div className="proj-data">
                          <h3 className="mt-4">
                            <a href="project-detail.html">1. Pulses:</a>
                          </h3>
                        </div>
                      </div>
                      <p className="m-4" style={{ fontSize: '20px' }}>
                        <b style={{ color: '' }}>
                          {' '}
                          a) Lentils (Green, Red, Yellow)
                          <br />
                          b) Chickpeas (Kabuli, Desi)
                          <br />
                          c) Peas (Green, Yellow)
                          <br />
                          d) Beans (Kidney, Black, Pinto, Navy)
                          <br />
                          e) Soybeans
                          <br />
                          f) Mung Beans
                          <br />
                          g) Black Eyed Peas
                          <br />
                          And more
                          <br />
                        </b>{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="prj-post mb-2">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <div className="proj-data">
                          <h3 className="mt-4">
                            <a href="project-detail.html">2 Grains:</a>
                          </h3>
                        </div>
                      </div>
                      <p
                        className="m-4 "
                        style={{ fontSize: '20px', fontWeight: 'bolder' }}
                      >
                        a) Rice (Basmati, Jasmine, Long Grain, Parboiled)
                        <br />
                        b) Wheat (Durum, Soft Wheat)
                        <br />
                        c) Barley
                        <br />
                        d) Millets (Finger Millet, Pearl Millet)
                        <br />
                        e) Sorghum
                        <br />
                        f) Quinoa
                        <br />
                        g) Buckwheat
                        <br />
                        And more
                        <br />
                      </p>
                    </div>
                    {/* <p className="mx-1 my-2" style={{ fontSize: '20px' }}>
                      Trust OMDYS International LLP for all your medical PPE
                      sourcing requirements. Together, let's prioritize safety
                      and protect what matters most.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">Quality Assurance</a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  We uphold the highest standards of quality and food safety
                  throughout our operations. Our products undergo stringent
                  quality control measures from sourcing to packaging to ensure
                  that they meet international standards. We work closely with
                  our suppliers and farmers to maintain the integrity and purity
                  of our products, providing our customers with wholesome and
                  nutritious food options.
                </p>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">
                        Global Distribution Network
                      </a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  {/* Our selection of passive components includes resistors,
                  capacitors, inductors, and filters to support various circuit
                  designs and applications. */}
                  With a robust distribution network spanning across continents,
                  we have the capability to serve customers worldwide. Whether
                  you're based in Asia, Europe, North America, or beyond, we can
                  efficiently fulfill your orders and deliver our products to
                  your desired destination. Our strategic partnerships with
                  shipping companies and logistics providers enable us to offer
                  timely and reliable delivery services.
                </p>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">Customized Solutions</a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  {/* Our selection of passive components includes resistors,
                  capacitors, inductors, and filters to support various circuit
                  designs and applications. */}
                  We understand that each customer has unique requirements and
                  preferences. That's why we offer customized solutions tailored
                  to your specific needs. Whether you require bulk packaging,
                  private labeling, or specialized shipping arrangements, our
                  experienced team is here to accommodate your requests and
                  ensure a seamless experience.
                </p>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">Competitive Pricing</a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  We strive to offer competitive pricing without compromising on
                  quality. Through efficient sourcing practices, streamlined
                  operations, and optimized supply chain management, we are able
                  to keep our costs competitive and pass on the savings to our
                  customers. With us, you can enjoy excellent value for money
                  and maximize your profitability.
                </p>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">Customer Satisfaction</a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  At OMDYS International LLP, customer satisfaction is our top
                  priority. We are committed to building long-term relationships
                  with our clients based on trust, integrity, and mutual
                  respect. Our dedicated team of professionals is always
                  available to address your inquiries, provide assistance, and
                  exceed your expectations at every stage of the business
                  relationship.
                </p>
              </div>
            </div>
          </div>
          <div className="prj-post mb-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="proj-data">
                    <h3 className="mt-4">
                      <a href="project-detail.html">Contact Us</a>
                    </h3>
                  </div>
                </div>
                <p className="m-4" style={{ fontSize: '20px' }}>
                  Experience the difference with OMDYS International LLP.
                  Contact us today to discuss your requirements, request
                  samples, or inquire about our products and services. We look
                  forward to serving you and becoming your preferred partner for
                  premium pulses and grains. Let us help you succeed in the
                  global marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* </div>
        </div> */}
      </section>
    </>
  );
};

export default ActivitySix;
