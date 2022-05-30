import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../auth/style.css";
import axios from "axios";
const Create = () => {
  const navigate = useNavigate();
  const [dataRegister, setDataRegister] = useState({
    name: "",
    stock: "",
    description: "",
    image: "",
      price: "",
    size:"",
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
      .post("http://localhost:4000/v1/products/", dataRegister)
      .then((res) => {
        console.log(res.data);
        navigate("/productList");
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
        <form onSubmit={handleRegister}>
          <div className="form-floating">
            <input
              id="floatingInput"
              name="name"
              type="text"
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
              name="description"
              type="description"
              value={dataRegister.description}
              className="form-control mb-3 "
              placeholder="description"
              onChange={handleChange}
            />
            <label htmlFor="floatingEmail">description</label>
          </div>
          <div className="form-floating">
            <input
              id="floatingPassword"
              name="stock"
              type="number"
              value={dataRegister.stock}
              className="form-control mt-3 "
              placeholder="Stock"
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Stock</label>
          </div>
          <div className="form-floating">
            <input
              id="floatingPassword"
              name="price"
              type="number"
              value={dataRegister.price}
              className="form-control mt-3 "
              placeholder="Price"
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Price</label>
          </div>
          <div className="form-floating">
            <input
              id="floatingPassword"
              name="size"
              type="text"
              value={dataRegister.size}
              className="form-control mt-3 "
              placeholder="size"
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Siza</label>
          </div>
          <div className="form-floating">
            <input
              id="floatingPassword"
              name="color"
              type="text"
              value={dataRegister.color}
              className="form-control mt-3 "
              placeholder="color"
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Color</label>
          </div>
          <div className="form-floating">
            <input
              id="floatingPassword"
              name="image"
              type="file"
              value={dataRegister.image}
              className="form-control mt-3 "
              placeholder="image"
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Image</label>
          </div>
          <button className="w-100 btn btn-sign mt-5" type="submit">
            PRIMARY
          </button>
          <label className="login mb-3 mt-4" for="">
            Don't have a Tokopedia account?
            <Link to="/create" className="page-login">
              Login
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};

    export default Create;