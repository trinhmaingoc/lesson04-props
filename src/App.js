import React, { Component, Fragment } from 'react'
import Product from './components/Product'

export class App extends Component {
  render() {
    const products = [
      {
        id: 1,
        name: 'Apple Iphone 6 Plus 16GB',
        price: 15000000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/69783/iphone-6-plus-16gb-64gb128gb-400x450.png',
        status: true,
      },

      {
        id: 2,
        name: 'Samsung Galaxy S6',
        price: 8000000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/71081/samsung-galaxy-s6-edge-4-400x460.png',
        status: true,
      },
      {
        id: 1,
        name: 'Oppo F1s',
        price: 5000000,
        image: 'https://didongthongminh.vn/upload_images/2017/10/oppo-f1s-gold.png',
        status: true,
      },
    ];
    let elements = products.map((product, index) => {
      let result = '';
      if (product.status) {
        result = (
          <Product
            key={index}
            price={product.price}
            image={product.image}
          >
            {product.name}
          </Product>
        )
      };
      return result;
    })
    return (
      <Fragment>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Props</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;
