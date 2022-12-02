import { SettingsActions } from "../actions/settings.actions";

const initialState = {
    bgColor: "#ffffff",
    pageTxtColor: "#000000",
    cardsTxtColor: "#ffffff",
    isDemo: false
}

function reducer(state = initialState, action){
    switch(action.type){
        case SettingsActions.CHANGE_BG_COLOR:
            return {
                ...state,
                bgColor: action.payload
            }
        case SettingsActions.CHANGE_PAGE_TXT_COLOR:
            return {
                ...state,
                pageTxtColor: action.payload
            }
        case SettingsActions.CHANGE_CARDS_TXT_COLOR:
            return {
                ...state,
                cardsTxtColor: action.payload
            }
        case SettingsActions.CHANGE_DEMO_MODE:
            return {
                ...state,
                isDemo: action.payload
            }

        default: return state;
    }
}

export default reducer;