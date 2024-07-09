import { Link } from 'react-router-dom';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kn4xgji', 'template_6ax7wdj', form.current, {
        publicKey: 'IC9_7chZnJVX9bo8Z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    emailjs
      .sendForm('service_kn4xgji', 'template_49izg1a', e.target, {
        publicKey: 'IC9_7chZnJVX9bo8Z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          toast.success('Subscription Successful!', {
            // position: 'bottom-center',
            position: 'center-right',
            duration: 3000,
            style: {
              width: '200px',
              fontSize: '24px',
              background: 'green',
              color: '#fff',
            },
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <footer className="footer-style-one">
        <Toaster>
          {(t) => (
            <ToastBar
              toast={t}
              style={{
                ...t.style,
                animation: t.visible
                  ? 'custom-enter 3s ease'
                  : 'custom-exit 1s ease',
              }}
            />
          )}
        </Toaster>
        <div className="footer-p-1">
          <div className="container">
            <div className="row">
              <div className="footer-first">
                <div className="footer-logo">
                  <a href="/">
                    <img
                      src="assets/images/OMDYS_LOGO_Horizontal.png"
                      alt="logoo"
                      // width={'253'}
                      // height={'93'}
                      // width={'326'}
                      height={'80'}
                    />
                  </a>
                </div>
                <div className="contact-info d-flex-all">
                  <div className="images d-flex-all justify-content-start">
                    <figure>
                      <img
                        src="https://winsfolio.net/html/builty/assets/images/blog-author-img.jpg"
                        alt="Contact Images"
                      />
                    </figure>
                    <figure>
                      <img
                        src="https://winsfolio.net/html/builty/assets/images/blog-author-img-2.jpg"
                        alt="Contact Images"
                      />
                    </figure>
                  </div>
                  <p>
                    Sales representative <span>(+91) 84310 6789 3</span> free
                    call !
                  </p>
                </div>

                <Link
                  to={'/contact'}
                  className="theme-btn"
                  style={{ alignItems: 'center' }}
                >
                  Place your enquiry <i className="fa-solid fa-angles-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-p-2">
          <div className="container">
            <div className="row" style={{ marginTop: '-3%' }}>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer-col">
                  <h3>Information</h3>
                  <p>
                    OMDYS International LLP is a leading international sourcing
                    and trading company, dedicated to connecting businesses with
                    the best products and suppliers around the world. Contact us
                    today to discuss your sourcing needs and discover how we can
                    help your business thrive in the global marketplace.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer-col">
                  <h3>Contact</h3>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={79}
                        height={94}
                        viewBox="0 0 79 94"
                      >
                        <defs>
                          <clipPath id="clip-location_B">
                            <rect width={79} height={94} />
                          </clipPath>
                        </defs>
                        <g
                          id="location_B"
                          data-name="location B"
                          clipPath="url(#clip-location_B)"
                        >
                          <path
                            id="Path_121"
                            data-name="Path 1"
                            d="M962.855,575.375a3,3,0,0,1-2.1-.861l-26.263-25.826c-11.03-11.993-13.791-27.653-7.492-42a38.334,38.334,0,0,1,34.959-23.117l1.346.009c15.262,0,27.868,8.452,33.722,22.609,6.152,14.878,3.046,31.554-7.912,42.485-.528.555-24.064,25.75-24.064,25.75a3,3,0,0,1-2.129.951Zm-.9-85.8A31.924,31.924,0,0,0,932.49,509.1c-5.313,12.1-2.954,25.342,6.31,35.419l23.963,23.559c15.027-16.085,20.179-21.585,22.274-23.488l-.164-.165c9.233-9.209,11.825-23.318,6.605-35.944a29.677,29.677,0,0,0-28.177-18.9Z"
                            transform="translate(-922.725 -482.15)"
                          />
                          <path
                            id="Path_23"
                            data-name="Path 2"
                            d="M15,6a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-6A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
                            transform="translate(25 26)"
                          />
                        </g>
                      </svg>
                      <p>#614, Phase 10, RK Hudco,Hosur, Tamil Nadu, India.</p>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={40}
                        height={62}
                        viewBox="0 0 40 62"
                      >
                        <defs>
                          <clipPath id="dasdasdasd">
                            <rect width={40} height={62} />
                          </clipPath>
                        </defs>
                        <g id="Mobsdfsdfsdfsdfile" clipPath="url(#dasdasdasd)">
                          <path
                            id="Path_331"
                            data-name="Path 1"
                            d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                            transform="translate(1 1)"
                          />
                          <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                            transform="translate(14 48)"
                          />
                        </g>
                      </svg>
                      <a
                        // href="tel:+91 84310 6789 3"
                        href="https://wa.me/+918431067893"
                        className=""
                        target="_blank"
                        // style={{ textShadow: '2px 2px 5px  black' }}
                      >
                        <p>+91&nbsp;84310&nbsp;6789&nbsp;3</p>
                      </a>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={102}
                        height={93}
                        viewBox="0 0 102 93"
                      >
                        <defs>
                          <clipPath id="clip-Email_B">
                            <rect width={102} height={93} />
                          </clipPath>
                        </defs>
                        <g
                          id="Email_B"
                          data-name="Email B"
                          clipPath="url(#clip-Email_B)"
                        >
                          <path
                            id="Path_1444"
                            data-name="Path 1"
                            d="M969.85,550.4,927.766,528.2l2.8-5.307,39.229,20.7,37.712-20.677,2.885,5.261Z"
                            transform="translate(-918 -492)"
                          />
                          <path
                            id="Path_24"
                            data-name="Path 2"
                            d="M969.562,494.385l48.391,25.361,0,1.818c-.023,17.272-.043,42.814-.012,47.124l.012.024v.709c0,5.426-1.516,9.425-4.508,11.885a10.4,10.4,0,0,1-6.575,2.344l-75.5-.016c-3.557.071-5.965-.931-7.717-2.752-2.4-2.5-3.517-6.391-3.317-11.577l.065-1.194c.116-5.315.029-29.954-.067-46.535l-.011-1.842Zm42.386,28.988-42.411-22.227-43.2,22.238c.189,32.939.239,42.8-.143,46.148l.13.005c-.168,4.351.8,6.309,1.645,7.185a3.342,3.342,0,0,0,2.458.984l76.043-.071a4.65,4.65,0,0,0,3.16-.963c1.517-1.248,2.319-3.754,2.319-7.25h.09C1011.893,566.689,1011.9,557.566,1011.947,523.373Z"
                            transform="translate(-918 -492)"
                          />
                        </g>
                      </svg>
                      <p>
                        <a
                          style={{
                            textDecoration: 'none',
                            color: '#B7B7b7',
                          }}
                          className="mail"
                          href="mailto:sales@omdys.com"
                        >
                          sales@omdys.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer-col">
                  <h3>Newsletter</h3>
                  <p>
                    Signup for our weekly newsletter to get the latest news.
                  </p>
                  <form ref={form} onSubmit={sendEmail}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email."
                    />
                    <button>
                      <i className="fa-solid fa-arrow-up-long" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-p-3 rights" style={{ marginTop: '-5%' }}>
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <p>
                  OMDYS International LLP @ 2024{' '}
                  <a href="https://maitexa.com" target="_blank">
                    {' '}
                    maitexa.com
                  </a>{' '}
                  All rights reserved
                </p>
                <div className="social-medias">
                  <a href="javascript:void(0)">Facebook</a>
                  <a href="javascript:void(0)">Twitter</a>
                  <a href="javascript:void(0)">Linkedin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
