import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
// created this button for shopping cart that will be reused throughout the website.
export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1rem;
background: transparent;
border-color: ${props => props.cart?"orange": "lightblue"};
color: noir;
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
curser:pointer;
margin: 0.2rem 0.5rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: white
}
&:focus{
    outline:none;
}
`;
