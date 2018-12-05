import SearchView from '../component/SearchView'
import { connect } from 'react-redux'
import { searchTemp } from '../action/Action'

const mapStateToProps = (state) => {

    console.log("value " + JSON.stringify(state.reducerSearch))

    return state.reducerSearch;

    // cityName: state.cityName,
    //     temp: state.temp,
    //         error: state.error,
    //             isLoading: state.isLoading
    // }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchTemp: val => dispatch(searchTemp(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchView)
