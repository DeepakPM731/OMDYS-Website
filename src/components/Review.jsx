const Review = () => {
  return (
    <>
      <section className="gap client-review-style-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="head-review">
                <span>Testimonials</span>
                <h3>Client’s Reviews</h3>
              </div>
              <div className="client-review-slider owl-carousel">
                <div
                  className="slider-data"
                  style={{ border: '2px solid red' }}
                >
                  <p>
                    "We've been partnering with the management team for years
                    and their commitment to quality and service is unmatched. We
                    wish you all the very best for their new venture OMDYS
                    International LLP " – Vipin P Varghese, Managing Director –
                    Kattoorans Engineering and Services
                  </p>
                  <div className="bio d-flex-all justify-content-start w-100">
                    <div className="icon d-flex-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                      >
                        <defs>
                          <clipPath id="clip-Inverted">
                            <rect width={26} height={26} />
                          </clipPath>
                        </defs>
                        <g
                          id="Inverted_"
                          data-name="Inverted commas flaky"
                          clipPath="url(#clip-Inverted)"
                        >
                          <path
                            id="Path_3444"
                            data-name="Path 3"
                            d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z"
                            transform="translate(14 0.964)"
                          />
                          <path
                            id="Path_weee4"
                            data-name="Path 4"
                            d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z"
                            transform="translate(0.969 0.964)"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="details w-100">
                      <h3>Vipin P Varghese</h3>
                      <p>
                        Managing Director – Kattoorans Engineering and Services
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="slider-data"
                  style={{ border: '2px solid red' }}
                >
                  <p>
                    "Their diverse product range and efficient logistics helped
                    us complete our project on time and within budget."
                  </p>
                  <div className="bio d-flex-all justify-content-start w-100">
                    <div className="icon d-flex-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                      >
                        <defs>
                          <clipPath id="clip-Inverted_comma">
                            <rect width={26} height={26} />
                          </clipPath>
                        </defs>
                        <g
                          id="Inver"
                          data-name="Inverted commas flaky"
                          clipPath="url(#clip-Inverted_comma)"
                        >
                          <path
                            id="Path_332"
                            data-name="Path 3"
                            d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z"
                            transform="translate(14 0.964)"
                          />
                          <path
                            id="Path_3344"
                            data-name="Path 4"
                            d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z"
                            transform="translate(0.969 0.964)"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="details w-100">
                      <h3>Mr Syed Asad</h3>
                      <p>Director - Infra Structure Solutions</p>
                    </div>
                  </div>
                </div>

                {/* ============================================================================ */}

                {/* ============================================================================ */}

                {/* <div class="slider-data">
          <p>
            To my mind, the greatest reward for any renovation project is
            being able to experience the transformation from beginning to
            end. I enjoy getting to see how a renovation can go from an
            idea to a reality and lead to an elevated mood and heightened
            productivity.
          </p>
          <div class="bio d-flex-all justify-content-start w-100">
            <div class="icon d-flex-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="26"
                height="26"
                viewBox="0 0 26 26"
              >
                <defs>
                  <clipPath id="clip-Inve">
                    <rect width="26" height="26" />
                  </clipPath>
                </defs>
                <g
                  id="Inverted_co"
                  data-name="Inverted commas flaky"
                  clip-path="url(#clip-Inve)"
                >
                  <path
                    id="Path_35555"
                    data-name="Path 3"
                    d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z"
                    transform="translate(14 0.964)"
                  />
                  <path
                    id="Path_4545454"
                    data-name="Path 4"
                    d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z"
                    transform="translate(0.969 0.964)"
                  />
                </g>
              </svg>
            </div>
            <div class="details w-100">
              <h3>Donald Paul</h3>
              <p>Constructor</p>
            </div>
          </div>
        </div>
        <div class="slider-data">
          <p>
            To my mind, the greatest reward for any renovation project is
            being able to experience the transformation from beginning to
            end. I enjoy getting to see how a renovation can go from an
            idea to a reality and lead to an elevated mood and heightened
            productivity.
          </p>
          <div class="bio d-flex-all justify-content-start w-100">
            <div class="icon d-flex-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="26"
                height="26"
                viewBox="0 0 26 26"
              >
                <defs>
                  <clipPath id="clip-Inverted_coadsadad">
                    <rect width="26" height="26" />
                  </clipPath>
                </defs>
                <g
                  id="Inverte"
                  data-name="Inverted commas flaky"
                  clip-path="url(#clip-Inverted_coadsadad)"
                >
                  <path
                    id="Path_3fewrrw"
                    data-name="Path 3"
                    d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z"
                    transform="translate(14 0.964)"
                  />
                  <path
                    id="Path_werwer4"
                    data-name="Path 4"
                    d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z"
                    transform="translate(0.969 0.964)"
                  />
                </g>
              </svg>
            </div>
            <div class="details w-100">
              <h3>Kevin Samuel</h3>
              <p>Creative Head</p>
            </div>
          </div>
        </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <figure>
                <img
                  src="https://winsfolio.net/html/builty/assets/images/clients-images.png"
                  alt="Client Images"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
