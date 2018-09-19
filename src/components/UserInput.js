import React, { Component } from 'react';
import { connect } from 'react-redux'

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
            {console.log('state: ' + this.state.input)}
            {console.log('User: ' + this.props.user)}
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
const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    updateUser: input => dispatch({ type: "UPDATE_INPUT", input }),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
