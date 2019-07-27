import React from 'react'
import Search from './Search'
import WidgetDisplay from './WidgetDisplay'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import SigninSignup from './SigninSignup'
import Header from './Header'


const cryptocurrencies = require('cryptocurrencies');

export default class App extends React.Component {
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
        this.deleteCurrencies = this.deleteCurrencies.bind(this)
        this.deleteOneCurrency = this.deleteOneCurrency.bind(this)
    }

    fetchData(input) {
        fetch(`https://min-api.cryptocompare.com/data/price?fsym=${input}&tsyms=USD,JPY,EUR`).then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error('Unable to fetch currency')
            }
            //store data into state
        }).then(data => {
            const newState = { ...this.state.prices }
            newState[cryptocurrencies[input]] = data.USD

            this.setState(() => ({
                prices: newState,
                selectedCurrencies: Object.keys(newState)
            }))
        })
    }
    deleteCurrencies() {
        this.setState({ selectedCurrencies: [], prices: {} })
    }

    deleteOneCurrency(currency){
        let newState = [...this.state.selectedCurrencies].filter(item=> item !== currency)
        let prices = {...this.state.prices}
        delete prices[currency]
        this.setState(()=>({
           selectedCurrencies: newState,
           prices : prices
        }))
    }
    render() {
        console.log(this.state.prices)
        console.log(this.state.selectedCurrencies)

        return (
            <div>
                <BrowserRouter>
                        <Route exact path='/' component={Header} />
                        <Route exact path='/' component={()=> <Search currencies={this.state.currencies} fetchData={this.fetchData} deleteCurrencies={this.deleteCurrencies}/>}  />
                        <Route exact path ='/' component={()=> <WidgetDisplay prices={this.state.prices} currencies={this.state.selectedCurrencies} deleteOneCurrency={this.deleteOneCurrency} /> }  /> 
                        <Route path='/signup' component={SigninSignup} />
                </BrowserRouter>
            </div>
        )
    }
}

