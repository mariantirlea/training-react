import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import settingsReducer from './reducers/settings.reducer';
import usersReducer from './reducers/users.reducer';
import spinnerReducer from './reducers/spinner.reducer';
import postsReducer from './reducers/posts.reducer';

const reducer = combineReducers({
    settings: settingsReducer,
    usersInfo: usersReducer,
    spinner: spinnerReducer,
    postsInfo: postsReducer
});

const store = createStore(reducer, composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk)));

export default store;