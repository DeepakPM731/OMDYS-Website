import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
// import About from './components/About';
import AboutPage from './components/about/AboutPage';
import CoreValues from './components/CoreValues';
import ServiceOne from './components/services/ServiceOne';
import ServiceTwo from './components/services/ServiceTwo';
import ServiceThree from './components/services/ServiceThree';
import ServiceFour from './components/services/ServiceFour';
import Activities from './components/Activities';
import ActivityOne from './components/activities/ActivityOne';
import ActivityTwo from './components/activities/ActivityTwo';
import ActivityThree from './components/activities/ActivityThree';
import ActivityFive from './components/activities/ActivityFive';
import ActivitySix from './components/activities/ActivitySix';
import TeamPage from './components/TeamPage';
import ActivityFour from './components/activities/ActivityFour';
import ContactPage from './components/ContactPage';
import News from './components/News';

// import Contact from './components/Contact';
const App = () => {
  
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/service-one" element={<ServiceOne />} />
          <Route path="/service-two" element={<ServiceTwo />} />
          <Route path="/service-three" element={<ServiceThree />} />
          <Route path="/service-four" element={<ServiceFour />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activity-one" element={<ActivityOne />} />
          <Route path="/activity-two" element={<ActivityTwo />} />
          <Route path="/activity-three" element={<ActivityThree />} />
          <Route path="/activity-four" element={<ActivityFour />} />
          <Route path="/activity-five" element={<ActivityFive />} />
          <Route path="/activity-six" element={<ActivitySix />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleBackButton = () => {
      window.location.reload();
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return null;
}

export default App;
