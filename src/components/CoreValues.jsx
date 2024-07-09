import { useEffect } from 'react';

const CoreValues = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <>
        {/* Banner Style One Start */}
        <section className="banner-style-one">
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details">
                <h2>Core Values</h2>
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
                    <p>Core Values</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Style One End */}
        <div style={{ marginTop: '20px' }}>
          <section className="gap no-top core-values">
            <div className="heading">
              <figure>
                <img src="assets/images/heading-icon.png" alt="Heading Icon" />
              </figure>
              <span>MAKE A DIFFERENCE</span>
              <h2>Our Core Values</h2>
            </div>
            <div className="container">
              <div className="row">
                <ul>
                  <li>
                    <div className="data">
                      <h3> Integrity & Transparency</h3>
                      <p>
                        We operate with honesty and transparency in all our
                        interactions, from supplier negotiations to client
                        communication. You can trust us to uphold ethical
                        sourcing practices and deliver fair value in every
                        transaction
                      </p>
                    </div>
                    <div className="image" data-aos="fade-up-left">
                      <figure>
                        <img
                          className="w-100"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/integrity.png"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="image" data-aos="fade-up-right">
                      <figure>
                        <img
                          className="w-100"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/innovation.png"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                    <div className="data">
                      <h3> Expertise & Innovation</h3>
                      <p>
                        Our team combines in-depth market knowledge with a
                        commitment to innovative solutions. We leverage
                        cutting-edge technology and stay ahead of industry
                        trends to provide you with the most efficient and
                        effective sourcing strategies.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="data">
                      <h3>Client-Centricity & Partnership</h3>
                      <p>
                        We don't just source products, we build partnerships. We
                        prioritize understanding your unique needs and goals,
                        tailoring our solutions and exceeding your expectations.
                        We are committed to your long-term success and act as an
                        extension of your team.
                      </p>
                    </div>
                    <div className="image" data-aos="fade-up-left">
                      <figure>
                        <img
                          className="w-100"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Ship.png"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <>
          {/* Innovation Start */}

          <>
            {/* Innovation Start */}
            <section className="gap innovation">
              <div className="heading">
                <span>MAKE A DIFFERENCE</span>
                <h2>Innovation in Action</h2>
              </div>
              <div className="container">
                <div className="row">
                  <ul>
                    <li style={{ overflow: '' }} data-aos="fade-up-left">
                      <i className="fa-solid fa-check" />
                      <p>
                        <span style={{ color: 'green' }}>
                          <b>
                            <b>AI-Powered Supplier Discovery:</b>
                          </b>
                        </span>{' '}
                        Forget manual searches. We leverage AI algorithms to
                        identify the best, hidden-gem suppliers based on your
                        specific needs and market trends. This ensures you
                        access the most competitive options, even beyond
                        traditional networks.
                        <br />
                        <br />
                      </p>
                    </li>
                    <li data-aos="fade-down">
                      <i className="fa-solid fa-check" />
                      <p>
                        <span style={{ color: 'green' }}>
                          <b>
                            {' '}
                            <b>Blockchain-Enabled Traceability:</b>
                          </b>
                        </span>{' '}
                        Say goodbye to opaque supply chains. We utilize
                        blockchain technology to offer complete transparency and
                        traceability throughout the sourcing process. You'll
                        have real-time insights into product origin, ethical
                        sourcing practices, and environmental impact.
                      </p>
                    </li>
                    <li data-aos="fade-up-right">
                      <i className="fa-solid fa-check" />
                      <p>
                        <span style={{ color: 'green' }}>
                          <b>
                            {' '}
                            <b>Dynamic Price Negotiation:</b>
                          </b>
                        </span>{' '}
                        Static quotes are a thing of the past. Our dynamic
                        negotiation platform analyzes market fluctuations and
                        supplier behavior in real-time, securing the best
                        possible prices for your needs. This translates to
                        significant cost savings and improved profitability.
                      </p>
                    </li>
                    <li data-aos="fade-up-left">
                      <i className="fa-solid fa-check" />
                      <p>
                        <span style={{ color: 'green' }}>
                          <b>
                            <b>Predictive Demand Forecasting: </b>
                          </b>
                        </span>
                        Don't get caught off guard by stockouts or overstock. We
                        employ advanced analytics to predict future demand
                        fluctuations, allowing you to optimize inventory
                        management and avoid costly disruptions.
                        <br />
                        <br />
                      </p>
                    </li>
                    <li data-aos="fade-down">
                      <i className="fa-solid fa-check" />
                      <p>
                        <span style={{ color: 'green' }}>
                          {' '}
                          <b>
                            <b>Augmented Reality Product Inspection: </b>
                          </b>
                        </span>
                        Distance is no barrier to quality control. Our
                        innovative AR technology allows remote inspections of
                        products at supplier locations, ensuring consistent
                        quality standards and minimizing the risk of defects.
                        <br />
                        <br />
                      </p>
                    </li>
                    <li data-aos="fade-up-right">
                      <i className="fa-solid fa-check" />
                      <p>
                        <span style={{ color: 'green' }}>
                          {' '}
                          <b>
                            <b>Circular Economy Integration: </b>
                          </b>
                        </span>
                        Sustainability is at our core. We integrate circular
                        economy principles into our sourcing strategies,
                        favouring responsible materials, promoting product
                        lifecycles, and facilitating environmentally conscious
                        practices throughout the supply chain.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* Innovation End */}
          </>

          <section className="cta-section">
            <div className="container">
              <div className="row align-items-center" data-aos="fade-left">
                <div className="col-lg-7">
                  <div className="cta-data">
                    <h2>Ready to work together?</h2>
                    <p>
                      Let's collaborate to streamline your procurement process
                      and achieve your business goals. We're ready when you are.
                    </p>
                    <a
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                      className="theme-btn"
                    >
                      Build a Project <i className="fa-solid fa-angles-right" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="cta-data">
                    <figure>
                      <img
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/work_together.png"
                        // src="/assets/images/work_together.png"
                        // src="https://winsfolio.net/html/builty/assets/images/building-2.png"
                        alt="Building-2 Pic"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </>
    </>
  );
};

export default CoreValues;
