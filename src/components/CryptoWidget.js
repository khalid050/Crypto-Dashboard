import React from 'react'

export default class CryptoWidget extends React.Component {
    render() {
        return (
            <div className='widget'>
                <p>{this.props.name}</p>   
                <p> Exchange Rate:${this.props.price}</p>
                <button onClick={()=>this.props.deleteOneCurrency(this.props.name)}>Remove</button>           
            </div>
        )
    }
}


