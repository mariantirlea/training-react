export class SettingsActions {
    static CHANGE_BG_COLOR = '[Settings] Change bg color';
    static CHANGE_PAGE_TXT_COLOR = '[Settings] Change page txt color';
    static CHANGE_CARDS_TXT_COLOR = '[Settings] Change cards txt color';
    static CHANGE_DEMO_MODE = '[Settings] Change demo mode';
}

export function changeBgColor(color){
    return {
        type: SettingsActions.CHANGE_BG_COLOR,
        payload: color
    }
}

export function changePageTxtColor(color){
    return {
        type: SettingsActions.CHANGE_PAGE_TXT_COLOR,
        payload: color
    }
}

export function changeCardsTxtColor(color){
    return {
        type: SettingsActions.CHANGE_CARDS_TXT_COLOR,
        payload: color
    }
}

export function changeDemoMode(isDemo){
    return {
        type: SettingsActions.CHANGE_DEMO_MODE,
        payload: isDemo
    }
}