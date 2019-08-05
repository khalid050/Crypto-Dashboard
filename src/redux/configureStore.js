import {createStore, combineReducers} from 'redux'
import currenciesUpdateReducer from './reducers/selectedCurrencies'


export default () => {
    const store = createStore(
        combineReducers({
            currencies: currenciesUpdateReducer
        })
    )
    return store
}



  