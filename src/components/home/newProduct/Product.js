import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../StyleHome.css'
import axios from "axios";
const Product = ({ title, subtitle }) => {
  
  const [products, setProducts] = useState([]); 
  const [searchItem, setSearch] = useState("");
   async function fetchData() {
     try {
       const result = await axios({
         method: "GET",
         baseURL: process.env.REACT_APP_API_BACKEND,
         url: "/products/AllProduct",
       });
      //  console.log(result.data.data[0].image.split(',')[0]);
       setProducts(result.data.data);
     } catch (error) {
       console.log(error);
     }
   }
     useEffect(() => {
       fetchData();
     }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="products">
            <h3 className="title">{title}</h3>
            <p>{subtitle}</p>
          </div>
          <div className="input-group rounded nav-search">
            <input
              className="form-control search-input"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              name="search"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span
              className="input-group-text search bg-light"
              id="search-addon"
            >
              <i className="bi bi-search" ></i>
            </span>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
            {products
              .filter((val) => {
                if (searchItem === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => (
                <div className="col" key={item.id}>
                  <div className="card shadow-sm">
                    <img
                      src={item.image.split(",")[0]}
                      className="img-fluid"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`/detail/${item.id}`}>{item.name}</Link>
                      </h5>
                      <p className=" price">{item.price}</p>
                      <p className="card-text merk">{item.merk}</p>
                      <div className="d-flex justify-content-start text-warning start">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <p className="rating  mt-2 ms-1 text-dark">(10)</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product