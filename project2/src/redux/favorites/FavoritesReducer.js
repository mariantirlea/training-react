import { FavoritesConstants } from "./FavoritesConstants";

const initialState = {
    products: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case FavoritesConstants.ADD:
            const product = state.products.find(p => p.product.id === action.payload.id);

            if(product){
                const otherProducts = state.products.filter(p => p.product.id !== action.payload.id);
                const updatedProduct = {...product, quantity: product.quantity + 1};
    
                return {
                    ...state,
                    products: [...otherProducts, updatedProduct]
                }
            }else{
                return {
                    ...state,
                    products: [...state.products, {product: action.payload, quantity: 1}]
                }
            }

        default: return state;
    }
}

export default reducer;