import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import '../StyleHome.css'
// import productsss from '../../../assets/image/product.png'
// import detail  from '../../../Pages/DetailProduct'
import axios from "axios";
const Product = ({ title, subtitle }) => {
  
    const [products, setProducts] = useState([]);
    
   
  // const getData = () => {
  //   fetch("http://localhost:4000/v1/products/AllProduct")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res.data[0].image.split(",")[0]);
  //       setProducts(res.data);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  
   async function fetchData() {
     try {
       const result = await axios({
         method: "GET",
         baseURL: "http://localhost:4000/v1",
         url: "/products/AllProduct",
       });
       console.log(result.data.data[0].image.split(',')[0]);
       setProducts(result.data.data);
     } catch (error) {
       console.log(error);
     }
   }
   const [search, setSearch] = useState("");
   let [searchParams, setSearchParams] = useSearchParams({});
   const handleSearch = () => {
     setSearchParams({ product: search });
    //  setProducts({ keyword: search });
    };
     useEffect(() => {
       fetchData();
     }, []);
    // const getProductById = async () => {
    //   const response = await axios.get(
    //     `http://localhost:4000/v1/products/filter/search=${setSearchParams}`
    //   );
    //       console.log(response);
    //     };
       
    //   useEffect(() => {
    //     getProductById()
    //   }, []);
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
          <p>{searchParams.get("product")}</p>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
            {products.map((item) => (
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
                    <p className="card-text merk">{item.idcategory}</p>
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