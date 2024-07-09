import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState([]);

  const key = import.meta.env.VITE_API_KEY;

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ebb12aa1ab2f471b9c3e45d77717b73c',
  //       {
  //         headers: {
  //           'access-control-allow-origin': '*',
  //           'Content-Type': 'application/json; charset=UTF-8',
  //         },
  //       }
  //     )
  //     .then((data) => {
  //       console.log(data);
  //       setData(data.data.articles);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    // const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    // const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}`;
    const apiUrl = `https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=${key}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setData(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  console.log(data);
  function convertTimestampToDate(data) {
    // Loop through each object in the array
    data.forEach((news) => {
      // Parse the timestamp to create a Date object
      const date = new Date(news.publishedAt);

      // Extract the day, month, and year
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = date.getFullYear();

      // Format the date to dd-mm-yyyy
      const formattedDate = `${day}-${month}-${year}`;

      // Add the formatted date back to the object (or replace the timestamp if needed)
      news.formattedDate = formattedDate;
    });

    return data;
  }

  const updatedApiResponse = convertTimestampToDate(data);

  // Output the updated response
  // console.log('time stamp', updatedApiResponse);

  return (
    <>
      {data.length === 0 ? (
        <>
          <section className="banner-style-one">
            <div
              className="parallax"
              style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
            />
            <div className="container">
              <div className="row">
                <div className="banner-details">
                  <h2>News</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    nihil iste blanditiis. Aspernatur adipisci vitae iure
                    asperiores laudantium fugiat cupiditate alias facilis!
                    Adipisci quia aperiam perferendis perspiciatis harum nisi
                    sunt.
                  </p>
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
            {/* news starts */}
          </section>
          <section className="gap no-top blog-style-one">
            <div className="heading" style={{ marginTop: '30px' }}>
              <figure>
                <img src="assets/images/heading-icon.png" alt="heading-icon" />
              </figure>
              <span>Let us Help Guide</span>
              <h2>Recent Articles</h2>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container">
              <div className="text-center">
                {/* Loader */}
                <div className="loader">
                  <div className="cube">
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="banner-style-one">
            <div
              className="parallax"
              style={{ backgroundImage: 'url(assets/images/pattren-3.png)' }}
            />
            <div className="container">
              <div className="row">
                <div className="banner-details">
                  <h2>News</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    nihil iste blanditiis. Aspernatur adipisci vitae iure
                    asperiores laudantium fugiat cupiditate alias facilis!
                    Adipisci quia aperiam perferendis perspiciatis harum nisi
                    sunt.
                  </p>
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
            {/* news starts */}
          </section>
          <section className="gap no-top blog-style-one">
            <div className="heading" style={{ marginTop: '30px' }}>
              <figure>
                <img src="assets/images/heading-icon.png" alt="heading-icon" />
              </figure>
              <span>Let us Help Guide</span>
              <h2>Recent Articles</h2>
            </div>
            <div className="container">
              <div className="row">
                {updatedApiResponse.map((news, key) => (
                  <>
                    <div key={key} className="col-lg-4 col-md-6 col-sm-12">
                      <div className="blog-post">
                        <div className="blog-image">
                          <figure>
                            {/* // src="https://winsfolio.net/html/builty/assets/images/blog-img-1.jpg" */}
                            <img
                              // src={news.urlToImage}
                              src={news.image}
                              alt="blog-img-1"
                              onError={(e) => {
                                // e.target.src = 'assets/images/heading-icon.png';
                                e.target.src =
                                  'https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444_640.png';
                              }}
                              width={'400px'}
                              height={'280px'}
                            />
                          </figure>
                          <a href={news.url} target="_blank">
                            <i className="fa-solid fa-angles-right" />
                          </a>
                        </div>
                        <div className="blog-data">
                          <span className="blog-date">
                            {news.formattedDate}
                          </span>
                          {/* <span className="blog-date">{news.publishedAt}</span> */}
                          {/* <span className="blog-date">January 9, 2022</span> */}
                          <h2>
                            <a href={news.url} target="_blank">
                              {news.title}
                            </a>
                          </h2>
                          <div className="blog-author d-flex-all justify-content-start">
                            <div className="author-img">
                                <figure>
                                  <img
                                    src="https://s3.ap-south-1.amazonaws.com/omdys.com/arrowright.jpeg"
                                    alt="Blog Author Img"
                                    // src="	https://winsfolio.net/html/builty/assets/images/blog-img-1.jpg"
                                  />
                                </figure>
                            </div>
                            <div className="details">
                              <h3>
                                <a href={news.url} target="_blank">
                                  <span>by</span>
                                  <span> {news.source.name}</span>
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}

                {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post">
                <div className="blog-image">
                  <figure>
                    <img
                      src="https://winsfolio.net/html/builty/assets/images/blog-img-2.jpg"
                      alt="blog-img-2"
                    />
                  </figure>
                  <a href="blog-detail.html">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
                <div className="blog-data">
                  <span className="blog-date">January 9, 2022</span>
                  <h2>
                    <a href="blog-detail.html">
                      Seven Mistakes To Avoid During Construction
                    </a>
                  </h2>
                  <div className="blog-author d-flex-all justify-content-start">
                    <div className="author-img">
                      <figure>
                        <img
                          src="	https://winsfolio.net/html/builty/assets/images/blog-author-img.jpg"
                          alt="Blog Author Img"
                        />
                      </figure>
                    </div>
                    <div className="details">
                      <h3>
                        <span>by</span> Jakki James
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post">
                <div className="blog-image">
                  <figure>
                    <img
                      src="https://winsfolio.net/html/builty/assets/images/blog-img-3.jpg"
                      alt="blog-img-3"
                    />
                  </figure>
                  <a href="blog-detail.html">
                    <i className="fa-solid fa-angles-right" />
                  </a>
                </div>
                <div className="blog-data">
                  <span className="blog-date">January 9, 2022</span>
                  <h2>
                    <a href="blog-detail.html">
                      Build Climate Change-Resilient Infrastructure
                    </a>
                  </h2>
                  <div className="blog-author d-flex-all justify-content-start">
                    <div className="author-img">
                      <figure>
                        <img
                          src="	https://winsfolio.net/html/builty/assets/images/blog-author-img.jpg
"
                          alt="Blog Author Img 1"
                        />
                      </figure>
                    </div>
                    <div className="details">
                      <h3>
                        <span>by</span> Jakki James
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
              </div>
              <div className="common-btn">
                <a
                  href="https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen"
                  target="_blank"
                  className="theme-btn"
                >
                  View All Posts <i className="fa-solid fa-angles-right" />
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default News;
