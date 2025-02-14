import { ReturnBook } from "./ReturnBook";
// import bookImage from "../../Images/BooksImages/book-luv2code-1000.png";

export const Carousel = () => {
  return (
    <div className="container mt-5" style={{ height: 550 }}>
      {/* Title */}
      <div className="homepage-carousel-title">
        <h3>Find your next "I stayed up too late reading" book.</h3>
      </div>

      {/* Carousel Wrapper */}
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 d-none d-lg-block"
        data-bs-interval="false"
      >
        {/* Inner Carousel (Holds Items) */}
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>
          {/* Second Slide */}
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>
          {/* Third Slide */}
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              <ReturnBook />
              <ReturnBook />
              <ReturnBook />
            </div>
          </div>
        </div>

        {/* Carousel Controls (Prev & Next Buttons) - Moved Inside the Carousel */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Mobile View */}
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          <ReturnBook />
        </div>
      </div>

      {/* View More Button */}
      <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-secondary bt-lg" href="#">
          View More
        </a>
      </div>
    </div>
  );
};
