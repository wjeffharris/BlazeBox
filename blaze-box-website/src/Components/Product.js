import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {Consumer} from '../Context'

const Product = (props) => {
    
  
        //  const {id, title, img, price, inCart} = this.props.product
        console.log("this is props.img", props)
        return (
           
           <productWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card"> 
               <div className="img-container p-5" 
               onClick={()=>console.log("Click, Clack")}>
                <Link to= "/details">
                    <img src={props.img} alt="product" className="card-img-top"/>
                </Link>
                {/* Button that will show up on each product that gives each client the option to add to cart*/} 
                <button className="cart-btm" disabled={inCart?true:false}/> 
               </div>
               </div>
               
           </productWrapper>
        )
    
}
export default Product;
const productWrapper = styled.div``
        
