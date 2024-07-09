const About = () => {
  return (
    <>
      <section className="gap no-top about-style-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-data-left">
                <figure>
                  <img
                    // src="https://winsfolio.net/html/builty/assets/images/about-one.png"
                    // src="assets/svg2/2.svg"
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/2.svg"
                    alt="About One"
                  />
                </figure>
                <figure className="about-image">
                  <img
                    // src="https://winsfolio.net/html/builty/assets/images/about-two.png"
                    // src="assets/svg3/Second Page 265x325.svg"
                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/Second+Page+265x325.svg"
                    alt="About Two"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-data-right">
                <span>Welcome to Our Company</span>
                <h2>
                  THINK BEYOND BORDERS, AND TRADE WITH TRUST. YOUR&nbsp;
                  <nobr>MULTI-FUNCTIONAL</nobr> GATEWAY{' '}
                  <span
                    style={{
                      color: 'red',
                      fontWeight: 'inherit',
                      fontSize: 'inherit',
                    }}
                  >
                    –OMDYS
                  </span>
                </h2>
                {/* <h2>
                  THINK BEYOND BORDERS, AND TRADE WITH TRUST. YOUR
                  MULTI-FUNCTIONAL GATEWAY. – OMDYS
                </h2> */}
                <div className="about-info">
                  {/* <p style="font-size: 14px"> */}
                  <p style={{ textAlign: 'justify' }}>
                    Omdys International LLP, headquartered in Hosur, a
                    significant industrial hub in South India, is a conglomerate
                    involved in various business sectors. We are a trading
                    company that prides itself on its commitment to quality,
                    compliance, and customer satisfaction. You can describe us
                    as “A multi-functional trading company that you can trust”.
                    Our company is ISO-certified and registered under MSME
                    (Micro, Small, and Medium Enterprises), UDHYAM, and Start-Up
                    India.
                    <br />
                    We hold an Export-Import license, enabling us to conduct
                    international trade efficiently and legally. This allows us
                    to source high-quality products from around the globe and
                    deliver them to our customers.
                    <br />
                    Our team is dedicated to providing excellent customer
                    service and ensuring that our client's needs are met
                    promptly and efficiently. We believe in building long-term
                    relationships with our clients based on trust, transparency,
                    and mutual growth
                    <br />
                    <br />
                    <span style={{ textAlign: 'end', opacity: '0.7' }}>
                      <h4>- Chairman</h4>
                      {/* <h4>OMDYS </h4> */}
                      <h4>OMDYS Group of Companies </h4>
                    </span>
                  </p>
                  {/* <figure>
                    <img
                      src="https://winsfolio.net/html/builty/assets/images/signature.png"
                      alt="Signature"
                    />
                  </figure> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
