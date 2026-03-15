import { useRestaurants } from "../../hooks/useRestaurantData";
import RestaurantCard from "../../components/RestaurantsCard/RestaurantCard";

import "./RestaurantList.css";

const RestaurantList = () => {
  const { restaurants, loading, error } = useRestaurants();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestaurantCard 
          key={restaurant.objectId}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
};

export default RestaurantList;