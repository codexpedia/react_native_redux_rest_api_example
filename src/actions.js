export const FETCH_ACCOUNT_LOADING = 'FETCH_ACCOUNT_LOADING';
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';
export const FETCH_ACCOUNT_ERROR = 'FETCH_ACCOUNT_ERROR';

export function fetchAccountLoading() {
    return {
        type: FETCH_ACCOUNT_LOADING
    }
}

export function fetchAccountSuccess(account) {
    console.log(`${Date()} 7777777777>>> fetchAccountSuccess account: ` + JSON.stringify(account));
    return {
        type: FETCH_ACCOUNT_SUCCESS,
        payload: account
    }
}

export function fetchAccountError(error) {
    return {
        type: FETCH_ACCOUNT_ERROR,
        error: error
    }
}
