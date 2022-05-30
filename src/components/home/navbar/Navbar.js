import React, { useState, useEffect } from 'react'
import { useSearchParams,Link } from "react-router-dom";
import "../StyleHome.css";
// import styles from "../StyleHome.module.css";
import logo from "../../../assets/image/belanja.svg";
import filter from "../../../assets/image/filter.png"
import cart from "../../../assets/image/search.svg"
import axios from "axios"

const Navbar = () => {
      const [search, setSearch] = useState("");
      let [searchParams, setSearchParams] = useSearchParams({});
      const handleSearch = () => {
        setSearchParams({ search: search });
      };
      // useEffect(() => {
      //   console.log(searchParams.get("keyword"));
      // }, [searchParams]);
    useEffect(() => {
      axios
        .get(
          `https://belanjain-aja.herokuapp.com/v1/products/filter/?${searchParams}`
        )
        .then((res) => {
          setSearch(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(search);
    }, [searchParams]);
      
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light fixed-top mb-4">
        <div className="container">
          <Link to="/home">
            <img src={logo} alt="" className="" />
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
          <div
            className="collapse navbar-collapse ms-auto "
            id="navbarCollapse"
          >
            <ul className="navbar-nav mb-2 mb-md-0 w-50 me-auto">
              <div className="input-group rounded nav-search">
                <input
                  type="search"
                  className="form-control search-input"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  name="search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span
                  className="input-group-text search bg-light"
                  id="search-addon"
                >
                  <i className="bi bi-search" onClick={handleSearch}></i>
                </span>
              </div>
              <button className="btn btn-outline-light filter">
                <img src={filter} alt="" />
              </button>
            </ul>
            <form className="ms-2 ">
              <img src={cart} alt="" className="icon-cart me-4" />
            </form>
            <form className="d-flex float-right">
              <Link to="/login">
                <button className="btn button-login me-2" type="button">
                  {" "}
                  login
                </button>
              </Link>
              <Link to="/Register">
                <button
                  type="button"
                  className="btn btn-outline-secondary button-signup  me-3"
                >
                  {" "}
                  sign up
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
      <nav className="footer-nav bg-light text-center fixed-bottom">
        {/* <div className="input-group rounded nav-search-buttom text-center mt-1">
          <input
            type="search"
            className="form-control search-input-nav"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text search bg-light" id="search-addon">
            <i className="bi bi-search"></i>
          </span>
        </div> */}

        <button className="btn btn-secondary me-2">
          <i className="bi bi-search "></i>
        </button>
        <button className="btn btn-secondary me-2">
          <img src={search} alt="" className="bi bi-cart" />
        </button>
        <Link to="/login">
          <button className="btn button-login " type="button">
            {" "}
            login
          </button>
        </Link>
        <a href="./LoginRegister/register.html">
          <button
            type="button"
            className="btn btn-outline-secondary button-signup 3 mb-2"
          >
            {" "}
            sign up
          </button>
        </a>
      </nav>
    </div>
  );
}

export default Navbar