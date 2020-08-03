import React from 'react'
import './CheckoutProduct.css'
import { useStateValue} from './StateProvider';
function CheckoutProduct({id,title, image, price, rating}) {
    const [{basket},dispatch] = useStateValue();

    const RemoveFromBasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id
        });

    }
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="no image"></img>
            <div class="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price"><small>$</small><strong>{price}</strong></p>
                <p className="checkoutProduct__rating">{rating}</p>
                <button onClick="{RemoveFromBasket}" className="checkoutProduct__btn" onClick={RemoveFromBasket}>Remove from the basket</button>
 
            </div>
       </div>
    )
}

export default CheckoutProduct
