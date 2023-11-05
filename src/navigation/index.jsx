import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Header } from "../components/Header"
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Register from "../pages/Signup"
import Login from "../pages/Login"
import About from "../pages/About"
import Checkout from "../pages/Checkout"
import Order from "../pages/Order"


const Navigation = () =>{
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/order" element={<Order/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;