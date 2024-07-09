import About from './about/About';
import Articles from './Articles';
import Clients from './Clients';
import Contact from './Contact';
import Counter from './Counter';
import Features from './Features';
import Projects from './Projects';
import Slider from './Slider';
import Team from './Team';
import Vision from './Vision';
import Review from './Review';
import Testimonials from './Testimonials';
// import { useEffect, useState } from 'react';
// import Loader from './Loader';
const Home = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading delay with setTimeout
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  return (
    <>
      {/* {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <> */}
      <Slider />
      <Vision />
      <About />
      <Counter />
      <Projects />
      {/* <Team /> */}
      <Features />
      <Clients />
      <Contact />
      {/* <Review /> */}
      <Testimonials />
      <Articles />
      <button id="scrollTop" className="scrollTopStick">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
    //   )}
    // </>
  );
};

export default Home;
