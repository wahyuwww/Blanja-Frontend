import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import vektor from '../../assets/image/Vector.png'
import blanja from '../../assets/image/Blanja.png'
// import Style from '../auth/style.module.css'

const Login = () => {
  return (
    <div>
      <div className="form-signin">
        <div className="header-login">
          <img className="mb-4 text-center" src={vektor} alt="" />
          <img className="mb-4 mt-4 ms-2" src={blanja} alt="" />
          <h1 className="mb-3 title-login">Please login with your account</h1>
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
        <form>
          <div className="form-floating">
            <input
              type="email"
              className="form-control mb-3"
              placeholder="email"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control mt-3"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="mb-4 mt-4 float-end">
            <label>Forgot password?</label>
          </div>
          <Link to="/home">
            <button className="w-100 btn btn-sign" type="button">
              PRIMARY
            </button>
          </Link>
          <label className="register mb-3 mt-4" htmlFor="">
            Don't have a Tokopedia account?
            <Link className="page-register" to="/register">
              Register
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Login