import type { Restaurant, RestaurantsApiResponse } from "../types/restaurant";
const API_URL = "/data/restaurant.json";

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
    const response = await fetch(API_URL);
    
    if(!response.ok){
        throw new Error("Failed to fetch restaurants");
    }
    const data: RestaurantsApiResponse = await response.json();
    return data.restaurants
}