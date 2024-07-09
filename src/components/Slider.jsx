import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import $ from 'jquery';
// import 'owl.carousel';
const Slider = () => {
  useEffect(() => {
    let elements = document.querySelectorAll('[data-aos]');
    for (let i = 0; i < elements.length; i++) {
      //if ios remove the attribute
      if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        elements[i].removeAttribute('data-aos');
      }
    }
  });

  // useEffect(() => {
  //   if ($('.f-slider-one')[0]) {
  //     $('.f-slider-one.owl-carousel').owlCarousel({
  //       items: 1,
  //       loop: true,
  //       margin: 0,
  //       stagePadding: 0,
  //       nav: true,
  //       navText: [
  //         "<button><i class='fa-solid fa-angles-left'></i></button>",
  //         "<button><i class='fa-solid fa-angles-right'></i></button>",
  //       ],
  //       dots: false,
  //       animateOut: 'fadeOut',
  //       touchDrag: false,
  //       mouseDrag: false,
  //     });
  //   }
  // }, []);

  return (
    <>
      <section className="featured-slider-one" style={{ background: 'grey' }}>
        {/* <h1>Test</h1>  */}
        <div className="containe">
          <div className="ro f-slider-one owl-carousel">
            {/* <h1>Test 2</h1> */}
            {/* <div className="f-slider-layer"> */}
            <div className="f-slider-layer">
              {/* <h1>test 3</h1> */}
              <img
                // style={{ objectFit: 'cover', width: '2769px' }} //for aws untitled
                style={{ objectFit: 'cover', width: '1920px' }} //for 6.svg
                // style={{ objectFit: 'cover', width: '1900px' }}
                // style={{ objectFit: 'cover', width: '100%' }}
                // src="https://s3.ap-south-1.amazonaws.com/omdys.com/Untitled+design.svg"
                src="https://s3.ap-south-1.amazonaws.com/omdys.com/f-slider-one-1.jpg"
                // src="assets/svg/6.svg"
                alt="Slider 1"
              />
              <div className="f-slider-one-data">
                <h1>
                  {' '}
                  Let&apos;s find your perfect product, anywhere in the world
                </h1>
                <p>
                  With our extensive network of suppliers, we can source
                  anything you need.
                </p>
                <a
                  href="/contact"
                  // data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="theme-btn"
                >
                  Browse More About Us{' '}
                  <i className="fa-solid fa-angles-right" />
                </a>
              </div>
            </div>
            {/* <div className="f-slider-layer">
              <img
                src="https://s3.ap-south-1.amazonaws.com/omdys.com/f-slider-one-1.jpg"
                alt="Project Img"
              />
              <div className="f-slider-one-data">
                <h1>
                  {' '}
                  Let&apos;s find your perfect product, anywhere in the world
                </h1>
                <p>
                  With our extensive network of suppliers, we can source
                  anything you need.
                </p>
                <a
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  className="theme-btn"
                >
                  Browse More About Us{' '}
                  <i className="fa-solid fa-angles-right" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;

