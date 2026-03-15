import { useRestaurants } from "../../hooks/useRestaurantData";
import RestaurantCard from "../../components/RestaurantsCard/RestaurantCard";
import SearchBar from "../../components/SearchBar/SearchBar";

import "./RestaurantList.css";

const RestaurantList = () => {
  const { restaurants, loading, error, query, setQuery } = useRestaurants();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="restaurant-container">
      <SearchBar 
        value={query}
        onChange={setQuery}
      />

      {restaurants.length === 0 ? (
        <div className="empty-state">
          No restaurants available"
        </div>
      ) : (
        <div className="restaurant-list">
          {restaurants.map((restaurant) => (
            <RestaurantCard 
              key={restaurant.objectId}
              restaurant={restaurant}
            />
          ))}
        </div>
      )}
    </div>
      
  );
};

export default RestaurantList;