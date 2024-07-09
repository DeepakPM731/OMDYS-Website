import { useEffect } from 'react';

const ActivityThree = () => {
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

  const styles = {
    height: '250px',
  };
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
                  Tools and Equipment Supply
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
                <h3 className="mb-5 text-center" style={{ fontSize: '48px' }}>
                  Wide Range of Products
                </h3>
                <figure
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    // src="assets/svg4/industrial construction tools and equipment (2).svg"
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/industrial+construction+tools+and+equipment+(3).svg"
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/industrial+construction+tools+and+equipmentimg+(3).png"
                    alt="Our Project One Image 1"
                  />
                </figure>
                <br />
                {/* <p style={{ textAlign: 'justify' }}> */}
                <p
                  style={{
                    fontSize: '18px',
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
                  We offer a broad selection of tools and equipment, ensuring
                  that our customers have the best resources tailored to their
                  unique needs. Our unwavering commitment to quality and
                  customer satisfaction distinguishes us in the industry. We are
                  dedicated to delivering top-tier products and services that
                  enhance our customers’ operations. Our product portfolio
                  includes everything from hand tools, and power tools, to
                  specialized equipment.
                </p>
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

      {/* ============================================================================== */}
      <section className="gap innovation">
        <div className="heading">
          {/* <div className="container" style={{ textAlign: 'justify' }}>
            <p style={{ fontSize: '20px', textAlign: 'justify' }}>
              Welcome to our Electronics Components Sourcing wing, your one-stop
              destination for all your electronic component needs. We specialize
              in sourcing and trading a wide range of electronic components to
              meet the diverse requirements of our clients.
            </p>
            <br />
            <p style={{ fontSize: '20px', textAlign: 'justify' }}>
              At OMDYS International LLP, we understand the critical role that
              electronic components play in today's technology-driven world.
              Whether you are a small-scale electronics hobbyist or a
              large-scale manufacturer, we have the products and services to
              support your projects and businesses.
            </p>
          </div> */}
          {/* <br /> */}
          <div className="row align-items-center" style={{ marginTop: '-5%' }}>
            <div className="col-lg-12">
              <div className="proj-data">
                <h1 className="mb-4">
                  <a href="" style={{ color: 'black' }}>
                    List of tools that we provide:
                  </a>
                </h1>
              </div>
              <div className="container">
                {/* <p className="m-4" style={{ fontSize: '20px' }}>
                  At OMDYS International LLP, we offer an extensive range of
                  electronic components to cater to diverse needs and
                  applications. Our product catalogue includes:
                </p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" style={{ marginBottom: '-8%' }}>
            <ul>
              <li
                style={styles}
                className="ath-innov-ul-li"
                data-aos="fade-up-left"
              >
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        // marginTop: '5%',
                      }}
                    >
                      Hand Tools
                    </p>
                    <br />
                    <b>{/* <b> Integrated Circuits (ICs):</b> */}</b>
                  </span>{' '}
                  This includes hammers, screwdrivers, pliers, wrenches, and
                  tape measures.
                  <br />
                  <br />
                </p>
              </li>
              <li style={styles} data-aos="fade-down">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '20px' }}
                />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        // marginTop: '5%',
                      }}
                    >
                      Power Tools
                    </p>
                    <br />
                    <b> {/* <b> Passive Components:</b> */}</b>
                  </span>{' '}
                  Drills, circular saws, jigsaws, and angle grinders are some
                  examples.
                </p>
              </li>
              <li style={styles} data-aos="fade-up-right">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '20px' }}
                />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        // marginTop: '13%',
                      }}
                    >
                      Gardening Tools
                    </p>
                    <br />
                    <b> {/* <b>Active Components:</b> */}</b>
                  </span>{' '}
                  Shovels, rakes, pruning shears, and garden hoses are typically
                  available.
                </p>
              </li>
              <li style={styles} data-aos="fade-up-left">
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        // marginTop: '10%',
                      }}
                    >
                      Electrical Tools and Supplies
                    </p>
                    <br />
                    <b>{/* <b>Connectors and Cables: </b> */}</b>
                  </span>
                  This includes wire strippers, voltage testers, extension
                  cords, and light bulbs.
                  <br />
                  <br />
                </p>
              </li>
              <li style={styles} data-aos="fade-down">
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        // marginTop: '12%',
                      }}
                    >
                      Plumbing Tools and Supplies
                    </p>
                    <br /> <b>{/* <b>Sensors and Modules: </b> */}</b>
                  </span>
                  Pipe wrenches, pipe cutters, washers, and sealants can be
                  found.
                  <br />
                  <br />
                </p>
              </li>
              <li style={styles} data-aos="fade-up-right">
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '-6%',
                      }}
                    >
                      Safety Equipment
                    </p>{' '}
                    <br />
                    <b>{/* <b> LEDs and Displays: </b> */}</b>
                  </span>
                  Safety glasses, work gloves, earplugs, and hard hats are often
                  sold.
                </p>
              </li>
              <li style={styles} data-aos="fade-up-left">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '20px' }}
                />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        // marginTop: '5%',
                      }}
                    >
                      Fasteners
                    </p>{' '}
                    <br />
                    <b>{/* <b> Power Supplies and Batteries: </b> */}</b>
                  </span>
                  Nails, screws, nuts, and bolts of various sizes are typically
                  available.
                </p>
              </li>
              <li style={styles} data-aos="fade-down">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '20px' }}
                />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        // marginTop: '5%',
                      }}
                    >
                      Building Materials
                    </p>{' '}
                    <br />
                    <b>{/* <b> Switches and Relays: </b> */}</b>
                  </span>
                  This can include items like cement, sand, bricks, and tiles.
                </p>
              </li>
              <li style={styles} data-aos="fade-up-right">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '20px' }}
                />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        // marginTop: '5%',
                      }}
                    >
                      Hardware Accessories
                    </p>{' '}
                    <br />
                    <b>{/* <b> Semiconductors: </b> */}</b>
                  </span>
                  Items such as hinges, handles, hooks, and shelf brackets are
                  usually available.
                </p>
              </li>
            </ul>
            <div className="container" style={{ textAlign: '' }}>
              <p
                className="m-4"
                style={{
                  fontSize: '18px',
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
                Remember, the type of PPE needed can vary depending on the
                specific job and work environment. Always ensure that the PPE is
                appropriate for the task at hand, fits properly, and meets
                industry safety standards. Trust Omdys International Group for
                all your personal protection and safety equipment needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================================================== */}

      {/* starts */}

      {/* ==========-------------========= */}
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
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Remember, the type of PPE needed can vary depending on the
                      specific job and work environment. Always ensure that the
                      PPE is appropriate for the task at hand, fits properly,
                      and meets industry safety standards. Trust Omdys
                      International Group for all your personal protection and
                      safety equipment needs.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Competitive Pricing</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Remember, the type of PPE needed can vary depending on the
                      specific job and work environment. Always ensure that the
                      PPE is appropriate for the task at hand, fits properly,
                      and meets industry safety standards. Trust Omdys
                      International Group for all your personal protection and
                      safety equipment needs.
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
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      We have efficient logistics in place to ensure timely
                      delivery of your orders. We understand that in your
                      business, time is of the essence.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3> Customer Support</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
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
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      We provide training on the use of our tools and equipment.
                      We also offer consultation services to help you choose the
                      right tools and equipment for your specific needs. With
                      our diverse product range, quality assurance, and
                      dedicated support, you’ll be well-equipped to make a
                      significant impact.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* ==========-------------========= */}
    </>
  );
};

export default ActivityThree;
