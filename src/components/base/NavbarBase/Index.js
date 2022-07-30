/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Buttons from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../configs/redux/actions/userAction";
import cart from "../../../assets/image/search.svg";
import Profil from "../../../assets/image/profil.png";
import bell from "../../../assets/image/bell (1) 1.png";
import mail from "../../../assets/image/mail (3) 1.png";
import { Dropdown, Button, Modal } from "react-bootstrap";
import swal from "sweetalert2";
import axios from "axios";
// import axios from "axios";
// import {setProducts} from "../../../configs/redux/actions/productsActions"
const NavbarBase = ({ onChange, onClick, src,srcCart }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
   const data  = useSelector((state) => state.bag);
  console.log(user);
  const handleSignOut = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(signOut());
    swal.fire({
      icon: "success",
      title: `Selamat Tinggal!!`,
    });
  };

  const [search, setSearch] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams([]);
  const handleSearch = () => {
    // setSearchParams({ search: search });
    navigate({
      pathname: "/myProducts",
      search: "?search=" + search,
    });
  };
  // const getProducts = async () => {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_API_BACKEND}/products/filter/?${searchParams}`
  //     )
  //     .then((res) => {
  //       console.log(res.data.data);
  //       dispatch(setProducts(res.data.data));

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  useEffect(() => {
    // getProducts();
    datas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [date_of_brith, setDate_of_brith] = useState("");
  useEffect(() => {
    datas();
  }, []);

  const datas = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/auth/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data.username);
    setDate_of_brith(response.data.data[0].date_of_brith);
  };
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top mb-4">
      <div className="container">
        <Link to="/home">
          <img src={src} alt="" className="" />
        </Link>
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
                onChange={(e) => setSearch(e.target.value)}
              />
              <span
                className="input-group-text search bg-light"
                id="search-addon"
              >
                <i className="bi bi-search" onClick={handleSearch}></i>
              </span>
            </div>
            {/* <button
              className="btn btn-outline-light filter"
              onClick={handleShow}
            >
              <img src={srcFilter} alt="" />
            </button>
            <Modal show={show} onHide={handleClose} size="sm">
              <Modal.Header closeButton>
                <Modal.Title>filter</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Button variant="secondary" onClick={handleClose} type="submit">
                  ASC
                </Button>
                <Button
                  className="mt-3 d-flex"
                  variant="primary"
                  type="submit"
                  onClick={handleClose}
                >
                  DESC
                </Button>
              </Modal.Body>
            </Modal> */}
          </ul>
          {user?.id ? (
            <>
              <form className="ms-4">
                <Link to="/Checkout">
                  <button
                    className="btn btn-link position-relative"
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  >
                    <img src={cart} alt="" className="icon-cart mb-2" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {data.cart.length}
                    </span>
                  </button>
                </Link>
                <img src={bell} alt="" className="icon-cart ms-3 mb-2" />
                <img src={mail} alt="" className="icon-cart ms-3 mb-2" />
              </form>
              {/* <form className="d-flex float-right me-5 ms-5">
                <Link to="/profil">
                  <img src={Profil} alt="" className="rounded-circle" />
                </Link>
              </form> */}
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                  <img
                    src={date_of_brith ? date_of_brith : Profil}
                    alt=""
                    width={35}
                    height={35}
                    className="rounded-circle"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <p>hallu : {user.name}</p>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/profil">
                      <button className="btn btn-secondary " type="button">
                        {" "}
                        profil
                      </button>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/login">
                      <button
                        className="btn btn-danger "
                        onClick={() => handleSignOut()}
                        type="button"
                      >
                        {" "}
                        logout
                      </button>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn button-login " type="button">
                  {" "}
                  login
                </button>
              </Link>
              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-outline-secondary button-signup 3 mb-2"
                >
                  {" "}
                  sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarBase;
