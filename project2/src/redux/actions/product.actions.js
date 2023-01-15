export class ProductActions {
    static ADD_TO_CART = '[Products] Add to cart';
    static REMOVE_FROM_CART = '[Products] Remove from cart';
}

export function addToCart(product){
    return {
        type: ProductActions.ADD_TO_CART,
        payload: product
    }
}

export function removeFromCartById(id){
    return {
        type: ProductActions.REMOVE_FROM_CART,
        payload: id
    }
}
