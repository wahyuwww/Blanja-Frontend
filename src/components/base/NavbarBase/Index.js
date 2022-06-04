import React from 'react'
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
const NavbarBase = ({onChange,onClick , src, srcFilter, srcCart }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top mb-4">
      <div className="container">
        <Link to="/home">
          <img src={src} alt="" className="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-auto " id="navbarCollapse">
          <ul className="navbar-nav mb-2 mb-md-0 w-50 me-auto">
            <div className="input-group rounded nav-search">
              <input
                type="search"
                className="form-control search-input"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                name="search"
                onChange={onChange}
              />
              <span
                className="input-group-text search bg-light"
                id="search-addon"
              >
                <i className="bi bi-search" onClick={onClick}></i>
              </span>
            </div>
            <button className="btn btn-outline-light filter">
              <img src={srcFilter} alt="" />
            </button>
            <h1>{user.email}</h1>
            {/* {search.map((item) => (
                <p>{ item.name}</p>
              ))} */}
            {/* <h5>{search} test</h5> */}
            {/* <h4>{search.name}</h4>
              <h4>{search.price}</h4>
              <h4>{search.description}</h4>
              <h4>{search.image}</h4>
              <h4>{search.stock}</h4>
              <ul>
                <li key={search.id}>data = {search.name}</li>
              </ul> */}
          </ul>
          <form className="ms-2 ">
            <Link to="/login">
              <img src={srcCart} alt="" className="icon-cart me-4" />
            </Link>
          </form>
          <form className="d-flex float-right">
            <Link to="/login">
              <Button
                type="button"
                className="btn button-login me-2"
                title=" login"
              ></Button>
            </Link>
            <Link to="/Register">
              <Button
                type="button"
                className="btn btn-outline-secondary button-signup  me-3"
                title="sign up"
              ></Button>
              {/* <button className="btn btn-outline-secondary button-signup  me-3">
                  {" "}
                  sign up
                </button> */}
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBase;