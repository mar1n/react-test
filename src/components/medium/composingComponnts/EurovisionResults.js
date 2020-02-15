import React from 'react';

export default class EurovisionResult extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: !this.state.loading}));
    }
    render() {
        return (
            <>
                {
                this.state.loading
                ? <Loading/>
                : <Results/>
                }
            </>
        )
    }
}

export const Loading = () => <>Loading results...</>;
export const Results = () => <>1. Israel (592p), 2. Cyprus (436p), 3. Austria (342p)</>;