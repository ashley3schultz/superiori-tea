import React, { Component } from 'react';
import { connect } from 'react-redux'
import {updateUser} from "../actions/game";

class UserInput extends Component {
    state = {
        input: ''
    }

    handleInput = (event) => {
        const input = event.target.value
        this.setState({input: input})
    } 

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateUser(this.state.input)
        this.setState({input: ''})
    }

    render() {
        return (
            <div className='UserInput'>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    value={this.state.input}
                    onChange={this.handleInput}
                    placeholder='Enter Your Name'
                    />
                </form>
            </div>
        )
    }
}
  
  const mapDispatchToProps = {
    updateUser,
  }
  
  export default connect(null, mapDispatchToProps)(UserInput)
