import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
  const [{basket}, dispatch] = useStateValue();
    const addToBasket = () =>{
        //Add an item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price:  price,
                rating: rating
            }
        })
    }
   
    return (
        <div className="product">
            <img src={image} alt=""></img>
          <p>{title}</p>
          <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className="product___rating">
            {rating}
          </div>
          <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}


export default Product
