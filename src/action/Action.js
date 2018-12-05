import type from '../constance/Constance'
import getTemp from '../api/API'
startFetchData = () => {
    return { type: type.START_FETCH }
}

fetchSuccess = (cityName, temp) => {
    return {
        type: type.FETCH_SUCCESS,
        cityName,
        temp
    }
}

function fetchError () {
    return { type: type.FETCH_ERROR };
}

export const searchTemp = (nameCity) => {
    return dispatch => {
        dispatch({ type: type.START_FETCH })
        getTemp(nameCity)
            .then(temp =>
                dispatch(fetchSuccess(nameCity, temp)))
            .catch(() => dispatch(fetchError()))
    }
}

