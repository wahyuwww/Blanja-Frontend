import React, { useEffect, useState } from "react";
import "./profil.css";
import profil from "../../../assets/image/profilBig.png";
import home from "../../../assets/image/seling-product/home (2) 1.png";
import vektor from "../../../assets/image/seling-product/Vector (2).png";
import avatar from "../../../assets/image/edit-avatar.png";
import pekage from "../../../assets/image/seling-product/package 1.png";
import shoping from "../../../assets/image/seling-product/shopping-cart (3) 1.png";
import { useSelector } from "react-redux";
import axios from "axios";

const Profil = ({
  titleOne,
  titleTwo,
  titleThere,
  imgOne,
  imgTwo,
  imgTheree,
  children,
}) => {
  const { user } = useSelector((state) => state.auth);
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
  console.log(user);
  return (
    <div className="col-lg-4 mt-2 select-profil">
      <div className="profil-avatar ">
        <table>
          <tbody>
            <td className=" align-middle float-start image">
              <img
                className="rounded-circle"
                width={75}
                height={70}
                src={date_of_brith ? date_of_brith : profil}
                alt="img"
              />
            </td>
            <td className="align-middle float-start ms-3 image-text">
              <p className="post mb-2">{user.name}</p>
              <p className=" edit-profil mt-2">
                <img src={avatar} className="me-2" alt="" />
                ubah profil
              </p>
            </td>
          </tbody>
        </table>
      </div>
      <div className="profil-select mt-5">
        <ul className="list-unstyled ps-0 mt-2">
          <li className="mb-1">
            <button className="btn btn-acount">
              <img src={imgOne} alt="" />
            </button>
            <button
              className="btn btn-toggle title-dashboard d-inline-flex align-items-center rounded border-0 collapsed text-secondary"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              <span className="text-profil">{titleOne}</span>
            </button>
            <img src={vektor} className="img-down" alt="" />
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small"></ul>
            </div>
          </li>
          <li className="mb-1 mt-3">
            <button className="btn btn-location">
              <img src={imgTwo} alt="" />
            </button>
            <button
              className="btn btn-toggle title-dashboard d-inline-flex align-items-center rounded border-0 collapsed text-black"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="true"
            >
              <span className="text-profil">{titleTwo}</span>
            </button>
            <img src={vektor} className="img-down ms-4" alt="" />
            <div className="collapse show" id="dashboard-collapse">
              {children}
            </div>
          </li>
          <li className="mb-1 mt-3">
            <button className="btn btn-mail">
              <img src={imgTheree} alt="" />
            </button>
            <button
              className="btn btn-toggle title-dashboard d-inline-flex align-items-center  rounded border-0 collapsed text-secondary"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              <span className="text-profil">{titleThere}</span>
            </button>
            <img src={vektor} className="img-down" alt="" />
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small"></ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profil.defaultProps = {
  titleOne: "Store",
  titleTwo: "Products",
  titleThere: "Orders",
  imgOne: home,
  imgTwo: pekage,
  imgTheree: shoping,
};
export default Profil;
