import { useEffect } from 'react';

const ActivityFour = () => {
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
                <h2 style={{ textAlign: 'center' }}>
                  Industrial Chemical Products
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

      <div className="container mt-5 mb-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="who-we-are">
              <div>
                {/* <h3 className="mb-5 text-center" style={{ fontSize: '48px' }}>
                  Wide Range of Products
                </h3> */}
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
                  Omdys International LLP is committed to offering comprehensive
                  service support in the oil and gas sector. Our primary focus
                  is on the procurement and distribution of petroleum and
                  petrochemical products to our clientele. We adhere strictly to
                  International Standard working practices in all our business
                  operations. At Omdys International LLP, we believe in building
                  long-term relationships with our clients and look forward to
                  serving you and meeting your Industrial Chemical needs.
                </p>
                <br />
              </div>
              <figure
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img
                  // src="assets/svg4/petroleum and petrochemical products (2).svg"
                  src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                  alt="Our Project One Image 1"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* starts */}
      {/* <section className="gap no-top project-completed our-projects-one"> */}

      {/* ============================================ */}
      <section className="gap innovation" style={{ marginTop: '-5%' }}>
        <div className="heading">
          <br />
          <div className="row align-items-center">
            <div className="col-lg-12"></div>
          </div>
        </div>

        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Chemical Products</h2>
          <br />
          <div className="row">
            <ul>
              <li style={{ overflow: '' }} data-aos="fade-down">
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
              <li data-aos="fade-up">
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
              <li data-aos="fade-up">
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
              <li data-aos="fade-up">
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
      {/* ============================================ */}

      <section className="gap innovation" style={{ marginTop: '-12%' }}>
        <div className="heading">
          <br />
          <div className="row align-items-center">
            <div className="col-lg-12"></div>
          </div>
        </div>

        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Petroleum Products</h2>
          <div className="container">
            <p
              className="twop m-4"
              style={{
                fontSize: '18px',
                textAlign: 'center',
                // margin: 0,
                // padding: 0,
                // whiteSpace: 'normal',
                // wordBreak: 'break-all',
                // lineHeight: '1.5',
                // wordSpacing: '0.5px',
                // hyphens: 'auto',
              }}
            >
              We offer a wide range of petroleum products, including crude oil,
              gasoline, diesel, jet fuel, and heating oil. Our products are
              sourced from reliable suppliers,
              <nobr>ensuring quality and consistency.</nobr>
            </p>
            <br />
            <p style={{ fontSize: '20px', textAlign: 'center' }}>
              <b>
                Here is a list of major materials that we can provide / supply
                to you:
              </b>
            </p>
            <br />
          </div>
          <div className="row">
            <ul>
              <li style={{ overflow: '' }} data-aos="fade-down">
                <i className="fa-solid fa-check" style={{ marginTop: '5px' }} />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        // marginTop: '1%',
                      }}
                    >
                      Drilling Equipment
                    </p>
                    <br />
                    <b>{/* <b> Integrated Circuits (ICs):</b> */}</b>
                  </span>{' '}
                  This includes drill pipes, drill collars, and drilling bits.
                  <br />
                  <br />
                </p>
              </li>
              <li data-aos="fade-up">
                <i className="fa-solid fa-check" style={{ marginTop: '5px' }} />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '7%',
                      }}
                    >
                      Safety Equipment
                    </p>
                    <br />
                    <b> {/* <b> Passive Components:</b> */}</b>
                  </span>{' '}
                  Personal Protective Equipment (PPE) such as helmets, safety
                  shoes, gloves, and safety harnesses are essential for the
                  safety of the workers.
                </p>
              </li>
              <li data-aos="fade-down">
                <i className="fa-solid fa-check" style={{ marginTop: '5px' }} />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '-8%',
                      }}
                    >
                      Valves and Pumps
                    </p>
                    <br />
                    <b> {/* <b>Active Components:</b> */}</b>
                  </span>{' '}
                  These are used for controlling the flow of oil and gas in the
                  refinery or rig.
                </p>
              </li>
              <li data-aos="fade-down">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '10px' }}
                />
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
                      Pipes and Tubing
                    </p>
                    <br />
                    <b>{/* <b>Connectors and Cables: </b> */}</b>
                  </span>
                  These are used for transporting oil and gas from the well to
                  the processing facilities.
                  <br />
                  <br />
                </p>
              </li>
              <li data-aos="fade-up">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '12px' }}
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
                      Seals and Gaskets
                    </p>
                    <br /> <b>{/* <b>Sensors and Modules: </b> */}</b>
                  </span>
                  These are used to prevent leaks in the various equipment and
                  piping systems.
                  <br />
                  <br />
                </p>
              </li>
              <li data-aos="fade-down">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '12px' }}
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
                      Catalysts
                    </p>{' '}
                    <br />
                    <b>{/* <b> LEDs and Displays: </b> */}</b>
                  </span>
                  These are used in various refining processes to speed up
                  chemical reactions.
                </p>
              </li>
              <li data-aos="fade-down">
                <i
                  className="fa-solid fa-check"
                  style={{ marginTop: '10px' }}
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
                      Chemicals
                    </p>{' '}
                    <br />
                    <b>{/* <b> Power Supplies and Batteries: </b> */}</b>
                  </span>
                  Various chemicals are used in the drilling process, for
                  treating oil and gas, and for maintaining equipment
                </p>
              </li>
              <li data-aos="fade-up">
                <i className="fa-solid fa-check" style={{ marginTop: '5px' }} />
                <p>
                  <span style={{ color: 'green' }}>
                    <p
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        textAlign: 'center',
                        color: 'green',
                        marginTop: '-4%',
                      }}
                    >
                      Electrical Equipment
                    </p>{' '}
                    <br />
                    <b>{/* <b> Switches and Relays: </b> */}</b>
                  </span>
                  This includes generators, motors, cables, and lighting
                  equipment.
                </p>
              </li>
              <li data-aos="fade-down">
                <i className="fa-solid fa-check" style={{ marginTop: '5px' }} />
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
                      Instrumentation Equipment
                    </p>{' '}
                    <br />
                    <b>{/* <b> Semiconductors: </b> */}</b>
                  </span>
                  Instruments for measuring pressure, temperature, flow rate,
                  and other parameters are crucial for the safe and efficient
                  operation of the refinery or rig.
                </p>
              </li>
              {/* <div className="container"> */}
              <p
                className="twop m-4"
                style={{ fontSize: '16px', textAlign: 'center' }}
              >
                Please note that the specific materials required can vary
                depending on the type of refinery or rig, the nature of the
                operations, and the specific requirements of the project.
              </p>
              {/* </div> */}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      <div style={{ marginTop: '-6%' }}>
        <section className="gap no-top core-values">
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="container">
              <h3
                className="mb-5 mt-5 text-center"
                style={{ fontSize: '46px' }}
              >
                Petrochemical Products
              </h3>
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
                Our portfolio of petrochemical products includes ethylene,
                propylene, butadiene, and aromatics. These are essential raw
                materials for a variety of industries, including plastics,
                rubber, and synthetic fibers.
              </p>
              <br />
              <p style={{ fontSize: '20px', textAlign: 'center' }}>
                <b>
                  Here is a list of common materials required for Petrochemical
                  companies:
                </b>
              </p>
              {/* <br /> */}
              {/* <div className="row"> */}
              <ul>
                <li data-aos="fade-down">
                  <div className="data">
                    <h3> Catalysts</h3>
                    <p>
                      Catalysts are substances that speed up chemical reactions
                      without being consumed in the process. They are crucial in
                      many petrochemical processes.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/svg4/Medical PPE 1.svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li data-aos="fade-left">
                  <div className="image">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Chemicals</h3>
                    <p>
                      A variety of chemicals are used in the petrochemical
                      industry for various processes. These include acids,
                      bases, solvents, and salts.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-down">
                  <div className="data">
                    <h3>Pipes and Valves</h3>
                    <p>
                      These are used for transporting raw materials,
                      intermediates, and finished products within the plant.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Tanks and Vessels</h3>
                    <p>
                      These are used for storing raw materials, intermediates,
                      and finished products.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Safety Equipment</h3>
                    <p>
                      Personal Protective Equipment (PPE) such as helmets,
                      safety shoes, gloves, and safety harnesses are essential
                      for the safety of the workers.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="image" data-aos="fade-right">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Instrumentation Equipment</h3>
                    <p>
                      Instruments for measuring pressure, temperature, flow
                      rate, and other parameters are crucial for the safe and
                      efficient operation of the plant.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <h3>Maintenance Supplies</h3>
                    <p>
                      These include tools, lubricants, gaskets, seals, and
                      cleaning supplies.
                    </p>
                  </div>
                  <div className="image" data-aos="fade-left">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
              {/* </div> */}
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================= */}

      <section className=" no-top project-completed our-projects-one">
        {/* <div className="prj-post mb-2">
          <div className="container">
            <h3 className="mb-5 mt-5 text-center" style={{ fontSize: '48px' }}>
              Petroleum Products
            </h3>
            <p style={{ fontSize: '20px' }}>
              We offer a wide range of petroleum products, including crude oil,
              gasoline, diesel, jet fuel, and heating oil. Our products are
              sourced from reliable suppliers, ensuring quality and consistency.
            </p>
            <br />

            <p>
              <b>
                Here is a list of major materials that we can provide / supply
                to you:
              </b>
            </p>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  

                  <div
                    className="loc-date"
                    style={{
                      height: '',
                      display: 'flex',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <ol style={{ listStyle: 'none', float: 'left' }} type="1">
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            1. Drilling Equipment:{' '}
                          </b>{' '}
                          This This includes drill pipes, drill collars, and
                          drilling bits
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>2. Safety Equipment: </b>{' '}
                          Personal Protective Equipment (PPE) such as helmets,
                          safety shoes, gloves, and safety harnesses are
                          essential for the safety of the workers.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>3. Valves and Pumps: </b>{' '}
                          These are used for controlling the flow of oil and gas
                          in the refinery or rig.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>4. Pipes and Tubing:</b>{' '}
                          These are used for transporting oil and gas from the
                          well to the processing facilities.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}> 5. Seals and Gaskets</b>{' '}
                          These are used to prevent leaks in the various
                          equipment and piping systems.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>6. Catalysts: </b> These
                          are used in various refining processes to speed up
                          chemical reactions.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>7. Chemicals: </b> Various
                          chemicals are used in the drilling process, for
                          treating oil and gas, and for maintaining equipment
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            8. Electrical Equipment:{' '}
                          </b>{' '}
                          This includes generators, motors, cables, and lighting
                          equipment.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            9. Instrumentation Equipment:{' '}
                          </b>{' '}
                          Instruments for measuring pressure, temperature, flow
                          rate, and other parameters are crucial for the safe
                          and efficient operation of the refinery or rig.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure>
                    <img
                      src="assets/svg4/petroleum and petrochemical products (2).svg"
                      alt="Our Project One Image 1"
                    />
                  </figure>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                Please note that the specific materials required can vary
                depending on the type of refinery or rig, the nature of the
                operations, and the specific requirements of the project.
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="prj-post mb-2">
          <div className="container">
            <h3 className="mb-5 mt-5 text-center" style={{ fontSize: '48px' }}>
              PETROCHEMICAL PRODUCTS
            </h3>
            <p style={{ fontSize: '20px' }}>
              Our portfolio of petrochemical products includes ethylene,
              propylene, butadiene, and aromatics. These are essential raw
              materials for a variety of industries, including plastics, rubber,
              and synthetic fibers.
            </p>
            <br />
            <p>
              <b>
                Here is a list of common materials required for Petrochemical
                companies:
              </b>
            </p> */}
        {/* <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data"> */}
        {/* <h3 className="mt-4">
                    <a href="project-detail.html">
                      Here is a list of major materials that we can provide /
                      supply to you:
                    </a>
                  </h3> */}
        {/* <p>
                    We provide high-quality eco-solvent inks that are perfect
                    for a wide range of printing tasks. Our inks ensure vibrant
                    colors and excellent adhesion on various media types.
                  </p> */}

        {/* ----------------------- */}

        {/* ----------------------- */}

        {/* <div
                    className="loc-date"
                    style={{
                      height: '',
                      display: 'flex',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <ol style={{ listStyle: 'none', float: 'left' }} type="1">
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>1. Catalysts: </b>{' '}
                          Catalysts are substances that speed up chemical
                          reactions without being consumed in the process. They
                          are crucial in many petrochemical processes.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>2. Chemicals: </b> A
                          variety of chemicals are used in the petrochemical
                          industry for various processes. These include acids,
                          bases, solvents, and salts.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>3. Pipes and Valves: </b>{' '}
                          These are used for transporting raw materials,
                          intermediates, and finished products within the plant.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>4. Tanks and Vessels: </b>{' '}
                          These are used for storing raw materials,
                          intermediates, and finished products.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}> 5. Safety Equipment: </b>{' '}
                          Personal Protective Equipment (PPE) such as helmets,
                          safety shoes, gloves, and safety harnesses are
                          essential for the safety of the workers.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            6. Instrumentation Equipment:{' '}
                          </b>{' '}
                          Instruments for measuring pressure, temperature, flow
                          rate, and other parameters are crucial for the safe
                          and efficient operation of the plant.
                        </li>
                        <li style={{ fontSize: '24px' }}>
                          <b style={{ color: 'red' }}>
                            7. Maintenance Supplies:{' '}
                          </b>{' '}
                          These include tools, lubricants, gaskets, seals, and
                          cleaning supplies.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure>
                    <img
                      src="assets/svg4/petroleum and petrochemical products.svg"
                      alt="Our Project One Image 1"
                    />
                  </figure>
                </div>
              </div>
              <p className="m-4" style={{ fontSize: '20px' }}>
                Please note that the specific materials required can vary
                depending on the type of petrochemical processes being carried
                out, the nature of the operations, and the specific requirements
                of the project.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="prj-post">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3>
                    <a href="project-detail.html">Media Supplies</a>
                  </h3>
                  <p>
                    Our range of media supplies includes everything from vinyl,
                    and canvas, to banner materials. These are specially
                    designed to work with eco-solvent inks, ensuring
                    high-quality prints every time.
                  </p>
                 
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure>
                    <img
                      src="assets/svg/3.svg"
                      alt="Our Project One Image 2"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="prj-post mb-2" style={{ marginTop: '-7.6rem' }}>
          <div className="container">
            <div className="row align-items-center" data-aos="fade-left">
              <div className="col-lg-6">
                <div className="proj-data" style={{ marginTop: '1rem' }}>
                  <h3 className="mt-4">
                    <a href="Javascript:void(0)">Quality Assurance</a>
                  </h3>
                </div>
              </div>
              <div className="container">
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
                  We are committed to providing high-quality products. All the
                  Industrial Chemical products that are supplied by us undergo
                  rigorous quality checks to ensure they meet the highest
                  standards.
                </p>
              </div>
            </div>
            <div className="row align-items-center" data-aos="fade-right">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="Javascript:void(0)">Competitive Pricing</a>
                  </h3>
                </div>
              </div>
              <div className="container">
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
                  We understand the importance of cost-effectiveness in your
                  business. That’s why we offer our products at competitive
                  prices, ensuring you get the best value for your money.
                </p>
              </div>
            </div>
            <div className="row align-items-center" data-aos="fade-left">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="Javascript:void(0)">Timely Delivery</a>
                  </h3>
                </div>
              </div>
              <div className="container">
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
                  We have efficient logistics in place to ensure timely delivery
                  of your orders. We understand that in your business, time is
                  of the essence.
                </p>
              </div>
            </div>
            <div className="row align-items-center" data-aos="fade-right">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3 className="mt-4">
                    <a href="Javascript:void(0)">Customer Support</a>
                  </h3>
                </div>
              </div>
              <div className="container">
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
                  Our dedicated customer support team is always ready to assist
                  you with any queries or issues. We strive to provide excellent
                  customer service and ensure your satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div>
        </div> */}
      </section>
    </>
  );
};

export default ActivityFour;
