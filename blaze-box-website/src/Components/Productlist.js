import React, { Component } from 'react';
import Product from './Product';
import Title from './Title'
//import {storeProducts} from '../data'
import {ProductConsumer} from '../Context'

export default class Productlist extends Component{
    // state = {
    //     products: storeProducts
    // }
    render(){
        // console.log(this.state.products);
        return(
            <React.Fragment>
              {/* <Product/>*/}
            <div className="py-5">{/* bootstrap for using padding from top to bottom */}
                <div className="container">
                    <Title name="Designs by Demi" />{/* displaying the title if the page*/}
                    <div className="row">
                    <ProductConsumer>
                        {/* This is going to display all of the products from the Context.js file */}
                        {(value)=>{
                            return  value.products.map( function product(currentValue, index){
                                // console.log("this is our product", currentValue)
                                return <Product key ={index} {...currentValue}
                                />
                            })
                        }}
                    </ProductConsumer>
                    </div>
                </div>
            </div>
            </React.Fragment>
                
           
        )
    }
}
