import type from '../constance/Constance'

const appState = {
    cityName: '',
    isLoading: false,
    isError: false,
    temp: ''
}
export const reducerSearch = (state = appState, action) => {
    switch (action.type) {
        case type.FETCH_ERROR:
            return { ...state, isError: true, isLoading: false };
        case type.FETCH_SUCCESS:
            return { ...state, temp: action.temp, cityName: action.cityName, isError: false, isLoading: false };
        case type.START_FETCH:
            console.log("reducerSearch")
            return { ...state, isLoading: true };
        default:
            return state;
    }
}