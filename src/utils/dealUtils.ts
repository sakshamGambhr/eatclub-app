import type { Deal } from "../types/restaurant";

export const getBestDeal = (deals: Deal[]) => {
    if(!deals || deals.length === 0){
        return null;
    }
    return Math.max(...deals.map((deal) => Number(deal.discount)))
}