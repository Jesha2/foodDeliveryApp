import {  Fragment } from 'react';
import mealsImage  from '../../assets/meals.jpg';
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';
//import CartProvider from '../../store/CartProvider';
//import CartContext from '../../store/cart-context';


const Header = (props) => {
  
  return (
    //can move CartProvider this to app.js we doing it here to keep app lean
    <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt= "a table of food" />
        </div>
     
    </Fragment>
  )
}

export default Header
