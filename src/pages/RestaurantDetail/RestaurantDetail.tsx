import { useLocation,useNavigate } from "react-router-dom";
import type { Restaurant } from "../../types/restaurant";
import "./RestaurantDetail.css"

const RestaurantDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const restaurant = location.state?.restaurant as Restaurant;
    const sortedDeals = [...restaurant.deals].sort(
        (a, b) => Number(b.discount) - Number(a.discount)
    )
    if(!restaurant){
        return (<p>Restaurant not found!</p>)
    }

    return (
        <div className="restaurant-detail">
            <button
                className="back-button"
                onClick={() => navigate(-1)}
            >
                Back
            </button>
            <img 
                src={restaurant.imageLink}
                alt={restaurant.name}
                className="restaurant-detail-image"
            />
            <div className="restaurant-actions">
                <div className="action-item">
                    Menu
                </div>
                <div className="action-item">
                    Call
                </div>
                <div className="action-item">
                    Location
                </div>
                <div className="action-item">
                    Favourite
                </div>
            </div>
            <hr className="restaurant-detail-hr"/>
            <h1 className="restaurant-detail-name">
                {restaurant.name}
            </h1>
            <p className="restaurant-detail-cuisine">
                {restaurant.cuisines.join(" • ")}
            </p>
            <hr className="restaurant-detail-hr"/>
            <div className="restaurant-detail-info">
                <p className="restaurant-hours">
                Hours: {restaurant.open.toUpperCase()} - {restaurant.close.toUpperCase()}
                </p>

                <p className="restaurant-address">
                {restaurant.address1}, {restaurant.suburb}
                </p>
            </div>
            <hr className="restaurant-detail-hr"/>
            <div className="restaurant-detail-deals">
                {sortedDeals.map((deal) => (
                    <div key={deal.objectId} className="deal-card">
                    <span className="deal-discount">
                        {deal.discount}% OFF
                    </span>

                    <button className="redeem-button">
                        Redeem
                    </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantDetail