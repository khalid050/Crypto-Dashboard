import React from 'react'

export default class Search extends React.Component {
    render() {
        return (
            <form>
                <label>
                <input id='currency-filter' type="text" name="name" placeholder='Search'/>
                </label>
                <input id='search-button' type="submit" value="Submit" />
            </form>
        )
    }
}