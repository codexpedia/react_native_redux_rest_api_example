import { FETCH_ACCOUNT_ERROR, FETCH_ACCOUNT_LOADING, FETCH_ACCOUNT_SUCCESS } from './actions';

export const initialState = {
    loading: false,
    account: [],
    error: null
}

function selectInterestedAccountInfo(account) {
    return Object.keys(account).reduce(function(obj, k) {
        if (["login", "url", "name", "created_at", "bio", "email", "public_repos"].includes(k)) {
            obj[k] = account[k];
        }
        return obj;
      }, {});
}

export function accountReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ACCOUNT_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_ACCOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                account: selectInterestedAccountInfo(action.payload)
            }
        case FETCH_ACCOUNT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getAccountSuccess = state => state.account;
export const getAccountLoading = state => state.loading;
export const getAccountError = state => state.error;
