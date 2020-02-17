import { fetchAccountError, fetchAccountLoading, fetchAccountSuccess } from './actions';

export default function fetchAccount(accountId) {
    return dispatch => {

        dispatch(fetchAccountLoading());

        fetch(`https://api.github.com/users/${accountId}`)
        .then(res => res.json())
        .then(res => {
            console.log(`${Date()} 6666666666>>> fetch account api raw result: ` + JSON.stringify(res));
            if (res.error) {
                throw(res.error);
            }

            dispatch(fetchAccountSuccess(res));

            return res;
        })
        .catch(error => {
            dispatch(fetchAccountError(error));
        })
    }
}
