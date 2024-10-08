import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const{getTotalCartAmount}= useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delevery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='first name'/><input type="text" placeholder='last name'/>
        </div>
        <input type="text" placeholder='Email address'/><input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='city'/><input type="text" placeholder='state'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code'/><input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details"><p>Subtotal</p>
            <p>${getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details">
              <p>Delevery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
            <hr />
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
