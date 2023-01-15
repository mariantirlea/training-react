import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from './reducers/product.reducer';
import userReducer from './reducers/user.reducer';
import favoritesReducer from './favorites/FavoritesReducer';

const reducer = combineReducers({
    products: productReducer,
    userState: userReducer,
    favorites: favoritesReducer
});

const store = createStore(reducer, 
    composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk)))

export default store;