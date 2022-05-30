import React from 'react'
import './Bag.css'
import bag from '../../assets/image/bag.png'
import Rectangle from '../../assets/image/Rectangle 605.png'
import shape from '../../assets/image/Shape.png'
import Total from '../Total/Total'


const Bag = () => {
  return (
    <div class="container bag-my">
      <h3 class="title-bag">My Bag</h3>
      <div class="row ">
        <div class="col-lg-8 pl-lg-0">
          <div class="card mb-3 select-all">
            <div class="table-responsive-sm">
              <table class="table mt-3">
                <tbody>
                  <td class="me-5">
                    <div class="check-select">
                      <label class="customcheck ms-2">
                        <p class="select-item ms-4">
                          Select all items{" "}
                          <span class="text-secondary">(2 items selected)</span>{" "}
                        </p>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <span class="checkmak"></span>
                      </label>
                    </div>
                  </td>
                  <td class="delete text-right">Delete</td>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card mb-3 ">
            <div class="table-responsive-sm">
              <table class="table">
                <tbody>
                  <td class="align-middle">
                    <div class="check ms-2 mt-2">
                      <label class="customcheck mt-2 input">
                        /
                        <input
                          class="form-check-input "
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </td>
                  <td class="align-middle  float-start">
                    <img class="img-products" src={bag} alt="product" />
                  </td>
                  <td class="align-middle float-start">
                    <p class="post mb-1">Men's formal suit -</p>
                    <span class="text-secondary sub-post">Zalora Cloth</span>
                  </td>
                  <td class="align-middle">
                    <tr>
                      <button class="btn btn-secondary min">
                        <img src={Rectangle} alt="" class="icon-min" />
                      </button>
                    </tr>
                  </td>
                  <td class="align-middle one">1</td>
                  <td class="align-middle">
                    <tr>
                      <button class="btn btn-light max">
                        <img src={shape} alt="" class="icon-max" />
                      </button>
                    </tr>
                  </td>
                  <td class="align-middle price">$ 20.0</td>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card mb-3 ">
            <div class="table-responsive-sm">
              <table class="table">
                <tbody>
                  <td class="align-middle">
                    <div class="check ms-2 mt-2">
                      <label class="customcheck mt-2 input">
                        /
                        <input
                          class="form-check-input "
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </td>
                  <td class="align-middle  float-start">
                    <img class="img-products" src={bag} alt="product" />
                  </td>
                  <td class="align-middle float-start">
                    <p class="post mb-1">Men's formal suit -</p>
                    <span class="text-secondary sub-post">Zalora Cloth</span>
                  </td>
                  <td class="align-middle">
                    <tr>
                      <button class="btn btn-secondary min">
                        <img src={Rectangle} alt="" class="icon-min" />
                      </button>
                    </tr>
                  </td>
                  <td class="align-middle one">1</td>
                  <td class="align-middle">
                    <tr>
                      <button class="btn btn-light max">
                        <img src={shape} alt="" class="icon-max" />
                      </button>
                    </tr>
                  </td>
                  <td class="align-middle price">$ 20.0</td>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card mb-3 ">
            <div class="table-responsive-sm">
              <table class="table">
                <tbody>
                  <td class="align-middle">
                    <div class="check ms-2 mt-2">
                      <label class="customcheck mt-2 input">
                        /
                        <input
                          class="form-check-input "
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </td>
                  <td class="align-middle  float-start">
                    <img class="img-products" src={bag} alt="product" />
                  </td>
                  <td class="align-middle float-start">
                    <p class="post mb-1">Men's formal suit -</p>
                    <span class="text-secondary sub-post">Zalora Cloth</span>
                  </td>
                  <td class="align-middle">
                    <tr>
                      <button class="btn btn-secondary min">
                        <img src={Rectangle} alt="" class="icon-min" />
                      </button>
                    </tr>
                  </td>
                  <td class="align-middle one">1</td>
                  <td class="align-middle">
                    <tr>
                      <button class="btn btn-light max">
                        <img src={shape} alt="" class="icon-max" />
                      </button>
                    </tr>
                  </td>
                  <td class="align-middle price">$ 20.0</td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Total/>
      </div>
    </div>
  );
}

export default Bag