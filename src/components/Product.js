import React, { Component } from 'react'

export class Product extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src={this.props.image} alt="" />
            <div className="caption">
              <h3>{this.props.children}</h3>
              <p>
                {this.props.price} VNĐ
              </p>
              <p>
                <a href="/" className="btn btn-primary">Mua Ngay</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
