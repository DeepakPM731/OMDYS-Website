import { useEffect } from 'react';

const ActivityFive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let elements = document.querySelectorAll('[data-aos]');
    for (let i = 0; i < elements.length; i++) {
      //if ios remove the attribute
      if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        elements[i].removeAttribute('data-aos');
      }
    }
  });

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
                <h2 style={{ textAlign: 'center' }}>Trading Of Medical PPE</h2>
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
                  <p
                    style={{
                      fontSize: '20px',
                      textAlign: 'justify',
                      margin: 0,
                      padding: 0,
                      whiteSpace: 'normal',
                      wordBreak: 'break-all',
                      lineHeight: '1.5',
                      wordSpacing: '0.5px',
                      hyphens: 'auto',
                    }}
                  >
                    At OMDYS, we understand the critical importance of personal
                    protective equipment (PPE) in safeguarding frontline workers
                    and healthcare professionals. As a trusted sourcing and
                    trading company, we are committed to providing high-quality
                    medical PPE products to meet the evolving needs of
                    healthcare facilities, government agencies, businesses, and
                    individuals worldwide.
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
        <div
          className="container mb-4"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <figure style={{ position: 'relative', zIndex: 9 }}>
            <img
              className=""
              // src="assets/svg4/Medical PPE 2.svg"
              // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+2.svg"
              src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+22.svg"
              // src="https://winsfolio.net/html/builty/assets/images/about-h-i-w.jpg"
              alt="About How It Works"
            />
          </figure>
        </div>

        <div style={{ marginTop: '20px' }}>
          <section className="gap no-top core-values">
            <div className="container" style={{ marginBottom: '-5%' }}>
              <div className="row">
                <ul>
                  <li>
                    <div className="image" data-aos="fade-right">
                      <figure>
                        <img
                          className="w-100"
                          // src="assets/svg4/petroleum and petrochemical products (2).svg"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/quality_assuranceann.png"
                          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                    <div className="data">
                      <h3>Quality Assurance</h3>
                      <p
                        style={{
                          fontSize: '18px',
                          textAlign: 'justify',
                          // wordSpacing: '-3px',
                        }}
                      >
                        Remember, the type of PPE needed can vary depending on
                        the specific job and work environment. Always ensure
                        that the PPE is appropriate for the task at hand, fits
                        properly, and meets industry safety standards. Trust
                        Omdys International Group for all your medical
                        protection and safety equipment needs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="data">
                      <h3>Competitive Pricing</h3>
                      <p
                        style={{
                          fontSize: '18px',
                          textAlign: 'justify',
                          // wordSpacing: '-3px',
                        }}
                      >
                        Remember, the type of PPE needed can vary depending on
                        the specific job and work environment. Always ensure
                        that the PPE is appropriate for the task at hand, fits
                        properly, and meets industry safety standards. Trust
                        Omdys International Group for all your medical
                        protection and safety equipment needs.
                      </p>
                    </div>
                    <div className="image" data-aos="fade-right">
                      <figure>
                        <img
                          className="w-100"
                          // src="assets/svg4/petroleum and petrochemical products (2).svg"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/pricing.png"
                          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="image" data-aos="fade-left">
                      <figure>
                        <img
                          className="w-100"
                          // src="assets/svg4/Medical PPE 1.svg"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/timely_delivery.png"
                          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                    <div className="data">
                      <h3> Timely Delivery</h3>
                      <p
                        style={{
                          fontSize: '18px',
                          textAlign: 'justify',
                          // wordSpacing: '-4px',
                        }}
                      >
                        We have efficient logistics in place to ensure timely
                        delivery of your orders. We understand that in the
                        medical field, time is of the essence.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="data">
                      <h3> Customer Support</h3>
                      <p
                        style={{
                          fontSize: '18px',
                          textAlign: 'justify',
                          // wordSpacing: '-3px',
                        }}
                      >
                        Our dedicated customer support team is always ready to
                        assist you with any queries or issues. We strive to
                        provide excellent customer service and ensure your
                        satisfaction
                      </p>
                    </div>
                    <div className="image" data-aos="fade-right">
                      <figure>
                        <img
                          className="w-100"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/customer_support.png"
                          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="image" data-aos="fade-left">
                      <figure>
                        <img
                          className="w-100"
                          src="https://s3.ap-south-1.amazonaws.com/omdys.com/training_ann.png"
                          // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                          alt="Core Values Image 1"
                        />
                      </figure>
                    </div>
                    <div className="data">
                      <h3>Training and Consultation</h3>
                      <p
                        style={{
                          fontSize: '18px',
                          textAlign: 'justify',
                          // wordSpacing: '-3px',
                        }}
                      >
                        We provide training on the use of our medical PPE. We
                        also offer consultation services to help you choose the
                        right PPE for your specific needs. With our diverse
                        product range, quality assurance, and dedicated support,
                        you’ll be well-equipped to make a significant impact.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        {/* </div>
        </div> */}
      </section>
    </>
  );
};

export default ActivityFive;
