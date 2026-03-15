import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const location = useLocation();

    const isRestaurantSection = location.pathname === "/" || location.pathname.startsWith("/restaurant");

    return (
        <header className="navbar">
            <div className="navbar-icon">
                User
            </div>

            <Link
                to="/"
                className={`navbar-icon navbar-center ${isRestaurantSection ? "active" : ""}`}
            >
                Restaurants
            </Link>
            <div className="navbar-icon">
                Menu
            </div>
        </header>
    )
}

export default Navbar;