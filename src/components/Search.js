import React from 'react'
import {connect} from 'react-redux'


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCurrencies: [],
        }
        this.selectCurrency = this.selectCurrency.bind(this)
    }

    

    selectCurrency(e) {
        e.preventDefault();
        const currency = e.target.elements.currency.value.toUpperCase()

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
            <div>
                <form onSubmit={this.selectCurrency}>

                    <label>
                        <input id='currency-filter' type="text" name="name" placeholder='Search' name='currency' />
                        <button id='search-button' type="submit">Submit</button>
                    </label>
                </form>

                <form id='delete-all' onSubmit={this.props.deleteCurrencies}>

                    <label>
                        <button type="submit">delete</button>
                    </label>
                </form>

             
            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return {
        currencies: state.currencies.currencies,
    } 
}

export default connect(mapStateToProps)(Search)