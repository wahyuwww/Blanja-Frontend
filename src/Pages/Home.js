import React, { useEffect } from "react";
import Navbar from "../components/module/home/navbar/Navbar";
import Category from "../components/module/home/Category/Category";
import Carausel from "../components/module/home/Caraousel/Carausel";
// import Product from "../components/module/home/newProduct/Product";
import Populer from "../components/module/home/popular/Populer";
import Footer from "../components/module/home/footer/Footer";
import axios from "axios";
import Card from "../components/base/Card";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../configs/redux/actions/productsActions";
import { FormatRupiah } from "@arismun/format-rupiah";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  console.log(products);
  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios
      .get(`${process.env.REACT_APP_API_BACKEND}/products/AllProduct`)
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
    setLoading(false);
    dispatch(setProducts(response.data.data));
  };
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!auth.email) return <Navigate to="/login" />;
  return (
    <div>
      <Navbar />
      <Carausel />
      <Category />
      <div className="container">
        <div className="row">
          <div className="products">
            <h3 className="title">New</h3>
            <p>What are you currently looking for</p>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
            {loading ? (
              <>
                <div class="text-center">
                  <FontAwesomeIcon icon={faSpinner} spin />
                  &nbsp;Loading
                </div>
              </>
            ) : (
              products.map((item) => (
                <div className="col" key={item.id}>
                  <Card
                    src={item.image}
                    to={`/detail/${item.id}`}
                    titleName={item.name}
                    price={<FormatRupiah value={item.price} />}
                    merk={item.merk}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Populer />
      <Footer />
    </div>
  );
};

export default Home;
