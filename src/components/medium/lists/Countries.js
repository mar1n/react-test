import React from 'react';

export default class Countries extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return(
            <>
                {
                    this.props.list.filter(country => country.includes(this.state.value)).map((country) => {
                        return <p key={country}>{country}</p>;
                    })
                }
                <input
                    type='text'
                    value={this.state.value}
                    onChange={(e) => this.setState({value: e.target.value})}
                />
            </>
        )
    }
}