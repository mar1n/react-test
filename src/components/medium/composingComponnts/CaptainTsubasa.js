import React from 'react';

export default class CaptainTsubasa extends React.Component {
    constructor() {
		super();
		this.state = {
			name: 'Kojiro Hyuga',
			position: 'Forward'
		};
	}
	render() {
		return(
			<>
			<div className="in-bar" />
				<Name name={this.state.name} />
				<Position position={this.state.position} />
			</>
		);
	}
}

export function Name({name}) {
	return (<div>Name: {name}</div>);
}

export function Position({position}) {
	return (<div>Position: {position}</div>);
}