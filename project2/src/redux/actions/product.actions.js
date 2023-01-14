export class ProductActions {
    static ADD_TO_CART = '[Products] Add to cart'
}

export function addToCart(product){
    return {
        type: ProductActions.ADD_TO_CART,
        payload: product
    }
}