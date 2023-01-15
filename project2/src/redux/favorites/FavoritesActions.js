import { FavoritesConstants } from "./FavoritesConstants";

export function addToFavorites(product){
    return {
        type: FavoritesConstants.ADD,
        payload: product
    }
}