import React from 'react'

export default class CryptoWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='widget'>
                <p>{this.props.name}</p>   
               <p>${this.props.price}</p>           
            </div>
            
        )
    }
}