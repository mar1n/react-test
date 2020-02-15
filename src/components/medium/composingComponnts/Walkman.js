import React from 'react';

export default class Walkman extends React.Component {
    constructor() {
        super();
        this.state = {
            switch: true
        }
    }

    render() {
        return(
            <>
                <button onClick={()=> this.setState({ switch: !this.state.switch})}></button>
                {this.state.switch ? <SideA /> : <SideB />}
            </>
        );
    }
}

export const SideA = () => <>Spice Girls</>;
export const SideB = () => <>Back Street Boys</>;