import AOS from 'aos';
import { useEffect } from 'react';
const Counter = () => {
  useEffect(() => {
    AOS.init({
      // AOS configuration options

      offset: 120,
      delay: 0,
      easing: 'ease',
      duration: 400,
      disable: false,
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
      startEvent: 'DOMContentLoaded',
      animatedClassName: 'aos-animate',
      initClassName: 'aos-init',
      useClassNames: false,
      disableMutationObserver: false,
      throttleDelay: 99,
      debounceDelay: 50,
    });

    // Cleanup AOS when component unmounts
    return () => {
      AOS.refreshHard();
    };
  }, []);
  return (
    <>
      <section className="gap no-top counter-style-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="counter-data">
                <div className="counttt">
                  <span className="odometer" data-count={9} data-status="yes">
                    0
                  </span>
                  <i>+ Years</i>
                </div>
                {/* <h4>Professional experience</h4> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="counter-data upper-space">
                <div className="counttt">
                  <span className="odometer" data-count={70} data-status="yes">
                    0
                  </span>
                  <i>
                    <span>+ OEM Partners</span>
                  </i>
                </div>
                {/* <h4>Tie Up</h4> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="counter-data">
                <div className="counttt">
                  <span className="odometer" data-count={500} data-status="yes">
                    0
                  </span>
                  <i>
                    <nobr>+ &nbsp;Products</nobr>
                  </i>
                </div>
                {/* <h4>Products</h4> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
