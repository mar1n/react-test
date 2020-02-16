import React from 'react';

export default class EmailClinet extends React.Component {
    constructor() {
        super();
        this.state = {
            markAsRead: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            markAsRead: true
        });
    }
    render() {
        return (
            <div>
                <MarkAsReadButton handleClick={this.handleClick} />
            </div>
        )
    }
}

export function MarkAsReadButton(props) {
    return (
        <button
            onClick={props.handleClick}
        />
    );
}