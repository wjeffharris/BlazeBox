import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import {Consumer} from '../Context'
// import { is } from '@babel/types';

export default class Product extends Component{
    render(){
        const {id, title, img, price, inCart} = this.props
        return(
            <ProductWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card"> 
            <div className="img-container p-5" 
            onClick={()=>console.log("Click, Clack")}>
             <Link to= "/details">
                 <img src={img} alt="product" className="card-img-top"/>
             </Link>
             {/* Button that will show up on each product that gives each client the option to add to cart*/} 
             {/* <button className="cart-btm" disabled={inCart?true:false}/>  */}
             <button className="cart-btn" 
                disabled ={inCart ? true:false} 
                onClick={()=>{console.log('Product added!')
            }}>
            {inCart?(
                <p className="text-capitalize mb-0 disabled"> in Cart</p>
            ):( 
                <img src="https://img.icons8.com/android/24/000000/buy.png"/>
            )}
             </button>
            </div>
            {/*card footer */}
            <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">
                    {title}
                </p>
                <h5 className="text-blue mb-0"><span className="mr-1">$</span>
                {price}</h5>
                
            </div>
        </div>
            
        </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
    }).isRequired
}   
const ProductWrapper = styled.div`
.card { 
    border-color: transparent;
    transition: all 1s linear;
   

}
.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover{
        .card-footer{
            background: rgba(247,247,247);
    }
    
}
.img-container{
    position: relative;
    overflow:hidden;
}
.card-img-top{
    transition: all .5s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.cart-btn{
    position: absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: orange;
    border: none;
    color: white;
    font-size: 1.4rem
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
   transition: all .4s linear;

}
.img-container:hover .cart-btn{
    transform: translate(0, 0);
}
.cart-btn:hover{
    background: green;
    cursor: pointer;
}
`

       
// const Product = (props) => {
    
  
//     //   const {id, title, img, price, inCart} = this.props.product
//         console.log("this is props.img", props)
//         return (
           
//            <productWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3">
//                <div className="card"> 
//                <div className="img-container p-5" 
//                onClick={()=>console.log("Click, Clack")}>
//                 <Link to= "/details">
//                     <img src={props.img} alt="product" className="card-img-top"/>
//                 </Link>
//                 {/* Button that will show up on each product that gives each client the option to add to cart*/} 
//                 {/* <button className="cart-btm" disabled={inCart?true:false}/>  */}
//                </div>
//                </div>
               
//            </productWrapper>
//         )
    
// }
// export default Product;
 
