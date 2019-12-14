import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'
//using context api to provide a way to pass data through the component tree
//without having to pass props down manually.
// this is basically where all the application is going to be.

var productContext= React.createContext();
// this context object comes with components:
// Provider,
//Consumer

class Provider extends Component {
    state ={ 
        //setting the state for the product store and product details.
        products: [],
        detailProduct: detailProduct
    }
    componentDidMount(){
        this.setProducts();
    }
    //methods:
    setProducts=()=>{
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem ={...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }
    
    Details=()=>{
        console.log("This is the Detail Function")
    }
    addToCart = () =>{
        console.log("This is the addToCart Function")
    }
    tester =()=>{
        console.log("State Product: ", this.state.products[0].inCart)
        console.log("Data Product: ", storeProducts[0].inCart)

        
    }
    render() {
        return (
            <productContext.Provider value={{
                //setting value to objects
                ...this.state,//grabbing everything from the state
                Details:this.Details,
                addToCart:this.addToCart
            }}>
                {this.props.children} {/* a special prop that is passed to components automatically */}
            </productContext.Provider>
        )
    }
}
const Consumer= productContext.Consumer;
// {/* this is bascially assigning everything in the Provider class'
// into the Consumer variable to be used in Productlist.js */}

export {Provider,Consumer};