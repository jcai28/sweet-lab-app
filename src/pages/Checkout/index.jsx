import React from 'react';
import { useCart} from '../../Hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import classes from './checkoutPage.module.css';
import OrderItemsList from '../../components/OrderItemsList';
axios.defaults.baseURL = 'http://localhost:8001'
export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  //const { user } = useAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState({ ...cart });

  axios.interceptors.request.use(
    req => {
      const token = localStorage.getItem('token');
      if (token) {
        req.headers['access_token'] = token;
      }
      return req;
    },
    error => {
      return Promise.reject(error);
    }
  );
  const createOrder = async order => {
  try {
    const { data } = axios.post('/orders/create', order);
    return data;
  } catch (error) {}
};
  const {
    handleSubmit,
  } = useForm();

  const submit = async data => {
    const token = localStorage.getItem("token");
    if (!token){
        navigate('/login');
    }
    else{
    await createOrder({ ...order });
    clearCart();
    navigate('/');
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className={classes.container}>
        <div className={classes.content}>
          <div className={classes.inputs}>
          <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="text" id="name" name="name" placeholder="Please enter your name" value={order.name}
                    onChange={(e)=>setOrder({...order, name:e.target.value})}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="text" id="phone" name="phone" placeholder="Please enter your phone" value={order.phone}
                    onChange={(e)=>setOrder({...order, phone:e.target.value})}/>
                </div>
          </div>
          <OrderItemsList order={order} />
        </div>
        
        <div className={classes.buttons_container}>
          <div className={classes.buttons}>
          <button
                    className="w-full bg-amber-300 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-amber-500 transition duration-300"
                    type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}