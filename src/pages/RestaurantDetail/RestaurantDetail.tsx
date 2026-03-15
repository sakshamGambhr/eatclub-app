import { useParams } from "react-router-dom";
import { useRestaurants } from "../../hooks/useRestaurantData";

import "./RestaurantDetail.css"

const RestaurantDetail = () => {
    const {id} = useParams();
    const {restaurants} = useRestaurants()

    const restaurant = restaurants.find(restaurant => restaurant.objectId === id);
    if(!restaurant){
        return (<p>Restaurant not found!</p>)
    }

    return (
        <div className="restaurant-detail">
            <img 
                src={restaurant.imageLink}
                alt={restaurant.name}
                className="restaurant-detail-image"
            />
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
                {restaurant.deals.map((deal) => (
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