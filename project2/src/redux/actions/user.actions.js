import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, FacebookAuthProvider} from 'firebase/auth';
import {app} from '../../firebase-init';

export class UserActions {
    static LOGIN_SUCCESSFUL = '[User] Login successful'
    static LOGOUT_SUCCESSFUL = '[User] Logour successful'
    static AUTH_ERROR = '[User] Auth error'
    static USER_DATA_LOADED = '[User] Data loaded'

}

export function initUserData(){
    const auth = getAuth(app);

    return (dispatch) => {
        onAuthStateChanged(auth, (user) => {

            if(user){
                dispatch(loginSuccessful(user))
            }
            
        })
    }
}

export function login(isFacebook){
    const auth = getAuth(app);

    return (dispatch) => {
        let provider = new GoogleAuthProvider();

        if(isFacebook){
            provider = new FacebookAuthProvider();
        }

        signInWithPopup(auth, provider).then((data) => {
            dispatch(loginSuccessful(data.user));
        })
        .catch( e => {
            dispatch(actionError(e));
        })
    }
}

export function logout(){
    const auth = getAuth(app);

    return (dispatch) => {
        signOut(auth).then(() => {
            dispatch(logoutSuccessful())
        })
        .catch( e => {
            dispatch(actionError(e));
        })
    }
}

export function loginSuccessful(data){
    return {
        type: UserActions.LOGIN_SUCCESSFUL,
        payload: data
    }
}

export function logoutSuccessful(){
    return {
        type: UserActions.LOGOUT_SUCCESSFUL
    }
}

export function actionError(e){
    return {
        type: UserActions.AUTH_ERROR,
        payload: e
    }
}


