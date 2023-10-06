import { Link } from "react-router-dom"
import logo from "../asset/logo.png"
import cart from "../asset/carts.png"
import './Header.css';
export const Header = () => {
    return (
        <nav id = "header">
            <div className="container w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wraper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline">
                        <img src={logo} alt="logo" className="w-40 h-20 object-cover"/>
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="/" className="text-xl">About</Link>
                    
                </div>
                <div className="flex items-center justify-between space-x-4">
                    <Link to="/cart" className="text-xl">
                        <img src={cart} alt="logo" width="50px" height="50px"/>
                    </Link>
                    <Link to="/login" className="text-xl">Login</Link>
                    <Link to="/register" className="text-xl">Sign Up</Link>
                    
                </div>
            </div>
        </nav>
    )
}