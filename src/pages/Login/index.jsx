import {useState} from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:8001'
const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState(
        {
            email:"",
            password:"", 
        }
    )

    const loginUser = async (e) =>{
        e.preventDefault()
        const {email, password} = data;
        try{
            const{data} = await axios.post("/users/login", {
                email, password
            })
            
            if (!data.error){
                localStorage.setItem("token", data.token)
                window.dispatchEvent(new Event("storage"))
                navigate("/")
            }
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={loginUser}>
            <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="email" id="email" name="email" placeholder="Please enter your email" value={data.email}
                    onChange={(e)=>setData({...data, email:e.target.value})}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="password" id="password" name="password" placeholder="********" value={data.password}
                    onChange={(e)=>setData({...data, password:e.target.value})}/>
                </div>
                <button
                    className="w-full bg-amber-300 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-amber-500 transition duration-300"
                    type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;