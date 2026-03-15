import { useEffect, useState, useMemo } from "react";
import { fetchRestaurants } from "../services/restaurants";
import type { Restaurant } from "../types/restaurant";

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (error) {
        setError(`Failed to load restaurants ${error}`);
      } finally {
        setLoading(false);
      }
    };

    loadRestaurants();
  }, []);

  const filteredRestaurants = useMemo(() => {
    const filtered = restaurants.filter((restaurant) => {
      const search = query.toLocaleLowerCase();

      const nameMatch = restaurant.name.toLocaleLowerCase().includes(search)
      const cuisineMatch = restaurant.cuisines.join(" ").toLocaleLowerCase().includes(search)

      return nameMatch || cuisineMatch
    })

    const sorted = filtered.sort((a,b) => {
      const bestDealA = Math.max(...a.deals.map((d) => Number(d.discount)))
      const bestDealB = Math.max(...b.deals.map((d) => Number(d.discount)))
      
      return bestDealB - bestDealA
    })

    return sorted;
  }, [restaurants, query])

  return { restaurants: filteredRestaurants, loading, error, query, setQuery };
};