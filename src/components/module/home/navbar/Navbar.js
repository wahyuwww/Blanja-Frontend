import React, { useState, useEffect } from 'react'
import { useSearchParams,Link } from "react-router-dom";
import "../StyleHome.css";
// import styles from "../StyleHome.module.css";
import NavbarBase from "../../../base/NavbarBase/Index"
import logo from "../../../../assets/image/belanja.svg";
import filter from "../../../../assets/image/filter.png"
import cart from "../../../../assets/image/search.svg"
import axios from "axios"

const Navbar = ({ onChange }) => {
  const [search, setSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams([]);
  const handleSearch = () => {
    setSearchParams({ search: search });
  };
  const getProducts = async () => {
    axios
      .get(
        `${process.env.REACT_APP_API_BACKEND}/products/filter/?${searchParams}`
      )
      .then((res) => {
        setSearch(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProducts();
    // console.log(searchParams.get("search"));
  }, [searchParams]);

  console.log(search);
  // const searchItem ={
  //   search
  // }
  return (
    <div>
      <NavbarBase
        src={logo}
        srcFilter={filter}
        srcCart={cart}
        onChange={onChange}
      ></NavbarBase>
      <nav className="footer-nav bg-light text-center fixed-bottom">
        <button className="btn btn-light me-2">
          <i className="bi bi-search "></i>
        </button>
        <button className="btn btn-light me-2">
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
};

export default Navbar