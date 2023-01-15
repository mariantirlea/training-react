import { FavoritesConstants } from "./FavoritesConstants";

const initialState = {
    products: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case FavoritesConstants.ADD:
            const product = state.products.find(p => p.product.id === action.payload.id);

            if(!product){
                return {
                    ...state,
                    products: [...state.products, {product: action.payload}]
                }
            }else{
                return state;
            }
            
        case FavoritesConstants.REMOVE:
            const productToRemove = state.products.find(p => p.product.id === action.payload);

            if(productToRemove){

                return {
                    ...state,
                    products: state.products.filter((product) => product.product.id !== action.payload)
                }
            }else{
                return state;
            }

        default: return state;
    }
}

export default reducer;