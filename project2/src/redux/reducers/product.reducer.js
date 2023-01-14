import { ProductActions } from "../actions/product.actions";

const initialState = {
    cartProducts: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case ProductActions.ADD_TO_CART:
            const product = state.cartProducts.find(p => p.product.id === action.payload.id);

            if(product){
                const otherProducts = state.cartProducts.filter(p => p.product.id !== action.payload.id);
                const updatedProduct = {...product, quantity: product.quantity + 1};
    
                return {
                    ...state,
                    cartProducts: [...otherProducts, updatedProduct]
                }
            }else{
                return {
                    ...state,
                    cartProducts: [...state.cartProducts, {product: action.payload, quantity: 1}]
                }
            }

        default: return state;
    }
}

export default reducer;