import cake1 from "../../asset/cake1.png";
import cake2 from "../../asset/cake2.png";
import cake3 from "../../asset/cake3.png";
import cake4 from "../../asset/cake4.png";
import Banner from "../../components/Banner";
import { useCart } from '../../Hooks/useCart';
import { useNavigate} from 'react-router-dom';
import "./home.css"
import axios from "axios"
import {useState, useEffect} from "react";
axios.defaults.baseURL = 'http://localhost:8001'

const Home = () => {
    let productData = [
        {
            id:1,
            name: "product1",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
            price: 6,
            imageUrl: cake1,
            soldOut: false,

        },
        {
            id:2,
            name: "product2",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
            price: 6,
            imageUrl: cake2,
            soldOut: false,
        },
        {
            id:3,
            name: "product3",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
            price: 6,
            imageUrl: cake3,
            soldOut: false,
        },
        {
            id:4,
            name: "product4",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
            price: 6,
            imageUrl: cake4,
            soldOut: false,
        },
    ]
    const [data, setData] = useState(productData);
    useEffect(() => {
        const getAll = async () => {
          try {
            const response = await axios.get('/foods');
            return response.data;
          } catch (error) {
            console.error('Error fetching data:', error);
            return null;
          }
        };
    
        const fetchData = async () => {
          const productData = await getAll();
          setData(productData);
          console.log(productData);
        };
    
        fetchData();
      }, []); 

    const numProduct = data.length;
    function Product({ productObj }) {
        console.log(productObj)
        const { addToCart } = useCart();
        const navigate = useNavigate();
        const handleAddToCart = () => {
            addToCart(productObj);
            navigate('/cart');
          };
        return (
          <div className="product">
            <img src={productObj.imageUrl} alt={productObj.name}/>
            <div>
              <h3>{productObj.name}</h3>
              <p>{productObj.descriptions}</p>
              <span>{productObj.soldOut ? "SOLD OUT" : productObj.price}</span>
              <button onClick={handleAddToCart} 
              className="bg-amber-300 text-white text-sm font-bold py-2 px-2 rounded-md hover:bg-amber-500 transition duration-300">
                Add To Cart</button>
            </div>
          </div>
        );
      }
    return (
        
        < div className="container">
        <Banner></Banner>
        
        <div className="menu" id="menu">
            
            <h2>Our menu</h2>
            {numProduct > 0 ? (
                <>
                <p>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </p>
                <ul className="products">
                    {data.map((product) => (
                    <Product productObj={product} key={product.name} />
                    ))}
                </ul>
                </>
            ) : (
                <p>We're still working on our menu. Please come back later :)</p>
            )}
        </div>
        </div>
    )

}

export default Home;