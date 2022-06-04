import React, { useState, useEffect } from "react";
import Navbar from "../components/module/home/navbar/Navbar";
import Category from "../components/module/home/Category/Category";
import Carausel from "../components/module/home/Caraousel/Carausel";
// import Product from "../components/module/home/newProduct/Product";
import Populer from "../components/module/home/popular/Populer";
import Footer from "../components/module/home/footer/Footer";
import axios from "axios";
import Card from "../components/base/Card";
const Home = () => {
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
      <Navbar onChange={(e) => setSearch(e.target.value)} />
      <Carausel />
      <Category />
      <div className="container">
        <div className="row">
          <div className="products">
            <h3 className="title">New</h3>
            <p>What are you currently looking for</p>
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
                  <Card
                    src={item.image.split(",")[0]}
                    to={`/detail/${item.id}`}
                    titleName={item.name}
                    price={item.price}
                    merk={item.merk}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <Populer />
      <Footer />
    </div>
  );
};

export default Home;
