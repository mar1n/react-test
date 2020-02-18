import React from 'react';

export default class BeerStoreAge extends React.Component {
    constructor() {
        super();
        this.state = {
            message: '',
            submit: false,
            question: false
        }
    }

    handleSelect(event) {
        if(event.target.value === '>=18') {
            this.setState({
                question: true,
                message: ''
            })
        } else {
            this.setState({
                message: 'Sorry, you must be 18+ to proceed',
                question: false,
                submit: false
            });
        }
    }

    handleQuestion(event) {
        if(event.target.value === '1989') {
            this.setState({
                message: 'Enjoy :)',
                submit: true
            })
        } else {
            this.setState({
                message: 'Wrong answer!',
                submit: false
            });
        }
    }

    render() {
        return(
            <>
                <select onChange={this.handleSelect.bind(this)} >
                    <option value="<18" />
                    <option value=">=18" />
                </select>
                {
                    this.state.question
                    ? <input
                        type='text'
                        onChange={this.handleQuestion.bind(this)}
                        placeholder='When did the German wall fall?'
                    />
                    : <div></div>
                }
                <label
                    className='message'>
                        {this.state.message}
                </label>
                <input 
                    type='submit'
                    disabled={!this.state.submit}
                />
            </>
        )
    }
}