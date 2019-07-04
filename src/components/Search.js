import React from 'react'
// import CryptoWidget from './CryptoWidget'


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCurrencies: [],
        }
         this.selectCurrency = this.selectCurrency.bind(this)
    }

    selectCurrency(e) {
        e.preventDefault();
        const currency = e.target.elements.currency.value.trim()

        if (!this.state.selectedCurrencies.includes(currency) && this.props.currencies.includes(currency)) {
            this.setState(prevState => ({
                selectedCurrencies: [...prevState.selectedCurrencies, currency]
            }))
            e.target.elements.currency.value = ''
            this.props.fetchData(currency)
        }
    }

    render() {
        return (
            <form onSubmit={this.selectCurrency}>
            
                <label>
                    <input id='currency-filter' type="text" name="name" placeholder='Search' name='currency' />
                    <button id='search-button' type="submit">Submit</button>
                </label>
            </form>
        )
    }
}