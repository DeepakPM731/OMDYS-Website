import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <>
      <section className="gap project-style-one light-bg-color">
        <div className="heading">
          <figure>
            <img src="assets/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>TESTIMONIALS</span>
          <h2>Client’s Reviews</h2>
        </div>
        <div className="container">
          <div className="row project-slider owl-carousel">
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    // src="https://winsfolio.net/html/builty/assets/images/project-img-2.jpg"
                    // src="assets/images/user_default3.png"
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Printing+Solutions.svg"
                    alt="project-img-1"
                    width={'300px'}
                    height={'200px'}
                  />
                </figure>
                <Link to={''}>
                  <div className="project-data">
                    <h3>
                      <Link to={''}>
                        <a href="">Vipin P Varghese</a>
                      </Link>
                    </h3>
                    <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      - Managing Director Kattoorans Engineering and Services
                    </h6>
                    <p>
                      "We've been partnering with the management team for years
                      and their commitment to quality and service is unmatched.
                      We wish you all the very best for their new venture OMDYS
                      International LLP "
                    </p>
                    <Link to={''}>
                      <a className="project-icon" href="">
                        {/* <i className="fa-solid fa-angles-right" /> */}
                      </a>
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Electronic+Components+1.svg"
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Electronic+Components+2.svg"
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    // src="assets/svg4/Electronic Components 1.svg"
                    alt="project-img-1"
                    width={'300px'}
                    height={'200px'}
                  />
                </figure>
                <Link to={''}>
                  <div className="project-data">
                    <h3>
                      <Link to={''}>
                        <a href="project-detail.html">Mr Syed Asad </a>
                      </Link>
                    </h3>
                    <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      - Director Infra Structure Solutions
                    </h6>
                    <p>
                      "Their diverse product range and efficient logistics
                      helped us complete our project on time and within budget."
                    </p>
                    <Link to={''}>
                      <a className="project-icon" href="">
                        {/* <i className="fa-solid fa-angles-right" />
                         */}
                      </a>
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    // src="https://winsfolio.net/html/builty/assets/images/project-img-1.jpg"
                    // src="assets/svg4/industrial construction tools and equipment (3).svg"
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/industrial+construction+tools+and+equipment+(3).svg"
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    alt="project-img-2"
                    width={'300px'}
                    height={'200px'}
                  />
                </figure>
                <Link to={''}>
                  <div className="project-data">
                    <h3>
                      <Link to={''}>
                        <a href="javascript:void(0)">Vipin P Varghese</a>
                      </Link>
                    </h3>
                    <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      - Managing Director Kattoorans Engineering and Services
                    </h6>
                    <p>
                      "We've been partnering with the management team for years
                      and their commitment to quality and service is unmatched.
                      We wish you all the very best for their new venture OMDYS
                      International LLP "
                    </p>
                    <Link to={''}>
                      <a className="project-icon" href="#">
                        {/* <i className="fa-solid fa-angles-right" /> */}
                      </a>
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    // src="assets/svg4/petroleum and petrochemical products (2).svg"
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    alt="project-img-1"
                    width={'300px'}
                    height={'200px'}
                  />
                </figure>
                <Link to={''}>
                  <div className="project-data">
                    <h3>
                      <Link to={''}>
                        <a href="project-detail.html">Mr Syed Asad Director</a>
                      </Link>
                    </h3>
                    <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      - Infra Structure Solutions
                    </h6>
                    <p>
                      "Their diverse product range and efficient logistics
                      helped us complete our project on time and within budget."
                    </p>
                    <Link to={''}>
                      <a className="project-icon" href="#">
                        {/* <i className="fa-solid fa-angles-right" /> */}
                      </a>
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    // src="assets/svg4/Medical PPE 1.svg"
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    alt="project-img-2"
                    width={'300px'}
                    height={'200px'}
                  />
                </figure>
                <Link to={''}>
                  <div className="project-data">
                    <h3>
                      <Link to={''}>
                        <a href="javascript:void(0)">Vipin P Varghese</a>
                      </Link>
                    </h3>
                    <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      - Managing Director – Kattoorans Engineering and Services
                    </h6>
                    <p>
                      "We've been partnering with the management team for years
                      and their commitment to quality and service is unmatched.
                      We wish you all the very best for their new venture OMDYS
                      International LLP "
                    </p>
                    <Link to={''}>
                      <a className="project-icon" href="#">
                        {/* <i className="fa-solid fa-angles-right" /> */}
                      </a>
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Electronic+Components+1.svg"
                    // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Electronic+Components+2.svg"
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/user_default3.png"
                    // src="assets/svg4/Electronic Components 1.svg"
                    alt="project-img-1"
                    width={'300px'}
                    height={'200px'}
                  />
                </figure>
                <Link to={''}>
                  <div className="project-data">
                    <h3>
                      <Link to={''}>
                        <a href="project-detail.html">Mr Syed Asad </a>
                      </Link>
                    </h3>
                    <h6
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        fontWeight: '500',
                      }}
                    >
                      - Director Infra Structure Solutions
                    </h6>
                    <p>
                      "Their diverse product range and efficient logistics
                      helped us complete our project on time and within budget."
                    </p>
                    <Link to={''}>
                      <a className="project-icon" href="">
                        {/* <i className="fa-solid fa-angles-right" /> */}
                      </a>
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    src="assets/svg4/Pulses & Grains.svg"
                    alt="project-img-2"
                  />
                </figure>
                <div className="project-data">
                  <h3>
                    <Link to={'/activity-six'}>
                      <a href="javascript:void(0)">Pulses and Grains</a>
                    </Link>
                  </h3>

                  <Link to={'/activity-six'}>
                    <a className="project-icon" href="#">
                      <i className="fa-solid fa-angles-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    src="https://via.placeholder.com/640x395"
                    alt="project-img-1"
                  />
                </figure>
                <div className="project-data">
                  <h3>
                    <a href="project-detail.html">Life Science Center</a>
                  </h3>
                  <p>
                    This project was successfully completed against an extremely
                    tight programme.
                  </p>
                  <a className="project-icon" href="#">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    src="https://via.placeholder.com/640x395"
                    alt="project-img-2"
                  />
                </figure>
                <div className="project-data">
                  <h3>
                    <a href="javascript:void(0)">Home building renovation</a>
                  </h3>
                  <p>
                    This project was successfully completed against an extremely
                    tight programme.
                  </p>
                  <a className="project-icon" href="#">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
