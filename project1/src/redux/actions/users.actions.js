import { hideSpinner, showSpinner } from "./spinner.actions";

export class UsersActions {
    static ADD = '[Users] add';
    static DELETE_BY_ID = '[Users] delete by id';
    static FETCHED = '[Users] fetched';
    static FETCH_FAILED = '[Users] fetch failed';
    static SHOW_ADD_DIALOG = '[Users] show new user dialog';
    static HIDE_ADD_DIALOG = '[Users] hide new user dialog';
    static HIDE_DELETED_MESSAGE = '[Users] hide deleted user message';
}

export function fetchUsers(){

    return (dispatch, getState) => {

        dispatch(showSpinner());

        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((data) => dispatch(usersFetched(data.map((current, index) => {
            return {
              id: current.id,
              name: current.name,
              email: current.email,
              isVip: Math.random() < 0.2, //20% percent probability to be VIP
              image: ("https://api.lorem.space/image/face?w=400&h=400&random" + current.id),
              salary: (parseFloat((Math.random() * 10000)) + 5000).toFixed(2)
            }
          })))
          )
          .catch((err) => dispatch(usersFetchFailed(err)))
          .finally(() => setTimeout(() => dispatch(hideSpinner()), getState().settings.isDemo ? 3000 : 0));
    }

}

export function usersFetched(data){
    return {
        type: UsersActions.FETCHED,
        payload: data
    }
}

export function newUser(data){
    return {
        type: UsersActions.ADD,
        payload: data
    }
}

export function deleteUserById(id){
    return {
        type: UsersActions.DELETE_BY_ID,
        payload: id
    }
}

export function usersFetchFailed(err){
    return {
        type: UsersActions.FETCH_FAILED,
        payload: err
    }
}

export function showNewUserDialog(){
    return {
        type: UsersActions.SHOW_ADD_DIALOG
    }
}

export function hideNewUserDialog(){
    return {
        type: UsersActions.HIDE_ADD_DIALOG
    }
}

export function hideDeletedUserToast(){
    return {
        type: UsersActions.HIDE_DELETED_MESSAGE
    }
}
