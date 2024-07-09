import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to manage which accordion is active
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(
    'Select Your Business'
  );

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAccordionToggle = (index, category) => {
    setActiveAccordion(activeAccordion === index ? null : index);
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: '',
    subject: '',
    message: '',
  });
  // division: 'Select Division',

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('Name:', name);
    console.log('Value:', value);
    setFormData({ ...formData, [name]: value });
    // Clear the error message for the current field
    setErrors({ ...errors, [name]: '' });
    console.log(formData);
  };
  useEffect(() => {
    console.log('Form Data:', formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    // if (!formData.phone) {
    //   newErrors.phone = 'Please enter your phone number';
    // }
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter your phone number';
    }
    // else if (!/^\d{10}$/.test(formData.phone)) {
    //   newErrors.phone = 'Phone number must be exactly 10 digits';
    // }
    if (!formData.division) {
      newErrors.division = 'Please select a division';
    }
    // if (!formData.subject) {
    //   newErrors.subject = 'Please enter a subject';
    // }
    if (!formData.message) {
      newErrors.message = 'Please enter your message';
    }
    if (Object.keys(newErrors).length === 0) {
      try {
        const formDatas = new FormData();
        formDatas.append('name', formData.name);
        formDatas.append('email', formData.email);
        formDatas.append('phone', formData.phone);
        formDatas.append('division', formData.division);
        formDatas.append('subject', formData.subject);
        formDatas.append('message', formData.message);

        toast.success(
          'Thank you for your enquiry, Our sales team will contact you soon!',
          {
            // position: 'bottom-center',
            position: 'center-right',
            duration: 3000,
            style: {
              width: '400px',
              fontSize: '24px',
              background: 'green',
              color: '#fff',
            },
          }
        );

        await axios
          .post(
            'https://script.google.com/macros/s/AKfycbxRFJ_4O0aQQRBbx9Msfab75DB9PAvypXfBVYwH_DNfb3vh6R08NpGWU01a3VsWoJpkFA/exec',
            formDatas
          )
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log('Form submitted:', formData);
        emailjs
          .sendForm('service_9kr6uou', 'template_45teqtk1', e.target, {
            publicKey: '_A24ZdcP1Qn1j5x9B',
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
          .sendForm('service_9kr6uou', 'template_apvkpii1', e.target, {
            publicKey: '_A24ZdcP1Qn1j5x9B',
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
        // navigate('/activities');
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <>
        {/* Banner Style One Start */}
        <section className="banner-style-one">
          {/* <Toaster /> */}
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
          ;
          <div
            className="parallax"
            style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
          />
          <div className="container">
            <div className="row">
              <div className="banner-details">
                <h2>Contact Us</h2>
                <p>our values and vaulted us to the top of our industry.</p>
              </div>
            </div>
          </div>
          <div className="breadcrums">
            <div className="container">
              <div className="row">
                <ul>
                  <li>
                    <Link to={'/'}>
                      <i className="fa-solid fa-house" />
                      <p>Home</p>
                    </Link>
                  </li>
                  <li className="current">
                    <p>Contact Us</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Style One End */}
        {/* Contact Form 2 Start */}
        <section className="gap contact-form-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="data">
                  {/* <span>How can we help?</span>
                  <h2>Quality &amp; Passion With Contact Form</h2> */}
                  <span style={{ fontSize: '18px' }}>
                    <b> How can we help?</b>
                  </span>
                  <h2>
                    Welcome - Reach Out to Us with Your Inquiries. We&apos;re
                    Here to Help!
                  </h2>
                  <p>
                    Have questions or want to chat? Fill out our contact form,
                    and we’ll put you in touch with the right people.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-0">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name && 'is-invalid'
                        }`}
                        id="exampleInputText1"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && (
                        <div
                          className="invalid-feedback"
                          style={{ fontSize: '20px' }}
                        >
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="row g-0">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.email && 'is-invalid'
                        }`}
                        id="exampleInputEmail1"
                        name="email"
                        value={formData.email}
                        placeholder="Email Address"
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <div
                          className="invalid-feedback"
                          style={{ fontSize: '20px' }}
                        >
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="row g-0">
                      <input
                        type="number"
                        className={`form-control ${
                          errors.phone && 'is-invalid'
                        }`}
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        id="exampleInputPhone"
                        placeholder="Contact No."
                      />
                      {errors.phone && (
                        <div
                          className="invalid-feedback"
                          style={{ fontSize: '20px' }}
                        >
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    <div
                      className="row g-0"
                      style={{
                        backgroundColor: '#FAFAFA',
                        border: '1px solid #ced4da',
                      }}
                    >
                      <h5
                        className={` ${errors.division && 'is-invalid'}`}
                        style={{
                          color: '#6C757D',
                          fontSize: '1rem',

                          padding: '6px 12px 6px 20px',
                        }}
                      >
                        Select Division:
                      </h5>

                      <div className="form-check">
                        <input
                          className="form-check-input radiobtn"
                          type="radio"
                          name="division"
                          id="division1"
                          value="Complete Printing Solutions"
                          checked={
                            formData.division === 'Complete Printing Solutions'
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <h6
                          className="form-check-label"
                          htmlFor="division1"
                          style={{ fontWeight: 'normal', color: '#6C757D' }}
                        >
                          Complete Printing Solutions
                        </h6>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input radiobtn"
                          type="radio"
                          name="division"
                          id="division2"
                          value="Electronics Components"
                          checked={
                            formData.division === 'Electronics Components'
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <h6
                          className="form-check-label"
                          htmlFor="division2"
                          style={{ fontWeight: 'normal', color: '#6C757D' }}
                        >
                          Electronics Components
                        </h6>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input radiobtn"
                          type="radio"
                          name="division"
                          id="division3"
                          value="Industrial Construction Tools and Equipment"
                          checked={
                            formData.division ===
                            'Industrial Construction Tools and Equipment'
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <h6
                          className="form-check-label"
                          htmlFor="division3"
                          style={{ fontWeight: 'normal', color: '#6C757D' }}
                        >
                          Industrial Construction Tools and Equipment
                        </h6>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input radiobtn"
                          type="radio"
                          name="division"
                          id="division4"
                          value="Medical-PPE"
                          checked={formData.division === 'Medical-PPE'}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <h6
                          className="form-check-label"
                          htmlFor="division4"
                          style={{ fontWeight: 'normal', color: '#6C757D' }}
                        >
                          Medical-PPE
                        </h6>
                      </div>
                      {errors.division && (
                        <div
                          className="invalid-feedback"
                          style={{ fontSize: '20px' }}
                        >
                          {errors.division}
                        </div>
                      )}
                    </div>

                    <div className="row g-0">
                      <input
                        type="text"
                        className={'form-control'}
                        // className={`form-control ${
                        //   errors.subject && 'is-invalid'
                        // }`}
                        name="subject"
                        value={formData.subject}
                        placeholder="Subject"
                        onChange={handleInputChange}
                      />
                      {/* {errors.subject && (
                        <div className="invalid-feedback">{errors.subject}</div>
                      )} */}
                    </div>
                    <div className="row g-0">
                      <textarea
                        placeholder="Question / Message?"
                        defaultValue={''}
                        className={`form-control ${
                          errors.message && 'is-invalid'
                        }`}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>

                    <button type="submit" className="theme-btn">
                      Send Message
                      <i className="fa-solid fa-angles-right" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className="bio">
                  <div className="data">
                    <figure>
                      <img
                        className="author"
                        // src="https://via.placeholder.com/110x110"
                        src="assets/images/828.jpg"
                        // src="assets/images/profiledef.jpg"
                        alt="Bio Image"
                        style={{ zoom: '100%', objectFit: '' }}
                      />
                    </figure>
                    <h3>Mr Deepak Ponnarassery</h3>
                    <p>Business Head</p>
                    {/* <figure>
                      <img
                        src="assets/images/signature.png"
                        alt="Signature Image"
                      />
                    </figure> */}
                  </div>
                </div>
                <div className="info">
                  <ul className="contact">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={79}
                        height={94}
                        viewBox="0 0 79 94"
                      >
                        {' '}
                        <defs>
                          {' '}
                          <clipPath id="clip-location_Bd">
                            {' '}
                            <rect width={79} height={94} />{' '}
                          </clipPath>{' '}
                        </defs>{' '}
                        <g
                          id="location_Bd"
                          data-name="location B"
                          clipPath="url(#clip-location_B)"
                        >
                          {' '}
                          <path
                            id="Path_1gfhjfjytkd"
                            data-name="Path 1"
                            d="M962.855,575.375a3,3,0,0,1-2.1-.861l-26.263-25.826c-11.03-11.993-13.791-27.653-7.492-42a38.334,38.334,0,0,1,34.959-23.117l1.346.009c15.262,0,27.868,8.452,33.722,22.609,6.152,14.878,3.046,31.554-7.912,42.485-.528.555-24.064,25.75-24.064,25.75a3,3,0,0,1-2.129.951Zm-.9-85.8A31.924,31.924,0,0,0,932.49,509.1c-5.313,12.1-2.954,25.342,6.31,35.419l23.963,23.559c15.027-16.085,20.179-21.585,22.274-23.488l-.164-.165c9.233-9.209,11.825-23.318,6.605-35.944a29.677,29.677,0,0,0-28.177-18.9Z"
                            transform="translate(-922.725 -482.15)"
                          />{' '}
                          <path
                            id="Path_24cr2r"
                            data-name="Path 2d"
                            d="M15,6a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-6A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
                            transform="translate(25 26)"
                          />{' '}
                        </g>{' '}
                      </svg>
                      <div>
                        <h3>Address:</h3>
                        <p>
                          #614, Phase 10, RK Hudco,Hosur, Tamil Nadu, India.
                        </p>
                      </div>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={40}
                        height={62}
                        viewBox="0 0 40 62"
                      >
                        {' '}
                        <defs>
                          {' '}
                          <clipPath id="fsddffsdfsdfsdf">
                            {' '}
                            <rect width={40} height={62} />{' '}
                          </clipPath>{' '}
                        </defs>{' '}
                        <g id="Mobsfddfsdile" clipPath="url(#fsddffsdfsdfsdf)">
                          {' '}
                          <path
                            id="Pafdth_1dfhgfhgjjdfhgddffgdfgdfgdfgdfgd"
                            data-name="Path 1"
                            d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                            transform="translate(1 1)"
                          />{' '}
                          <path
                            id="Padfth_2"
                            data-name="Path 2"
                            d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                            transform="translate(14 48)"
                          />{' '}
                        </g>
                      </svg>
                      <div>
                        <h3>Telephone:</h3>
                        <a href="tel:+91 84310 6789 3">
                          <p className="num">(+91) 84310 6789 3</p>
                        </a>
                        {/* <p>(+91) 84310 6789 3</p> */}
                        {/* <p>Fax: (+182) 50 318 47 07</p> */}
                      </div>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={102}
                        height={93}
                        viewBox="0 0 102 93"
                      >
                        {' '}
                        <defs>
                          {' '}
                          <clipPath id="clip-Emaidl_Bhf">
                            {' '}
                            <rect width={102} height={93} />{' '}
                          </clipPath>{' '}
                        </defs>{' '}
                        <g
                          id="Emaidfgsdl_B"
                          data-name="Email B"
                          clipPath="url(#clip-Email_Bsdfhf)"
                        >
                          {' '}
                          <path
                            id="Pathsdf_1"
                            data-name="Path 1"
                            d="M969.85,550.4,927.766,528.2l2.8-5.307,39.229,20.7,37.712-20.677,2.885,5.261Z"
                            transform="translate(-918 -492)"
                          />{' '}
                          <path
                            id="Path_2dfsdsffgs"
                            data-name="Path 2"
                            d="M969.562,494.385l48.391,25.361,0,1.818c-.023,17.272-.043,42.814-.012,47.124l.012.024v.709c0,5.426-1.516,9.425-4.508,11.885a10.4,10.4,0,0,1-6.575,2.344l-75.5-.016c-3.557.071-5.965-.931-7.717-2.752-2.4-2.5-3.517-6.391-3.317-11.577l.065-1.194c.116-5.315.029-29.954-.067-46.535l-.011-1.842Zm42.386,28.988-42.411-22.227-43.2,22.238c.189,32.939.239,42.8-.143,46.148l.13.005c-.168,4.351.8,6.309,1.645,7.185a3.342,3.342,0,0,0,2.458.984l76.043-.071a4.65,4.65,0,0,0,3.16-.963c1.517-1.248,2.319-3.754,2.319-7.25h.09C1011.893,566.689,1011.9,557.566,1011.947,523.373Z"
                            transform="translate(-918 -492)"
                          />{' '}
                        </g>{' '}
                      </svg>
                      <div>
                        <h3>Email:</h3>
                        <a
                          style={{
                            textDecoration: 'none',
                            color: '#B7B7b7',
                          }}
                          className="mail"
                          href="mailto:sales@omdys.com"
                        >
                          <p>sales@omdys.com</p>
                        </a>
                        {/* <p>username@domain.com</p> */}
                      </div>
                    </li>
                  </ul>
                  <ul className="social-medias">
                    <li>
                      <a className="fb" href="javascript:void(0)">
                        <p>Facebook</p>
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="tw" href="javascript:void(0)">
                        <p>Twitter</p>
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Form 2 End */}
        {/* Contact Faqs Start */}
        <section className="contact-faqs" style={{ marginBottom: '185px' }}>
          <div className="heading">
            <figure>
              <img src="assets/images/heading-icon.png" alt="Heading Icon" />
            </figure>
            <span style={{ fontSize: '22px' }}>Frequently asked questions</span>
            <h2>Finding Solutions For Your Dream Project</h2>
          </div>
          {/* -------------Buttons starts---------------------- */}
          {/* Button 1 */}
          <div style={{ margin: '20px', background: '', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <button
                  // className=" btn-dark m-1  dropdown-toggle"
                  className=" btn-warning m-1  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  //     style={{
                  //       color: '#ffFAFAFA',
                  //       fontSize: '16px',
                  //       boxShadow: '0 4px 8px rgba(255, 0, 0, 0.5)',
                  //       transition: 'transform 0.5s ease',
                  //       background: dropdownOpen ? '#ff0000f0' : '',
                  //       border: dropdownOpen
                  //         ? '1px solid #ff0000f0'
                  //         : '1px solid transparent',
                  //       width: '450px',
                  // maxWidth: '100%',

                  //         paddingTop:'15px',
                  //         paddingBottom:'15px'
                  //     }}
                  //  style={{
                  //               color: '#ffFAFAFA',
                  //               fontSize: '16px',
                  //               boxShadow: '0 4px 8px rgba(255, 0, 0, 0.5)',
                  //               transition: 'transform 0.5s ease',
                  //               background: dropdownOpen ? '#ff0000f0' : '',
                  //               border: dropdownOpen
                  //                 ? '1px solid #ff0000f0'
                  //                 : '1px solid transparent',
                  //               width: '450px',
                  //               maxWidth: '100%',
                  //               paddingTop: '15px',
                  //               paddingBottom: '15px',
                  //               whiteSpace: 'nowrap',
                  //               overflowY: 'auto',
                  //             }}

                  style={{
                    background: dropdownOpen ? '#ffee02' : '',
                    border: dropdownOpen
                      ? '1px solid #ffee02'
                      : '1px solid transparent',
                    fontWeight: 'bold',
                  }}
                  // style={{
                  //   background: dropdownOpen ? '#ff0000f0' : '',
                  //   border: dropdownOpen
                  //     ? '1px solid #ff0000f0'
                  //     : '1px solid transparent',
                  //   fontWeight: 'bold',
                  // }}
                >
                  {selectedCategory}
                </button>
                <div
                  className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}
                  aria-labelledby="dropdownMenuButton"
                  // style={{
                  //   width: '100%', // Set width to 100%
                  //   maxWidth: '450px', // Maximum width
                  //   overflowY: 'hidden', // Default to hidden scrolling
                  // }}
                >
                  <button
                    className={`dropdown-item ${
                      activeAccordion === 1 ? 'active' : ''
                    }`}
                    onClick={() =>
                      handleAccordionToggle(1, 'Printing Solutions')
                    }
                  >
                    Printing Solutions
                  </button>
                  {/* Repeat the same for other buttons */}
                  <button
                    className={`dropdown-item ${
                      activeAccordion === 2 ? 'active' : ''
                    }`}
                    onClick={() =>
                      handleAccordionToggle(2, 'Electronics Components')
                    }
                  >
                    Electronics Components
                  </button>
                  <button
                    className={`dropdown-item ${
                      activeAccordion === 3 ? 'active' : ''
                    }`}
                    onClick={() => handleAccordionToggle(3, 'Medical-PPE')}
                  >
                    Medical-PPE
                  </button>
                  {/* Repeat the same for the remaining buttons */}
                  {/* <button
                    className={`dropdown-item ${
                      activeAccordion === 4 ? 'active' : ''
                    }`}
                    onClick={() =>
                      handleAccordionToggle(4, 'Industrial Chemical Products')
                    }
                  >
                    Industrial Chemical Products
                  </button> */}
                  <button
                    className={`dropdown-item ${
                      activeAccordion === 5 ? 'active' : ''
                    }`}
                    onClick={() =>
                      handleAccordionToggle(
                        5,
                        'Industrial Construction Tools and Equipment'
                      )
                    }
                  >
                    Industrial Construction Tools and Equipment
                  </button>
                  {/* <button
                    className={`dropdown-item ${
                      activeAccordion === 6 ? 'active' : ''
                    }`}
                    onClick={() =>
                      handleAccordionToggle(6, 'Pulses and Grains')
                    }
                  >
                    Pulses and Grains
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          {/* -------------Buttons ends---------------------- */}
          {/* ------------------Accordions start----------------- */}
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="acc2">
                  <div className="accordion" id="accordionExample">
                    {/* Main Accordion 1 */}
                    {activeAccordion === 1 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-1">
                          <button
                            className="accordion-button"
                            type="button"
                            // onClick={() => handleAccordionToggle(1)}
                            aria-expanded={
                              activeAccordion === 1 ? 'true' : 'false'
                            }
                            aria-controls="collapse-1"
                            style={{}}
                          >
                            Printing Solutions
                          </button>
                        </h2>
                        <div
                          id="collapse-1"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 1 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-1"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Sub Accordions for Main Accordion 1 */}
                            <div className="accordion" id="nestedAccordion-1">
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-1"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-1"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-1"
                                  >
                                    1. What is a flex printer, and how does it
                                    work?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-1"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-1"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      A flex printer is a printing machine that
                                      uses flexible materials such as vinyl,
                                      fabric, or plastic. It works by
                                      transferring ink onto the flexible
                                      material through a digital printing
                                      process, allowing for high-quality and
                                      customizable prints.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 2 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-2"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-2"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-2"
                                  >
                                    2. What are the benefits of using UV
                                    printers?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-2"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      UV printers offer several benefits,
                                      including:
                                      <br />
                                      Fast printing speeds, Ability to print on
                                      a wide range of materials including wood,
                                      glass, metal, and plastic, High-resolution
                                      prints with vibrant colors ,
                                      Environmentally friendly printing process
                                      as UV ink is cured instantly, reducing
                                      emissions
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 3 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-3"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-3"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-3"
                                  >
                                    3. What materials can be engraved using a
                                    laser engraver?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-3"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Laser engravers can engrave various
                                      materials such as wood, acrylic, glass,
                                      leather, plastic, and certain metals like
                                      aluminum and stainless steel.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-4"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-4"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-4"
                                  >
                                    4. What is the advantage of using a CNC
                                    router?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-4"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      CNC routers offer precise cutting and
                                      carving capabilities on various materials
                                      such as wood, plastic, foam, and metal.
                                      They are programmable and can reproduce
                                      designs with high accuracy and
                                      consistency.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 5 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-5"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-5"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-5"
                                  >
                                    5. How can I maintain my printing and
                                    engraving equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-5"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Regular maintenance is essential for
                                      keeping your equipment in optimal
                                      condition. This includes cleaning the
                                      printheads, checking for any debris or
                                      obstructions, calibrating the machine for
                                      accuracy, and ensuring proper ventilation
                                      and safety protocols for laser equipment.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 6 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-6"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-6"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-6"
                                  >
                                    6. Do you provide technical support and
                                    training for your equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-6"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer technical support and
                                      training to ensure that you can operate
                                      your equipment efficiently and
                                      effectively. Our team is available to
                                      assist you with troubleshooting,
                                      maintenance tips, and training on how to
                                      use the equipment properly.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 7 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-7"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-7"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-7"
                                  >
                                    7. Can your equipment be customized to fit
                                    specific production needs?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-7"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-7"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we understand that every production
                                      environment is unique, and we offer
                                      customization options to meet your
                                      specific requirements. Whether it's
                                      adjusting printing speeds, adding
                                      additional features, or integrating with
                                      existing systems, we can tailor our
                                      equipment to suit your needs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 8 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-8"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-8"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-8"
                                  >
                                    8. What kind of warranty do you offer on
                                    your products?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-8"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-8"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We offer warranties on all our products to
                                      ensure your peace of mind. Warranty terms
                                      may vary depending on the type of
                                      equipment and specific models. Our team
                                      will provide you with detailed warranty
                                      information and support for any issues
                                      that may arise during the warranty period
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 9 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-9"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-9"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-9"
                                  >
                                    9. What software is compatible with your
                                    printing and engraving equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-9"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-9"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our equipment is compatible with a variety
                                      of software applications commonly used in
                                      the industry, including Adobe Photoshop,
                                      CorelDRAW, Illustrator, AutoCAD, and more.
                                      We can also provide recommendations and
                                      support for selecting the right software
                                      for your specific needs
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 10 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-10"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-10"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-10"
                                  >
                                    10. What is the lifespan of your printing
                                    and engraving equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-10"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-10"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      The lifespan of our equipment depends on
                                      various factors such as usage,
                                      maintenance, and environmental conditions.
                                      With proper care and regular maintenance,
                                      our machines are designed to provide years
                                      of reliable service
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 11 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-11"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-11"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-11"
                                  >
                                    11. Can your equipment handle large-scale
                                    production runs?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-11"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-11"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, our equipment is capable of handling
                                      large-scale production runs efficiently
                                      and effectively. Whether you're producing
                                      signage, promotional materials, or custom
                                      products, our machines are built to meet
                                      the demands of high-volume production.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 12 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-12"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-12"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-12"
                                  >
                                    12. Do you offer financing options for
                                    purchasing your equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-12"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-12"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we understand that investing in
                                      equipment can be a significant expense.
                                      That's why we offer flexible financing
                                      options to help you acquire the equipment
                                      you need while managing your cash flow
                                      effectively. Our financing solutions are
                                      tailored to meet your budget and
                                      requirements
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 13 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-13"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-13"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-13"
                                  >
                                    13. What kind of training do you provide for
                                    operating the equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-13"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-13"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      • We offer comprehensive training programs
                                      to ensure that you and your team are
                                      proficient in operating our equipment
                                      safely and efficiently. Our training
                                      sessions cover topics such as machine
                                      setup, maintenance procedures, software
                                      operation, and best practices for
                                      maximizing productivity.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 14 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-14"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-14"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-14"
                                  >
                                    14. Can your equipment be upgraded or
                                    expanded in the future?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-14"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-14"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      • Yes, our equipment is designed with
                                      scalability in mind, allowing for future
                                      upgrades and expansions as your business
                                      grows. Whether you need to add additional
                                      printing heads, increase cutting capacity,
                                      or integrate new features, our machines
                                      can be easily upgraded to meet your
                                      evolving needs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 15 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-15"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-15"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-15"
                                  >
                                    15. What technical specifications should I
                                    consider when choosing equipment for my
                                    business?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-15"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-15"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      When choosing equipment, consider factors
                                      such as printing speed, resolution,
                                      material compatibility, cutting size,
                                      software compatibility, and technical
                                      support options. Our team can help you
                                      evaluate your requirements and select the
                                      equipment that best fits your needs and
                                      budget.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 16 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-16"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-16"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-16"
                                  >
                                    16. Do you offer demonstrations of your
                                    equipment before purchase?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-16"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-16"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer product demonstrations
                                      either in-person or virtually, allowing
                                      you to see our equipment in action and ask
                                      any questions you may have. Our
                                      demonstrations are tailored to showcase
                                      the features and capabilities of our
                                      machines and help you make an informed
                                      decision.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Main Accordion 2 */}
                    {activeAccordion === 2 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-2">
                          <button
                            className="accordion-button"
                            type="button"
                            // onClick={() => handleAccordionToggle(2)}
                            aria-expanded={
                              activeAccordion === 2 ? 'true' : 'false'
                            }
                            aria-controls="collapse-2"
                          >
                            Electronics components
                          </button>
                        </h2>
                        <div
                          id="collapse-2"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 2 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-2"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Sub Accordions for Main Accordion 1 */}
                            <div className="accordion" id="nestedAccordion-1">
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-1"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-1"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-1"
                                  >
                                    1.What types of electronic components do you
                                    source?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-1"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-1"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We source a comprehensive range of
                                      electronic components, including
                                      resistors, capacitors, diodes,
                                      transistors, integrated circuits (ICs),
                                      connectors, and more.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 2 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-2"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-2"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-2"
                                  >
                                    2.Do you only work with specific
                                    manufacturers or brands?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-2"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We have established relationships with a
                                      variety of manufacturers and distributors
                                      worldwide. This allows us to offer a
                                      diverse selection of components from
                                      reputable brands, ensuring quality and
                                      reliability for our clients
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 3 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-3"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-3"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-3"
                                  >
                                    3. How do you ensure the quality of the
                                    components you source?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-3"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We understand the importance of quality
                                      assurance in electronic components. Our
                                      team conducts thorough vetting processes
                                      and works closely with trusted suppliers
                                      to ensure that all components meet
                                      industry standards and specifications.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-4"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-4"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-4"
                                  >
                                    4. What is your lead time for sourcing
                                    components?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-4"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Lead times can vary depending on the
                                      specific components and quantities
                                      required. We strive to provide accurate
                                      lead time estimates for each order and
                                      work efficiently to meet our clients'
                                      timelines.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 5 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-5"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-5"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-5"
                                  >
                                    5. Do you offer customization or special
                                    orders for unique components?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-5"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we understand that some projects may
                                      require specialized components or custom
                                      solutions. Our team is equipped to assist
                                      with special orders and customization
                                      requests, working closely with clients to
                                      fulfill their unique requirements
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 6 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-6"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-6"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-6"
                                  >
                                    6. What is your minimum order quantity
                                    (MOQ)?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-6"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our minimum order quantity varies
                                      depending on the specific components and
                                      suppliers involved. We strive to
                                      accommodate orders of all sizes, from
                                      prototypes to large-scale production runs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 7 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-7"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-7"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-7"
                                  >
                                    7. Do you offer bulk pricing or discounts
                                    for large orders?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-7"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-7"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer competitive pricing for bulk
                                      orders and are happy to discuss discounts
                                      for large-volume purchases. Our goal is to
                                      provide cost-effective solutions for our
                                      clients' component sourcing needs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 8 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-8"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-8"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-8"
                                  >
                                    8. What is your return policy for electronic
                                    components?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-8"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-8"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We have a comprehensive return policy in
                                      place to address any issues with the
                                      components we supply. If a component is
                                      found to be defective or does not meet
                                      specifications, we will work with our
                                      clients to facilitate returns and
                                      replacements as needed.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 9 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-9"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-9"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-9"
                                  >
                                    9. How can I request a quote or place an
                                    order?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-9"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-9"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      You can request a quote or place an order
                                      through our website, via email, or by
                                      contacting our sales team directly. Our
                                      representatives are available to assist
                                      you with any inquiries and guide you
                                      through the ordering process.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Main Accordion 3 */}
                    {activeAccordion === 3 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-3">
                          <button
                            className="accordion-button"
                            type="button"
                            // onClick={() => handleAccordionToggle(3)}
                            aria-expanded={
                              activeAccordion === 3 ? 'true' : 'false'
                            }
                            aria-controls="collapse-3"
                          >
                            Medical PPE
                          </button>
                        </h2>
                        <div
                          id="collapse-3"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 3 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-3"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Sub Accordions for Main Accordion 1 */}
                            <div className="accordion" id="nestedAccordion-1">
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-1"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-1"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-1"
                                  >
                                    1. What types of medical PPE does your
                                    company supply?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-1"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-1"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our company supplies a wide range of
                                      medical PPE including masks, gloves,
                                      gowns, face shields, goggles, hand
                                      sanitizers, and more.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 2 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-2"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-2"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-2"
                                  >
                                    2.Are your medical PPE products compliant
                                    with regulatory standards?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-2"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, all of our medical PPE products meet
                                      or exceed regulatory standards set by
                                      organizations such as the FDA, CE, and
                                      other relevant regulatory bodies.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 3 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-3"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-3"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-3"
                                  >
                                    3. How can I place an order for medical PPE
                                    with your company?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-3"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      You can place an order by contacting our
                                      sales team via phone, email, or through
                                      our website. Our representatives will
                                      guide you through the ordering process.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-4"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-4"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-4"
                                  >
                                    4. What is the minimum order quantity for
                                    medical PPE?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-4"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      The minimum order quantity varies
                                      depending on the type of PPE and current
                                      stock availability. Please contact our
                                      sales team for specific information
                                      regarding minimum order quantities.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 5 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-5"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-5"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-5"
                                  >
                                    5. Can you provide bulk discounts for large
                                    orders?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-5"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer competitive pricing and bulk
                                      discounts for large orders. Please contact
                                      our sales team to discuss pricing options
                                      for your specific order quantity
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 6 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-6"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-6"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-6"
                                  >
                                    6. How do you ensure the quality of your
                                    medical PPE products?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-6"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We source our medical PPE products from
                                      reputable manufacturers who adhere to
                                      strict quality control standards.
                                      Additionally, we conduct regular quality
                                      inspections to ensure that all products
                                      meet our high standards before they are
                                      shipped to customers.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 7 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-7"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-7"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-7"
                                  >
                                    7. What is the lead time for shipping
                                    medical PPE orders?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-7"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-7"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      The lead time for shipping medical PPE
                                      orders varies depending on the type of
                                      product and quantity ordered. Our sales
                                      team will provide you with an estimated
                                      lead time when you place your order.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 8 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-8"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-8"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-8"
                                  >
                                    8. Do you offer expedited shipping options?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-8"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-8"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer expedited shipping options
                                      for customers who require their medical
                                      PPE orders to be delivered quickly.
                                      Additional fees may apply for expedited
                                      shipping services
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 9 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-9"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-9"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-9"
                                  >
                                    9. What is your return policy for medical
                                    PPE products?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-9"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-9"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We have a flexible return policy for
                                      defective or damaged medical PPE products.
                                      Please contact our customer service team
                                      within a specified timeframe after
                                      receiving your order to initiate the
                                      return process.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 10 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-10"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-10"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-10"
                                  >
                                    10. Do you offer customization options for
                                    medical PPE products?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-10"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-10"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer customization options for
                                      certain medical PPE products such as masks
                                      and gowns. Please contact our sales team
                                      to discuss your customization requirements
                                      and we will work with you to fulfill your
                                      needs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Main Accordion 4 */}
                    {activeAccordion === 4 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-4">
                          <button
                            className="accordion-button"
                            type="button"
                            // onClick={() => handleAccordionToggle(4)}
                            aria-expanded={
                              activeAccordion === 4 ? 'true' : 'false'
                            }
                            aria-controls="collapse-4"
                          >
                            Industrial Chemical Products
                          </button>
                        </h2>
                        <div
                          id="collapse-4"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 4 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-4"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Sub Accordions for Main Accordion 1 */}
                            <div className="accordion" id="nestedAccordion-1">
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-1"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-1"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-1"
                                  >
                                    1. What types of Industrial Chemical
                                    mechanical parts do you source?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-1"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-1"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We specialize in sourcing a wide range of
                                      mechanical parts and components used in
                                      the Industrial Chemical industries,
                                      including valves, pumps, pipes, fittings,
                                      compressors, and filtration systems, among
                                      others.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 2 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-2"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-2"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-2"
                                  >
                                    2. Do you offer customized solutions for
                                    specific project requirements?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-2"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we understand that each project may
                                      have unique requirements. Our team works
                                      closely with clients to provide customized
                                      solutions tailored to their specific
                                      needs, ensuring optimal performance and
                                      compatibility with existing systems.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 3 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-3"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-3"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-3"
                                  >
                                    3. How do you ensure the quality of the
                                    parts and components you source?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-3"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We have established rigorous quality
                                      control processes and standards to ensure
                                      that all parts and components sourced meet
                                      industry specifications and standards. We
                                      work with reputable manufacturers and
                                      suppliers who adhere to international
                                      quality assurance protocols and
                                      certifications.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-4"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-4"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-4"
                                  >
                                    4. What is the lead time for sourcing and
                                    delivering products to GCC countries?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-4"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      The lead time for sourcing and delivering
                                      products varies depending on the specific
                                      requirements and availability of the
                                      items. However, we strive to expedite the
                                      sourcing process and work closely with
                                      reliable logistics partners to ensure
                                      timely delivery to our clients in GCC
                                      countries
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 5 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-5"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-5"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-5"
                                  >
                                    5. What are your payment terms and methods?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-5"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We offer flexible payment terms to
                                      accommodate our clients' preferences and
                                      project requirements. Payment methods
                                      include bank transfers, letters of credit
                                      (LC), and other secure payment mechanisms,
                                      ensuring transparency and security in
                                      financial transactions.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 6 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-6"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-6"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-6"
                                  >
                                    6. Do you provide after-sales support and
                                    maintenance services?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-6"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we value long-term relationships with
                                      our clients and offer comprehensive
                                      after-sales support and maintenance
                                      services to ensure the optimal performance
                                      and longevity of the products supplied.
                                      Our team is readily available to address
                                      any queries or issues that may arise
                                      post-delivery.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 7 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-7"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-7"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-7"
                                  >
                                    7. Are your products compliant with GCC
                                    regulatory standards and requirements?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-7"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-7"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we ensure that all products sourced
                                      comply with relevant GCC regulatory
                                      standards and requirements. We stay
                                      updated on regulatory changes and work
                                      closely with manufacturers and suppliers
                                      to ensure compliance with local
                                      regulations and specifications.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 8 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-8"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-8"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-8"
                                  >
                                    8. Can you assist with customs clearance and
                                    documentation for imports to GCC countries?{' '}
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-8"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-8"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Absolutely, we have extensive experience
                                      in handling customs clearance and
                                      documentation requirements for imports to
                                      GCC countries. Our team is well-versed in
                                      local customs procedures and regulations,
                                      ensuring smooth and hassle-free clearance
                                      of goods.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 9 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-9"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-9"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-9"
                                  >
                                    9. What sets your sourcing company apart
                                    from others in the industry?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-9"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-9"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our sourcing company stands out due to our
                                      commitment to quality, reliability, and
                                      customer satisfaction. We prioritize
                                      transparency, integrity, and efficiency in
                                      all our dealings, striving to exceed our
                                      clients' expectations and deliver
                                      value-added solutions for their projects.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 10 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-10"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-10"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-10"
                                  >
                                    10. How can we initiate the sourcing process
                                    with your company?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-10"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-10"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      To initiate the sourcing process, simply
                                      reach out to our dedicated team with your
                                      requirements and project specifications.
                                      We will promptly assess your needs and
                                      provide tailored solutions to meet your
                                      objectives effectively.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Main Accordion 5 */}
                    {activeAccordion === 5 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-5">
                          <button
                            className="accordion-button"
                            type="button"
                            // onClick={() => handleAccordionToggle(5)}
                            aria-expanded={
                              activeAccordion === 5 ? 'true' : 'false'
                            }
                            aria-controls="collapse-5"
                          >
                            Industrial Construction Tools and Equipment's
                          </button>
                        </h2>
                        <div
                          id="collapse-5"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 5 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-5"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Sub Accordions for Main Accordion 1 */}
                            <div className="accordion" id="nestedAccordion-1">
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-1"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-1"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-1"
                                  >
                                    1. What types of construction tools and
                                    equipment do you source?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-1"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-1"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We specialize in sourcing a wide range of
                                      construction tools and equipment including
                                      but not limited to power tools, hand
                                      tools, heavy machinery, safety equipment,
                                      scaffolding, and material handling
                                      equipment.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 2 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-2"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-2"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-2"
                                  >
                                    2. Do you offer customized solutions for
                                    specific project requirements?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-2"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we can source both new and used
                                      equipment based on your requirements and
                                      budget constraints.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 3 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-3"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-3"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-3"
                                  >
                                    3. How do you ensure the quality of the
                                    equipment you source?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-3"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We have a stringent supplier vetting
                                      process where we assess the quality
                                      standards and reputation of each supplier
                                      we work with. Additionally, we can provide
                                      certifications and warranties for the
                                      equipment sourced
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-4"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-4"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-4"
                                  >
                                    4. What are your lead times for sourcing
                                    equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-4"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Lead times can vary depending on the type
                                      of equipment and the quantity ordered.
                                      However, we strive to provide efficient
                                      sourcing services and communicate
                                      realistic lead times to our clients.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 5 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-5"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-5"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-5"
                                  >
                                    5. Do you offer customization options for
                                    equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-5"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we can work with our suppliers to
                                      provide customization options for certain
                                      equipment based on your specific
                                      requirements.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 6 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-6"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-6"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-6"
                                  >
                                    6. What are your payment terms and methods?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-6"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our payment terms and methods may vary
                                      depending on the nature of the transaction
                                      and the agreement with the client. We
                                      accept various payment methods and can
                                      discuss flexible payment terms.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 7 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-7"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-7"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-7"
                                  >
                                    7. Do you provide after-sales support?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-7"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-7"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer after-sales support to
                                      address any issues or concerns you may
                                      have with the equipment sourced through
                                      us. Our team is committed to ensuring your
                                      satisfaction even after the sale is
                                      complete.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 8 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-8"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-8"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-8"
                                  >
                                    8. Can you handle large-scale projects
                                    requiring a variety of equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-8"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-8"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Absolutely, we have experience in handling
                                      large-scale projects and sourcing a
                                      diverse range of equipment to meet the
                                      demands of such projects.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 9 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-9"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-9"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-9"
                                  >
                                    9. Do you offer rental options for
                                    equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-9"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-9"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we can facilitate equipment rentals
                                      for short-term or long-term projects based
                                      on your needs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 10 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-10"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-10"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-10"
                                  >
                                    10. How do I get started with sourcing
                                    equipment through your company?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-10"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-10"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Simply reach out to us through our contact
                                      information provided on our website or get
                                      in touch with one of our representatives.
                                      We'll be happy to discuss your
                                      requirements and provide you with a
                                      tailored sourcing solution
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Main Accordion 6 */}
                    {activeAccordion === 6 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-6">
                          <button
                            className="accordion-button"
                            type="button"
                            // onClick={() => handleAccordionToggle(6)}
                            aria-expanded={
                              activeAccordion === 6 ? 'true' : 'false'
                            }
                            aria-controls="collapse-6"
                          >
                            Toggle Accordion 6
                          </button>
                        </h2>
                        <div
                          id="collapse-6"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 6 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-6"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Content for Accordion 6 */}
                            Content for Accordion 6
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------Accordions start----------------- */}
        </section>

        {/* Contact Faqs End */}
      </>
    </>
  );
};

export default ContactPage;
