import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import vektor from "../../assets/image/Vector.png";
import blanja from "../../assets/image/Blanja.png";
// import Style from '../auth/style.module.css'
// import PropTypes from "prop-types";
import axios from "axios";

const Register = ({ label, ...props }) => {
   const navigate = useNavigate();
   const [dataRegister, setDataRegister] = useState({
     email: "",
     password: "",
     name: "",
   });
  const handleChange = (e) => {
    setDataRegister({
      ...dataRegister,
      [e.target.name]: e.target.value,
    });
  };
   const handleRegister = (e) => {
     e.preventDefault();
     axios
       .post("http://localhost:4000/v1/auth/register", dataRegister)
       .then((res) => {
         console.log(res.data);
         navigate("/login");
       })
       .catch((e) => {
         // console.log(e);
         // console.log(e.response.data.message);
         alert(e.response.data.message);
       });
   };
  return (
    <div>
      <div className="form-signin">
        <div className="header-login">
          <img className="mb-4" src={vektor} alt="" />
          <img className="mb-4 mt-4 ms-2" src={blanja} alt="" />
          <h1 className="title-login mb-3">Please sign up with your account</h1>
          <ul className="nav nav-justified mb-4 mt-5" id="ex1" role="tablist">
            <li className="nav-item " role="presentation">
              <button className="w-100 btn costemer" type="submit">
                Costemer
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="w-100 btn seler" type="submit">
                Seler
              </button>
            </li>
          </ul>
        </div>
        <form onSubmit={handleRegister}>
          <div className="form-floating">
            <input
              id="floatingInput"
              name="name"
              type="text"
              {...props}
              value={dataRegister.name}
              placeholder="Name"
              className="form-control mb-3"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              id="floatingEmail"
              name="email"
              type="email"
              {...props}
              value={dataRegister.email}
              className="form-control mb-3 "
              placeholder="Email Address"
              onChange={handleChange}
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input
              id="floatingPassword"
              name="password"
              type="password"
              {...props}
              value={dataRegister.password}
              className="form-control mt-3 "
              placeholder="Password"
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-sign mt-5" type="submit">
            PRIMARY
          </button>
          <label className="login mb-3 mt-4" for="">
            Don't have a Tokopedia account?
            <Link to="/login" className="page-login">
              Login
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};
// Register.propTypes = {
//   label: PropTypes.string.isRequired,
//   id: PropTypes.string,
//   name: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   type: PropTypes.string,
//   onChange: PropTypes.func,
// };
export default Register;
