import { Link } from "react-router-dom"
import logo from "../asset/logo.png"
import cart from "../asset/carts.png"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './Header.css';
import Button from "./elements/Button";

export const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        navigate("/");
    }
    useEffect(() => {
        // Function to handle changes to localStorage
        const handleStorageChange = () => {
            const token = localStorage.getItem("token");
            setIsLoggedIn(!!token);
        };

        // Add an event listener for the "storage" event
        window.addEventListener("storage", handleStorageChange);

        // Check for the token in localStorage initially
        handleStorageChange();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);


    console.log(isLoggedIn)
    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={logo} alt="logo" className="w-50 h-20 object-cover"/>
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="#about" className="text-xl">About</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to="/cart" className="mr-4 relative">
                        <img src={cart} alt="cart"  className="h-20" />
                    </Link>
                    {
                        isLoggedIn ? 
                        (
                            <>
                            <Link to="/profile" className="text-xl">Profile</Link>
                            <Button onClick={handleLogout}>Log Out</Button> 
                            </>
                        )
                        : 
                        (
                            <>
                             <Link to="/login">Log In</Link>
                             <Link to="/register">Sign Up</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}