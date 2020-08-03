import React from 'react'
import './SubTotal.css';
import { useStateValue } from './StateProvider'

import {getBasketTotal} from './reducer'
function SubTotal() {
    const [{basket},dispatch] = useStateValue();
  
    return (
        <div className="SubTotal">


                <p>
                    SubTotal ({basket.length} items): <strong> $ {getBasketTotal(basket)}</strong>
                </p>
                <small className="SubTotal__gift">
                    <input type="checkbox" />This order contains a Gift
                </small>
    
            <button className="SubTotal__btn">Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
