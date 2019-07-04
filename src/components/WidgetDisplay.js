import React from 'react'
import CryptoWidget from './CryptoWidget'


export default class WidgetDisplay extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            <div className='widget-display'>
               {
                   this.props.currencies.map(item=>(
                       <CryptoWidget key={item} name={item} price={this.props.prices[item]}/>
                   ))
               }

            </div>
            
        )
    }
}