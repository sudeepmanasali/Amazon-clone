import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from './StateProvider';
function Header() {

  const [{basket}] = useStateValue();
    return (
        <nav className="header">
            <Link to="/login">
            <img  className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
       
            </Link>

  <div className="header__search">
  <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>

      </div>          
           
           <div className="header__nav">
             <Link className="header__link">
               <div className="header__option">
                  <span className="header__optionLineOne">Hello sudi</span>
                  <span className="header__optionLineTwo">Sign In</span>

               </div>
         
             </Link>

             <Link className="header__link">
               <div className="header__option">
                  <span className="header__optionLineOne">Return</span>
                  <span className="header__optionLineTwo">Orders</span>

               </div>
         
             </Link>

             <Link className="header__link">
               <div className="header__option">
                  <span className="header__optionLineOne">Your</span>
                  <span className="header__optionLineTwo">Price</span>

               </div>
         
             </Link>

             <Link to="/checkout" className="header__link" >
               <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
               </div>
         
             </Link>

           </div>
        

       </nav>
    )
}

export default Header
