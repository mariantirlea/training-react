import { SpinnerActions } from "../actions/spinner.actions";

const initialState = {
    isLoading: false
}

function reducer(state = initialState, action){

    switch(action.type){
        case SpinnerActions.SHOW:
            return {...state, isLoading: true}

        case SpinnerActions.HIDE:
            return {...state, isLoading: false}
    
        default:
            return state;
    }

}

export default reducer;