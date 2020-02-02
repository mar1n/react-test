import React from 'react';

export default class Chess extends React.Component {
    constructor() {
        super();
        this.state = {
            swap: true
        }
        this.ClickSwap = this.ClickSwap.bind(this);
    }
    ClickSwap() {
        this.setState({ swap: !this.state.swap })
    }
    render() {
        return (
            <>
                <label
                    className='top'
                >
                    {
                        this.state.swap
                            ? this.props.black
                            : this.props.white
                    }
                </label>
                <label
                    className='bottom'
                >
                    {
                        this.state.swap
                            ? this.props.white
                            : this.props.black
                    }
                </label>
                <button onClick={this.ClickSwap}></button>
            </>
        )
    }
}