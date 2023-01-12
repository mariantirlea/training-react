import { applyMiddleware, combineReducers, createStore } from "redux";
import settingsReducer from './reducers/settings.reducer';
import thunk from "redux-thunk";

const reducer = combineReducers({
    settings: settingsReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;