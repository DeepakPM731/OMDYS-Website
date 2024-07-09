import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <>
      <section className="gap project-style-one light-bg-color">
        <div className="heading">
          <figure>
            <img src="assets/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Company Projects</span>
          <h2>Our Main Activities</h2>
        </div>
        <div className="container">
          <div className="row project-slider owl-carousel">
            <div className="col-lg-12">
              <div className="project-post">
                <figure>
                  <img
                    // src="https://winsfolio.net/html/builty/assets/images/project-img-2.jpg"
                    // src="assets/svg4/Printing Solutions.svg"
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/Printing+Solutions.svg"
                    alt="project-img-1"
                  />
                </figure>
                <Link to={'/activity-one'}>
                  <div className="project-data">
                    <h3>
                      <Link to={'/activity-one'}>
                        <a href="">Complete Printing Solutions</a>
                      </Link>
                    </h3>
                    {/* <p>
                    This project was successfully completed against an extremely
                    tight programme.
                  </p> */}
                    <Link to={'/activity-one'}>
                      <a className="project-icon" href="">
                        <i className="fa-solid fa-angles-right" />
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
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/Electronic+Components+2.svg"
                    // src="assets/svg4/Electronic Components 1.svg"
                    alt="project-img-1"
                  />
                </figure>
                <Link to={'/activity-two'}>
                  <div className="project-data">
                    <h3>
                      <Link to={'/activity-two'}>
                        <a href="project-detail.html">Electronics Components</a>
                      </Link>
                    </h3>
                    {/* <p>
                    This project was successfully completed against an extremely
                    tight programme.
                  </p> */}
                    <Link to={'/activity-two'}>
                      <a className="project-icon" href="">
                        <i className="fa-solid fa-angles-right" />
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
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/industrial+construction+tools+and+equipment+(3).svg"
                    alt="project-img-2"
                  />
                </figure>
                <Link to={'/activity-three'}>
                  <div className="project-data">
                    <h3>
                      <Link to={'/activity-three'}>
                        <a href="javascript:void(0)">
                          Industrial Construction Tools and Equipment
                        </a>
                      </Link>
                    </h3>
                    {/* <p>
            This project was successfully completed against an extremely
            tight programme.
          </p> */}
                    <Link to={'/activity-three'}>
                      <a className="project-icon" href="#">
                        <i className="fa-solid fa-angles-right" />
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
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                    alt="project-img-1"
                  />
                </figure>
                <Link to={'/activity-four'}>
                  <div className="project-data">
                    <h3>
                      <Link to={'/activity-four'}>
                        <a href="project-detail.html">
                          Industrial Chemical Products
                        </a>
                      </Link>
                    </h3>
                    {/* <p>
            This project was successfully completed against an extremely
            tight programme.
          </p> */}
                    <Link to={'/activity-four'}>
                      <a className="project-icon" href="#">
                        <i className="fa-solid fa-angles-right" />
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
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                    alt="project-img-2"
                  />
                </figure>
                <Link to={'/activity-five'}>
                  <div className="project-data">
                    <h3>
                      <Link to={'/activity-five'}>
                        <a href="javascript:void(0)">Medical PPE Products</a>
                      </Link>
                    </h3>
                    {/* <p>
            This project was successfully completed against an extremely
            tight programme.
          </p> */}
                    <Link to={'/activity-five'}>
                      <a className="project-icon" href="#">
                        <i className="fa-solid fa-angles-right" />
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

export default Projects;
