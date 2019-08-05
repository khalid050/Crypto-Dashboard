

export const addCurrency = (currency) =>{
    return { 
        type: 'ADD_CURRENCY',
        payload: currency
    }
}

export const deleteAllCurrencies = () => {
    return{
        type: 'DELETE_ALL_CURRENCIES'
    }
}

export const deleteOneCurrency = (currency)=>{
    return {
        type: 'DELETE_ONE_CURRENCY',
        payload: currency
    }
}
