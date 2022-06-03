import React from 'react'
import "../StyleHome.css";
import product from "../../../../assets/image/product.png";
import Card from '../../../base/Card/index'

function Populer() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="products">
            <h3 className="products mt-5 mb-2 title">Populer</h3>
            <p>Find clothes that are trending recently</p>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
            <div className="col">
              <Card
                src={product}
                to={`/home`}
                titleName="Men's formal suit - Black & White"
                price="$ 40 . 0"
                merk="Zalora Cloath"
              ></Card>
            </div>
            <div className="col">
              <Card
                src={product}
                to={`/home`}
                titleName="Men's formal suit - Black & White"
                price="$ 40 . 0"
                merk="Zalora Cloath"
              ></Card>
            </div>
            <div className="col">
              <Card
                src={product}
                to={`/home`}
                titleName="Men's formal suit - Black & White"
                price="$ 40 . 0"
                merk="Zalora Cloath"
              ></Card>
            </div>
            <div className="col">
              <Card
                src={product}
                to={`/home`}
                titleName="Men's formal suit - Black & White"
                price="$ 40 . 0"
                merk="Zalora Cloath"
              ></Card>
            </div>
            <div className="col">
              <Card
                src={product}
                to={`/home`}
                titleName="Men's formal suit - Black & White"
                price="$ 40 . 0"
                merk="Zalora Cloath"
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Populer