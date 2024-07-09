import { useEffect, useRef } from 'react';

const ActivityTwo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* =========================================================== */}

      {/* =========================================================== */}

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
                  Trading Of Electronics Components
                  {/* Trading Of Electronics Components – Importing */}
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

      {/*============================================================== */}

      <div
        className=""
        style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
      />

      <div
        // className="container"
        data-aos="zoom-in"
        style={{
          display: 'flex',
          justifyContent: 'center',
          objectFit: 'cover',
          marginTop: '30px',
        }}
      >
        <img
          // src="assets/svg4/Electronic Components 1.svg"
          src="https://s3.ap-south-1.amazonaws.com/omdys.com/Electronic+Components+2.svg"
          alt=""
          // width={'100%'}
          // height={'500px'}
        />
      </div>
      <section
        className="gap innovation"
        style={{ marginTop: '-5%', marginBottom: '-7%' }}
      >
        <div className="heading">
          <div className="container" style={{ textAlign: '' }}>
            <p
              style={{
                fontSize: '18px',
                textAlign: 'justify',
                // color: 'red',
                margin: 0,
                padding: 0,
                whiteSpace: 'normal',
                wordBreak: 'break-all',
                lineHeight: '1.5',
                wordSpacing: '0.5px',
                hyphens: 'auto',
              }}
            >
              Welcome to our Electronics Components Sourcing wing, your one-stop
              destination for all your electronic component needs. We specialize
              in sourcing and trading a wide range of electronic components to
              meet the diverse requirements of our clients.
            </p>
            <br />
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
              At OMDYS International LLP, we understand the critical role that
              electronic components play in today's technology-driven world.
              Whether you are a small-scale electronics hobbyist or a
              large-scale manufacturer, we have the products and services to
              support your projects and businesses.
            </p>
          </div>
          <br />
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="proj-data">
                <h1 className="mt-4">
                  <a href="" style={{ color: 'black' }}>
                    Our Product Range
                  </a>
                </h1>
              </div>
              <div className="container">
                <p
                  className="twop m-4"
                  style={{
                    fontSize: '18px',
                    textAlign: 'center',
                  }}
                >
                  At OMDYS International LLP, we offer an extensive range of
                  electronic components to cater to diverse needs and
                  applications.Our product catalogue:
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <ul>
              <li style={{ overflow: '' }} data-aos="fade-up-right">
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      Integrated Circuits (ICs)
                    </p>
                    <br />
                    <b>{/* <b> Integrated Circuits (ICs):</b> */}</b>
                  </span>{' '}
                  From microcontrollers to application-specific ICs, we carry a
                  wide variety of integrated circuits from leading
                  manufacturers.
                  <br />
                  <br />
                </p>
              </li>
              <li data-aos="fade-down">
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      Passive Components
                    </p>
                    <br />
                    <b> {/* <b> Passive Components:</b> */}</b>
                  </span>{' '}
                  Our selection of passive components includes resistors,
                  capacitors, inductors, and filters to support various circuit
                  designs and applications.
                </p>
              </li>
              <li data-aos="fade-up-left">
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '13%',
                      }}
                    >
                      Active Components
                    </p>
                    <br />
                    <b> {/* <b>Active Components:</b> */}</b>
                  </span>{' '}
                  We stock a comprehensive range of active components such as
                  transistors, diodes, thyristors, and voltage regulators to
                  meet your requirements for signal processing and
                  amplification.
                </p>
              </li>
              <li data-aos="fade-up-right">
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '10%',
                      }}
                    >
                      Connectors and Cables
                    </p>
                    <br />
                    <b>{/* <b>Connectors and Cables: </b> */}</b>
                  </span>
                  Whether you need standard connectors or custom cable
                  assemblies, we offer a diverse range of connectors, cables,
                  and harnesses for seamless integration into your projects.
                  <br />
                  <br />
                </p>
              </li>
              <li data-aos="fade-down">
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '12%',
                      }}
                    >
                      Sensors and Modules
                    </p>
                    <br /> <b>{/* <b>Sensors and Modules: </b> */}</b>
                  </span>
                  Explore our selection of sensors and sensor modules for
                  measuring and monitoring various environmental parameters,
                  including temperature, humidity, pressure, and motion.
                  <br />
                  <br />
                </p>
              </li>
              <li data-aos="fade-up-left">
                <i className="fa-solid fa-check" />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      LEDs and Displays
                    </p>{' '}
                    <br />
                    <b>{/* <b> LEDs and Displays: </b> */}</b>
                  </span>
                  Illuminate your projects with our selection of LEDs, LCD
                  displays, OLED displays, and segment displays available in
                  different sizes, colors, and configurations.
                </p>
              </li>
              <li data-aos="fade-up-right">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '40px' }}
                />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      Power Supplies and Batteries
                    </p>{' '}
                    <br />
                    <b>{/* <b> Power Supplies and Batteries: </b> */}</b>
                  </span>
                  Ensure reliable power delivery with our range of power
                  supplies, batteries, chargers, and DC-DC converters designed
                  for diverse applications.
                </p>
              </li>
              <li data-aos="fade-down">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '40px' }}
                />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      Switches and Relays
                    </p>{' '}
                    <br />
                    <b>{/* <b> Switches and Relays: </b> */}</b>
                  </span>
                  Find the right switches, relays, and contactors for your
                  control and automation needs, including tactile switches,
                  rocker switches, and electromechanical relays
                </p>
              </li>
              <li data-aos="fade-up-left">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '40px' }}
                />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '5%',
                      }}
                    >
                      Semiconductors
                    </p>{' '}
                    <br />
                    <b>{/* <b> Semiconductors: </b> */}</b>
                  </span>
                  Browse through our collection of discrete semiconductors,
                  including power MOSFETs, IGBTs, Schottky diodes, and voltage
                  regulators, for efficient power management and control.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*============================================================== */}
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
                    <h3>Our Commitment to Quality</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      At OMDYS International LLP, we understand the importance
                      of quality and reliability in electronic components.
                      That's why we source our products from reputable
                      manufacturers and authorized distributors known for their
                      commitment to excellence and adherence to industry
                      standards.
                      <br />
                      <br />
                      Before adding any product to our catalog, our team of
                      experts conducts rigorous quality assurance checks to
                      ensure that each component meets our stringent criteria
                      for performance, reliability, and durability.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Contact Us</h3>
                    <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                      Ready to experience the difference with OMDYS
                      International, Get in touch with us today to discuss your
                      requirements, request a quote, or learn more about our
                      products and services. Our dedicated team is here to
                      assist you every step of the way and help you find the
                      perfect electronic components for your projects and
                      productions.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/svg4/petroleum and petrochemical products (2).svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/contact_ann.png"
                        // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
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
      {/*============================================================== */}
    </>
  );
};

export default ActivityTwo;
