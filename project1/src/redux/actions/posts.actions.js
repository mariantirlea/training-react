import { hideSpinner, showSpinner } from "./spinner.actions";

export class PostsActions {
    static DATA_FETCHED = '[Posts] Data fetched';
    static DATA_NOT_FETCHED = '[Posts] Fetch failed';
}

export function fetchPosts(){

    return (dispatch, getState) => {

        dispatch(showSpinner());

        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => dispatch(postsFetched(data.map((current) => {
                return {
                    id: current.id,
                    userId: current.userId,
                    title: capitalizeFirst(current.title),
                    body: capitalizeFirst(current.body),
                };
              }))),
          )
          .catch((err) => dispatch(postsFetchFailed(err)))
          .finally(() => setTimeout(() => dispatch(hideSpinner()), getState().settings.isDemo ? 3000 : 0));
    }

}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function postsFetched(data){
    return {
        type: PostsActions.DATA_FETCHED,
        payload: data
    }
}

export function postsFetchFailed(err){
    return {
        type: PostsActions.DATA_NOT_FETCHED,
        payload: err
    }
}
