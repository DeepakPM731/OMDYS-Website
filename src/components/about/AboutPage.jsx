// import About from './About';

import { useEffect } from 'react';
import Counter from '../Counter';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        {/* <div style={{ marginBottom: '100px' }}> */}
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details">
                <h2>About Us</h2>
                <p>our values and vaulted us to the top of our industry.</p>
              </div>
            </div>
          </div>
          <div className="breadcrums">
            <div className="container">
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
            </div>
          </div>
        </section>
      </div>

      {/* <About /> */}

      <>
        {/* About-First Start */}
        <section className="gap about-first">
          <div className="container">
            <div className="row">
              <h2>
                “ THINK BEYOND BORDERS, AND TRADE WITH TRUST. YOUR
                MULTI-FUNCTIONAL GATEWAY – OMDYS INTERNATIONAL. ”
              </h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="who-we-are">
                  <div>
                    <h3>Who We Are?</h3>
                    <p style={{ textAlign: 'justify' }}>
                      Born in the heart of industrial-Hosur, Tamil Nadu, OMDYS
                      International LLP is a young and dynamic sourcing and
                      trading company. With a wealth of experience under our
                      belt, we have a proven track record of connecting
                      businesses with the right suppliers and products. Our
                      expertise lies in understanding your specific needs and
                      tailoring solutions that maximize your value and minimize
                      procurement challenges. We connect businesses with the
                      best suppliers and products, streamlining their
                      procurement processes and ensuring cost-efficiency.
                    </p>
                  </div>
                  <figure>
                    <img
                      // className="w-100"
                      // src="https://winsfolio.net/html/builty/assets/images/about-d-1.jpg"
                      // src="assets/svg/1.svg"
                      // src="assets/svg4/whoweare1.svg"
                      src="https://s3.ap-south-1.amazonaws.com/omdys.com/whoweare1.svg"
                      alt="About Image One"
                      style={{ width: '580px', height: '500px' }}
                      // width={'500px'}
                      // height={'780px'}
                    />
                  </figure>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="who-we-are space">
                  <div>
                    <h3>What's in it for me?</h3>
                    <ul>
                      <li>
                        <i className="fa-solid fa-circle-dot" /> Cost Savings &
                        Efficiency
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-dot" /> Quality &
                        Reliability
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-dot" />
                        Time Savings & Expertise
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-dot" />
                        One-Stop Solution
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-dot" /> Access to
                        Exclusive Products & Suppliers
                      </li>
                    </ul>
                  </div>
                  <figure>
                    <img
                      // className="w-100"
                      // src="https://winsfolio.net/html/builty/assets/images/about-d-2.jpg"
                      // src="assets/svg4/whoweare2.svg"
                      src="https://s3.ap-south-1.amazonaws.com/omdys.com/whoweare2.svg"
                      alt="About Image Two "
                      style={{ width: '580px', height: '500px' }}
                      // width={'520px'}
                      // height={'450px'}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About-First End */}

        {/* Counter  Start*/}
        <Counter />
        {/* Counter  End*/}
        <>
          {/*About How It Works Start */}
          <section className="gap about-how-it-works light-bg-color">
            <div className="heading">
              <figure>
                <img src="assets/images/heading-icon.png" alt="Heading Icon" />
              </figure>
              <span>Plan + Control</span>
              <h2>How it Works</h2>
            </div>
            <div className="container">
              <figure style={{ position: 'relative', zIndex: 9 }}>
                <img
                  className="w-100"
                  // src="https://winsfolio.net/html/builty/assets/images/about-h-i-w.jpg"
                  // src="assets/svg4/howitworks.svg"
                  src="https://s3.ap-south-1.amazonaws.com/omdys.com/howitworks.svg"
                  alt="About How It Works"
                />
              </figure>
            </div>
            <div className="container">
              <div className="row g-0">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="plans">
                    <div className="y-box d-flex-all">1.</div>
                    <h3>Understand Your Needs</h3>
                    <p>
                      We begin by having an in-depth conversation to understand
                      your specific sourcing requirements. This includes the
                      type of products you need, desired quality standards,
                      budget constraints, and delivery timelines.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="plans">
                    <div className="y-box d-flex-all">2.</div>
                    <h3>Supplier Sourcing & Negotiation</h3>
                    <p>
                      Our experienced team leverages its extensive network to
                      identify qualified suppliers that meet your criteria. We
                      then negotiate competitive prices and terms on your
                      behalf, ensuring you receive the best value for your
                      budget.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="plans" style={{ paddingBottom: '60px' }}>
                    <div className="y-box d-flex-all">3.</div>
                    <h3>Quality Control & Assurance</h3>
                    <p>
                      We understand the importance of quality. We work closely
                      with our suppliers to ensure products meet your
                      specifications and industry standards. We also conduct
                      thorough quality control inspections before shipment.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="plans" style={{ paddingBottom: '60px' }}>
                    <div className="y-box d-flex-all">4.</div>
                    <h3>Ongoing Support & Partnership</h3>
                    <p>
                      We believe in building long-term partnerships with our
                      clients. We offer ongoing support to ensure your sourcing
                      needs are consistently met and provide valuable insights
                      to optimize your procurement process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*About How It Works End */}
          <>
            {/*About Key Benefits Start */}
            <section className="gap about-key-benefits">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="data">
                      <figure>
                        <img
                          className="w-100"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/key_benefitsann.png"
                          // src="https://winsfolio.net/html/builty/assets/images/about-k-b.jpg"
                          alt="About key Benefits"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="data">
                      <h2>Key Benefits</h2>
                      <ul>
                        <li>
                          <i className="fa-solid fa-check" />
                          <p>
                            <b>Cost Savings through Strategic Sourcing:</b>{' '}
                            Discover how our deep market knowledge and supplier
                            network unlock competitive pricing, helping you
                            reduce procurement costs and maximize profitability
                          </p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          <p>
                            <b> Quality & Reliability:</b> Peace of Mind
                            Guaranteed: We prioritize quality in every step,
                            ensuring you receive consistent, high-quality
                            products from vetted suppliers, minimizing
                            disruption and maximizing operational efficiency.
                          </p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          <p>
                            <b> Time-Saving Solutions, Effortless Sourcing:</b>{' '}
                            Delegate your sourcing needs to our experienced team
                            and free up your valuable time and resources. We
                            handle everything from supplier selection to
                            logistics, streamlining your procurement process
                          </p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check" />
                          <p>
                            <b>
                              Customized Solutions, Tailored for Your Success:
                            </b>{' '}
                            We go beyond generic solutions, offering tailored
                            sourcing strategies that align with your specific
                            industry and business goals. Get the perfect fit for
                            your unique needs and achieve your desired outcomes.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*About Key Benefits End */}
          </>
        </>
      </>
    </>
  );
};

export default AboutPage;
