const cryptocurrencies = require('cryptocurrencies');

 const initialState = {
        //acronym of the currencies
        currencies: Object.keys(cryptocurrencies),
        //full names of the currencies
        fullNames: Object.values(cryptocurrencies),
        prices: {},
        selectedCurrencies: [],
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case  'ADD_CURRENCY':
            return {
                ...state,
                selectedCurrencies: [...state.selectedCurrencies, action.payload]
            }
        case 'DELETE_ALL_CURRENCIES':
            return {
                ...state,
                selectedCurrencies : [],
                prices: {}
            }
        case 'DELETE_ONE_CURRENCY':
            return {
                ...state,
                selectedCurrencies : [...this.state.selectedCurrencies].filter(item=> item !== currency)
            }
        default:
            return state
    }
}


