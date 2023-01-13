import { PostsActions } from "../actions/posts.actions";

const initialState = {
    posts: []
}

function reducer(state = initialState, action){

    switch(action.type){
        case PostsActions.DATA_FETCHED:
            return {...state, posts: action.payload}

        case PostsActions.DATA_NOT_FETCHED:
            console.log(action.payload);
            return {...state, posts: []}

        default:
            return state;
    }

}

export default reducer;