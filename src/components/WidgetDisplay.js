import React from 'react'
import CryptoWidget from './CryptoWidget'


export default class WidgetDisplay extends React.Component {

    render() {
        
        return (
            <div className='widget-display'>
                {
                    this.props.currencies.length > 0 && this.props.currencies.map(item => (
                        <CryptoWidget key={item} name={item} price={this.props.prices[item]} deleteOneCurrency={this.props.deleteOneCurrency} />
                    ))
                }
            </div>
        )
    }
}
