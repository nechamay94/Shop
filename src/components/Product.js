import React, {Component} from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {ProductConsumer} from "../context"
import PropTypes from 'prop-types'

class Product extends Component {
  render() {
    const {id,title,img,price,inCart} = this.props.product;
    return(
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5"
          onClick={() => console.log('u clicd')}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top"/>
            </Link>
            <button className="cart-btn" 
            onClick={() => 
            console.log('add to the cart')
            }/>
            <div className="card-footer d-flex
            justify-content-between">
              <p className="align-self-center mb-0">
                {title}
              </p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>{price}
              </h5>
            </div>

            </div>

 
        </div>
      </ProductWrapper>
    );
  }
}
/*
Product.PropTypes ={
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title:PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
*/
const ProductWrapper = styled.div`
.card {
  border-color: transparent;
  transition: all is liner;
}
/card-footer {
  background: transarent;
  border-top: transparent;
  transition: all is liner;
}
&:hover {
  .card{
    border:0.04rem solid rgba(0,0,0,2);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,2)
  }
  .card-footer{
    background: rgba(247,247,247);
  }
  .card-img-top{
    transition: all is liner;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.2);
  }
  .card-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translte(100%, 100%);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
}
`;
   /*{
    const {id, title, img, price, inCart} = this.props.product
    return (
      <div className="col-9 mx-auto col-md-6 
      col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={
            console.log(' u click on me')
          }>
            <Link to="/details">
              <img src={img} alt="product" 
              className="card-img-top"/>
            </Link>
          </div>
        </div>
      </div>*/
    

export default Product
