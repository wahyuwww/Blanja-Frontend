import React,{useEffect,useState} from 'react'
import Footer from '../components/module/home/footer/Footer'
import Navbar from '../components/module/home/navbar/Navbar'
import Card from "../components/base/Card";
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct } from "../configs/redux/actions/productsActions";
import { Dropdown } from "react-bootstrap";

const MyProducts = () => {
    const [counter, setCounter] = useState(1);
    const [sort, setSort] = useState('ASC');
      const { products, pagination } = useSelector(
        (state) => state.dataProduct
      );
      const dispatch = useDispatch();
    console.log(pagination)
      useEffect(() => {
        dispatch(setDataProduct(counter, sort));
      }, [counter, sort, dispatch]);
      const next = () => {
        setCounter(
          counter === pagination.totalPage ? pagination.totalPage : counter + 1
        );
        console.log(counter);
      };
    const previos = () => {
           setCounter(counter <= 1 ? 1 : counter - 1);
       };
    const sortby = () => {
           setSort("DESC");
       };
    const sortAsc = () => {
           setSort("ASC");
       };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="products">
            <h3 className="title">New</h3>
            <p className="mt-5">My Products</p>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 mt-5">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Sorting Name
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <button className="btn btn-info me-3" onClick={sortby}>
                    Name Z-A
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button className="btn btn-success" onClick={sortAsc}>
                    Name A-Z
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
            {products.map((item) => (
              <div className="col" key={item.id}>
                <Card
                  src={item.image}
                  to={`/detail/${item.id}`}
                  titleName={item.name}
                  price={item.price}
                  merk={item.merk}
                />
              </div>
            ))}
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
            <button className="btn btn-primary me-5" onClick={previos}>
              Previos
            </button>
            <p className=" ms-5">
              {pagination.currentPage}/{pagination.totalPage}
            </p>
            <button className="btn btn-primary" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyProducts