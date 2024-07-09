import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <section className="gap renovation">
        <div
          className="parallax"
          style={{
            backgroundImage: 'url("/assets/images/bg_contact4.png")',
            // 'url("https://winsfolio.net/html/builty/assets/images/reno-img.jpg")',
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="reno-data">
                <h3 style={{ marginBottom: '20px' }}>Our Business </h3>
                <h2 style={{ fontSize: '80px' }}>Starts Here</h2>
                <div>
                  {/* <h1 style={{ color: 'white', fontSize: 45 }}>
                    Get a free quote!
                  </h1>
                  <br />
                  <h2 style={{ color: 'white', fontSize: 30 }}>
                    Explore our products
                  </h2>
                  <br />
                  <h2 style={{ color: 'white', fontSize: 25 }}>
                    Contact us today
                  </h2> */}
                  {/* <h4
                    style={{
                      fontSize: '35px',
                      color: 'white',
                      fontWeight: '600',
                    }}
                  >
                    Place Your Enquiry
                  </h4> */}
                </div>
                <div className="bbtn">
                  <figure>
                    <img
                      className="w-auto circle-layer"
                      src="assets/images/circle-text.png"
                      alt="Circle Text"
                    />
                  </figure>
                  <Link to={'/contact'}>
                    {/* <a
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    > */}
                    <i className="fa-solid fa-arrow-up-long" />
                    {/* </a> */}
                  </Link>
                </div>
                <Link to={'/contact'}>
                  <h4
                    style={{
                      fontSize: '35px',
                      color: 'white',
                      fontWeight: '600',
                      marginTop: '50px',
                    }}
                  >
                    Place Your Enquiry
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
