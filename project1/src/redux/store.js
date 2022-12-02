import { combineReducers, createStore } from "redux";
import settingsReducer from './reducers/settings.reducer';

const reducer = combineReducers({
    settings: settingsReducer
});

const store = createStore(reducer);

export default store;