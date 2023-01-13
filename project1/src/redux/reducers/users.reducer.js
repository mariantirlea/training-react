import { UsersActions } from "../actions/users.actions";

const initialState = {
    users: [],
    isAddNewUser: false,
    deletedUser: '',
    showDeletedUserToast: false
}

function reducer(state = initialState, action){

    switch(action.type){
        case UsersActions.FETCHED:
            return {...state, users: action.payload}

        case UsersActions.FETCH_FAILED:
            console.log(action.payload);
            return {...state, users: []}

        case UsersActions.SHOW_ADD_DIALOG:
            return {...state, isAddNewUser: true}

        case UsersActions.HIDE_ADD_DIALOG:
            return {...state, isAddNewUser: false}
            
        case UsersActions.ADD:

            const user = action.payload
            const oldUsers = state.users;
  
            user.id = Math.max([],...oldUsers.map(user => user.id)) + 1;
            user.image = "https://api.lorem.space/image/face?w=400&h=400&random=" + Date.now();
            user.salary = 10000;
    
            return {...state, users: [...oldUsers, user].sort((left, right) => {
                if (left.id < right.id) {
                    return 1;
                }
                if (left.id > right.id) {
                    return -1;
                }
                return 0;
                })
            };

        case UsersActions.DELETE_BY_ID:
            return {...state, 
                showDeletedUserToast: true, 
                deletedUser: state.users.filter((user) => user.id === action.payload)[0].name,
                users: state.users.filter((user) => user.id !== action.payload)
            };

        case UsersActions.HIDE_DELETED_MESSAGE:
            return {...state, showDeletedUserToast: false};

        default:
            return state;
    }

}

export default reducer;