import React from 'react'
import Search from './Search'
import WidgetDisplay from './WidgetDisplay'

import Header from './Header'
const cryptocurrencies = require('cryptocurrencies');


export default class CryptoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: Object.keys(cryptocurrencies),
            fullNames: Object.values(cryptocurrencies),
            prices: {
            },
            selectedCurrencies: [],
        }
        this.fetchData = this.fetchData.bind(this)
    }

    fetchData(input) {

        fetch(`https://min-api.cryptocompare.com/data/price?fsym=${input}&tsyms=USD,JPY,EUR`).then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error('Unable to fetch currency')
            }
        }).then(data => {
            const newState = { ...this.state.prices }
            newState[cryptocurrencies[input]] = data.USD 

            this.setState(() => ({
                prices: newState,
                selectedCurrencies: Object.keys(newState)

            }))
        })
    }


    render() {
        return (
            <div>
                <Header />
                <Search currencies={this.state.currencies} fetchData={this.fetchData} />
                <WidgetDisplay prices={this.state.prices} currencies={this.state.selectedCurrencies} />

            </div>
        )
    }
}

