import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { pizzaContext } from "../Context/Context";
import "../assets/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
    const { pedido } = useContext(pizzaContext)
    
    // Ver total en carrito
    const total = pedido.reduce((e, { price, count }) => e + price * count, 0);

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "notActive")

    return (
        <div className="navbar">
            <div className="enlaces">
                <NavLink className={setActiveClass} to="/">
                    GameZone!
                </NavLink>
                <NavLink className={setActiveClass} to="/login">
                    Login
                </NavLink>
                <NavLink className={setActiveClass} to="/Registro"> 
                    Registrate
                </NavLink>

                <NavLink className={setActiveClass} to="/Carrito">
                    🛒 Carrito: ${total ? total.toLocaleString() : 0}  
                </NavLink>
            </div>
        </div>
    )
}