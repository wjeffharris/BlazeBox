import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'
import { ButtonContainer } from './Buttons';
import {detailProduct} from '../data'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
                 return(
                     <div className=" container py-5">
                         {/* Title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center 
                        text-slanted text-blue my-5">
                            <h1>{title}</h1>
                            </div>
                        </div>
                         {/* End Title */}
                         {/* Product info*/}
                         <div className="row">
                             <div className="col-10 mx auto col-md-6 my-3">
                                 <img src={img} className="img-fluid" alt= "product"/>
                             </div>
                             {/* product text*/}
                             <div className="col-10 mx auto col-md-6 my-3 text-capitalize">
                                 <h3> Artwork : {title}</h3>
                                 <h4 className="text-blue">
                                     <strong>
                                         price: <span>$</span>
                                         {price}
                                     </strong>
                                 </h4>
                                 <p className ="text-capitalize font-weigt-bold mt-3 mb-0">
                                     info:
                                 </p>
                                 <p className="textt-muted lead">{info}</p>
                                 {/*buttons*/}
                                 <div>
                                     <Link to ="/">
                                         <ButtonContainer>Back to Products</ButtonContainer>
                                     </Link>
                                     <ButtonContainer cart disabled ={inCart?true:false}
                                     onClick={()=>{
                                         value.addToCart(id)
                                         value.openModal(id)
                                     }}>
                                     {inCart? "inCart":"add to cart"}</ButtonContainer>
                                 </div>
                            </div>
                         </div>
                     </div>
                 )
                }}
            </ProductConsumer>
        )
    }
}
