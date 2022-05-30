import React from 'react'
import "../StyleHome.css"
import slide2 from '../../../assets/image/slide2.png'
import slide1 from '../../../assets/image/slide1.png'
// import carousel  from 'bootstrap'
const Carausel = () => {
  return (
    <div>
      <div className="container slide">
        <div className="row">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={slide1} className="d-block w-100" alt="..." />
                <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                  <h2 className="caption">Black edition</h2>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={slide2} className="d-block w-100" alt="..." />
                <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                  <h2 className="caption">Trends in 2020</h2>
                </div>
              </div>
              <div className="carousel-item">
                <img src={slide2} className="d-block w-100" alt="..." />
                <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                  <h2 className="caption">Black edition</h2>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carausel