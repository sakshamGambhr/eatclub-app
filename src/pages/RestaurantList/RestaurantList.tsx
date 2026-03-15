import { useRestaurants } from "../../hooks/useRestaurantData";

const RestaurantList = () => {
  const { restaurants, loading, error } = useRestaurants();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.objectId}>{restaurant.name}</div>
      ))}
    </div>
  );
};

export default RestaurantList;