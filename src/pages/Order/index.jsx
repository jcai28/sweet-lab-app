import OrderItemsList from '../../components/OrderItemsList';
import { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8001'
export default function Order() {
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
      const [userOrder, setUserOrder] = useState([]);

 
        const getOrderForCurrentUser = async () => {
          try {
            const { data } = await axios.get('/orders/OrderForCurrentUser');
            console.log(data);
            setUserOrder(data);
          } catch (error) {
            console.error('Error fetching user order:', error);
          }
        };
        useEffect(() => {
            getOrderForCurrentUser();
          }, []);
  

    return (
       <>
    
      {userOrder.length ? (
        userOrder.map((order) => (
            <div className="container mx-auto py-8">
                <h1>Order Number  {order.id}</h1>
          <OrderItemsList key={order.id} order={order} />
          </div>
        ))
      ) : (
        <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">No order yet</h1>
        <div  className="text-center">
        <a href="/" className="text-center text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-35">
                        See Menu
        </a>
        </div>
        </div>
      )}
         </>
   
    )
}
