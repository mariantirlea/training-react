import { UserActions } from "../actions/user.actions";

const initialState = {
    user: undefined,
    error: undefined
}

function reducer(state = initialState, action){
    switch(action.type){
        case UserActions.LOGIN_SUCCESSFUL:
            return {...state, user: action.payload, error: undefined}
        case UserActions.LOGOUT_SUCCESSFUL:
            return {...state, user: undefined, error: undefined}
        case UserActions.AUTH_ERROR:
            return {...state, user: undefined, error: action.payload}
        default:
            return state;
    }

}

export default reducer;