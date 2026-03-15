import { Link } from "react-router-dom";
import type { Restaurant } from "../../types/restaurant";
import { getBestDeal } from "../../utils/dealUtils";
import "./RestaurantCard.css"

interface Props {
    restaurant: Restaurant
}

const RestaurantCard = ({restaurant}: Props) => {
    const { name, cuisines, imageLink, address1, suburb} = restaurant;

    const bestDeal = getBestDeal(restaurant.deals);
    return (
        <Link 
            to={`/restaurant/${restaurant.objectId}`}
            state={{restaurant}}
            className="restaurant-card">
            <div className="restaurant-card-image">
                <img 
                    src={imageLink}
                    alt={name}
                />
                {bestDeal && (
                    <span className="restaurant-card-badge">
                        {bestDeal}% OFF
                    </span>
                )}
            </div>
            <div className="restaurant-card-content">
                <h3 className="restaurant-card-name">
                    {name}
                </h3>
                <p className="restaurant-card-address">
                    {address1}, {suburb}
                </p>
                <p className="restaurant-card-cuisines">
                    {cuisines.join(" • ")}
                </p>
            </div>
        </Link>
    )

}

export default RestaurantCard