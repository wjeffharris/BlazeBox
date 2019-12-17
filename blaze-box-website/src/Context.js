import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'
// import { tsThisType } from '@babel/types';
//using context api to provide a way to pass data through the component tree
//without having to pass props down manually.
// this is basically where all the application is going to be.

var ProductContext= React.createContext();
// this context object comes with components:
// Provider,
//Consumer

class Provider extends Component {
    state ={ 
        //setting the state for the product store and product details.
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: true,
        modalProduct: detailProduct

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
    
    getItem =(id) =>{
        const product = this.state.products.find(item => item.id === id)
        return product;
    }
    Details=(id)=>{
        const product = this.getItem(id)
        this.setState(()=>{
            return {detailProduct:product}
        })
    }
    addToCart = (id) =>{
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product =tempProducts[index]
        product.inCart= true
        product.count =1
        const price = product.price
        product.total =price

        this.setState(()=>{
            return {products: tempProducts, cart:[...this.state.cart,
            product]}
        },()=>{console.log(this.state)})
        
    }
    openModal = id =>{
        const product =this.getItem(id)
        this.setState(()=>{
            return {modalProduct:product, modalOpen:true}
        })
    }
    closeModal = ()=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
          return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {
          return {
            cart: [...tempCart]
          };
        }, this.addTotals);
      };
      decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
          return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
          this.removeItem(id);
        } else {
          product.total = product.count * product.price;
          this.setState(() => {
            return { cart: [...tempCart] };
          }, this.addTotals);
        }
      };
      getTotals = () => {
        // const subTotal = this.state.cart
        //   .map(item => item.total)
        //   .reduce((acc, curr) => {
        //     acc = acc + curr;
        //     return acc;
        //   }, 0);
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        return {
          subTotal,
          tax,
          total
        };
      };
      addTotals = () => {
        const totals = this.getTotals();
        this.setState(
          () => {
            return {
              cartSubTotal: totals.subTotal,
              cartTax: totals.tax,
              cartTotal: totals.total
            };
          },
          () => {
            // console.log(this.state);
          }
        );
      };
      removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
    
        tempCart = tempCart.filter(item => {
          return item.id !== id;
        });
    
        this.setState(() => {
          return {
            cart: [...tempCart],
            products: [...tempProducts]
          };
        }, this.addTotals);
      };
      clearCart = () => {
        this.setState(
          () => {
            return { cart: [] };
          },
          () => {
            this.setProducts();
            this.addTotals();
          }
        );
      };
    // tester =()=>{
    //     console.log("State Product: ", this.state.products[0].inCart)
    //     console.log("Data Product: ", storeProducts[0].inCart)

        
    // }
     render() {
        return (
            <ProductContext.Provider value={{
                //setting value to objects
                ...this.state,//grabbing everything from the state
                Details:this.Details,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children} {/* a special prop that is passed to components automatically */}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer= ProductContext.Consumer;
// {/* this is bascially assigning everything in the Provider class'
// into the Consumer variable to be used in Productlist.js */}

export {Provider,ProductConsumer};