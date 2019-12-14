import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Buttons';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Navbar extends Component{
    render(){
        return(
            
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                <Link to='/'>
                <img src="https://img.icons8.com/windows/32/000000/home.png" alt= "store"
                className="navbar-brand"/>
                {/* <h1>🔥</h1> */}
                </Link>
                <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Join
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                    
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <spam className="mr-2">
                        <img src="https://img.icons8.com/android/24/000000/buy.png"/>
                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                        </spam>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
// styling the entire navbar
const NavWrapper = styled.nav`
background: white;
.nav-link{
    color: black !important
    font-size: 1.2rem;
    text-transform: capitalize; //capitalize everything in the navbar
}
`