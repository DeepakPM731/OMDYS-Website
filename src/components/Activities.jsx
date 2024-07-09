import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Activities = () => {
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
      {/* Banner Style One Start */}
      <section className="banner-style-one">
        <div
          className="parallax"
          style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
        />
        <div className="container">
          <div className="row">
            <div className="banner-details">
              <h2>Our Main Activities</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                repudiandae doloremque fugit nulla modi eaque commodi laborum
                inventore quasi in?
              </p>
            </div>
          </div>
        </div>
        {/* <div className="breadcrums">
          <div className="container"> */}
        {/* <div className="row">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa-solid fa-house" />
                    <p>Home</p>
                  </a>
                </li>
                <li className="current">
                  <p>Our Main Activities</p>
                </li>
              </ul>
            </div> */}
        {/* </div>
        </div> */}
      </section>
      {/* Banner Style One End */}
      <div style={{ marginTop: '20px' }}>
        <section className="gap no-top core-values">
          <div className="heading">
            <figure>
              <img src="assets/images/heading-icon.png" alt="Heading Icon" />
            </figure>
            <span>Our Main </span>
            <h2>Activities</h2>
          </div>
          <div className="container">
            <div className="row">
              <ul style={{ marginBottom: '-8%' }}>
                <li data-aos="zoom-in-up">
                  <div className="data">
                    <h3> Trading of complete printing solutions – Importing</h3>
                    <p>
                      We provide a wide range of printing solutions, customized
                      to meet various printing needs.
                      {/* <Link to={'/activity-one'}> */}
                      <a href="/activity-one">( Read More )</a>
                      {/* </Link> */}
                    </p>
                  </div>
                  <div className="image">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/svg4/Printing Solutions.svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Printing+Solutions.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                <li data-aos="zoom-in-up">
                  <div className="image">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/svg4/Electronic Components 1.svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Electronic+Components+2.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Trading of Electronics components – Importing</h3>
                    <p>
                      We partner with leading manufacturers to deliver reliable
                      and authentic electronic components for diverse
                      applications. {/* <Link to={'/activity-two'}> */}
                      <a href="/activity-two">( Read More )</a>
                      {/* </Link> */}
                    </p>
                  </div>
                </li>
                <li data-aos="zoom-in-up">
                  <div className="data">
                    <h3>
                      Trading of industrial construction tools and equipment
                    </h3>
                    <p>
                      We provide a comprehensive range of certified safety
                      equipment for the construction industry, ensuring worker
                      protection and regulatory compliance.
                      {/* <Link to={'/activity-three'}> */}
                      <a href="/activity-three">( Read More )</a>
                      {/* </Link> */}
                    </p>
                  </div>
                  <div className="image">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/svg4/industrial construction tools and equipment (3).svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/industrial+construction+tools+and+equipment+(3).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                </li>
                {/* <li data-aos="zoom-in-up">
                  <div className="image">
                    <figure>
                      <img
                        className="w-100"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/petroleum+and+petrochemical+products+(2).svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3>Trading of Industrial Chemical products</h3>
                    <p>
                      We offer expertise in exporting specialized petrochemical
                      mechanical products, ensuring safe and efficient project
                      execution.
                      <a href="/activity-four">( Read More )</a>
                    </p>
                  </div>
                </li> */}
                <li data-aos="zoom-in-up">
                  <div className="image">
                    <figure>
                      <img
                        className="w-100"
                        // src="assets/svg4/Medical PPE 1.svg"
                        src="https://s3.ap-south-1.amazonaws.com/omdys.com/Medical+PPE+1.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Trading of medical-PPE – Importing</h3>
                    <p>
                      We import certified medical PPE, meeting the needs of
                      healthcare facilities and professionals.{' '}
                      {/* <Link to={'/activity-five'}> */}
                      <a href="/activity-five">( Read More )</a>
                      {/* </Link> */}
                    </p>
                  </div>
                </li>
                {/* <li>
                  <div className="image">
                    <figure>
                      <img
                        className="w-100"
                        src="assets/svg4/Pulses & Grains.svg"
                        alt="Core Values Image 1"
                      />
                    </figure>
                  </div>
                  <div className="data">
                    <h3> Trading of pulses and grains – Exporting</h3>
                    <p>
                      We source and export premium pulses and grains, adhering
                      to the strictest quality standards and international
                      regulations.
                      <Link to={'/activity-six'}>( Read More )</Link>
                    </p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Activities;
