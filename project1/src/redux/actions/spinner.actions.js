export class SpinnerActions {
    static SHOW = '[Spinner] show';
    static HIDE = '[Spinner] hide';
}

export function showSpinner(){
    return {
        type: SpinnerActions.SHOW
    }
}

export function hideSpinner(){
    return {
        type: SpinnerActions.HIDE
    }
}