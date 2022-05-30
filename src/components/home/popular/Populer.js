import React from 'react'
import "../StyleHome.css";
import product from "../../../assets/image/product.png";

function Populer() {
  return (
      <div>
          <div className="container">
               <div className="row">
                    <div className="products">
                    <h3 className="products mt-5 mb-2 title">Populer</h3>
                    <p >Find clothes that are trending recently</p>
                    </div>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
                        <div className="col">
                        <div className="card shadow-sm">
                            <img src={product} className="img-fluid" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Men's formal suit - Black & White</h5>
                            <p className=" price">$ 40.0</p>
                            <p className="card-text merk">Zalora Cloath</p> 
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
                        <div className="col">
                        <div className="card shadow-sm">
                            <img src={product} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Men's formal suit - Black & White</h5>
                            <p className=" price">$ 40.0</p>
                            <p className="card-text merk">Zalora Cloath</p>
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
                        <div className="col">
                        <div className="card shadow-sm">
                              <img src={ product} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Men's formal suit - Black & White</h5>
                            <p className=" price">$ 40.0</p>
                            <p className="card-text merk">Zalora Cloath</p>
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
                        <div className="col">
                        <div className="card shadow-sm">
                            <img src={product} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Men's formal suit - Black & White</h5>
                            <p className=" price">$ 40.0</p>
                            <p className="card-text merk">Zalora Cloath</p>
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
                        <div className="col">
                        <div className="card shadow-sm">
                            <img src={product} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Men's formal suit - Black & White</h5>
                            <p className=" price">$ 40.0</p>
                            <p className="card-text merk">Zalora Cloath</p>
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
                    </div>
                </div>
          </div>
    </div>
  )
}

export default Populer