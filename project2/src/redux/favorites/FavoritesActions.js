import { FavoritesConstants } from "./FavoritesConstants";

export function addToFavorites(product){
    return {
        type: FavoritesConstants.ADD,
        payload: product
    }
}

export function removeFromFavoritesById(id){
    return {
        type: FavoritesConstants.REMOVE,
        payload: id
    }
}