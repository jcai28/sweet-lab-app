import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../../components/Price';
import { useCart } from '../../Hooks/useCart';
import  './cart.css';

const Cart = () => {
    const { cart, removeFromCart, changeQuantity } = useCart();
    return (
    <div className='mx-auto'>
        
        <div className="containerCart">
        
        <h2 class="text-center w-full my-7" > Cart</h2>
          <ul className="list">
            {cart.items.map(item => (
              <li key={item.food.id}>
                <div>
                  <img src={`${item.food.imageUrl}`} alt={item.food.name} />
                </div>
                <div>
                  <Link to={`/food/${item.food.id}`}>{item.food.name}</Link>
                </div>

                <div>
                  <select
                    value={item.quantity}
                    onChange={e => changeQuantity(item, Number(e.target.value))}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>

                <div>
                  <Price price={item.price} />
                </div>

                <div>
                  <button
                    className="remove_button"
                    onClick={() => removeFromCart(item.food.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="checkout">
            <div>
              <div className="foods_count">{cart.totalCount}</div>
              <div className="total_price">
                <Price price={cart.totalPrice} />
              </div>
            </div>

            <Link to="/checkout">Proceed To Checkout</Link>
          </div>
        </div>
    </div>
  );
}

export default Cart;

  