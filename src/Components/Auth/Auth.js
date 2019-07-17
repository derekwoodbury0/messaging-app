import React, { Component } from 'react'
import './Auth.css'
import heloLogo from './helo_logo.png'
import axios from 'axios'
import { connect } from 'react-redux'
import { login, getUser } from '../../ducks/reducer'

class Auth extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        let {value, name} = e.target
        this.setState ({ [name]: value})
    }

    register = () => {
        let { username, password } = this.state
        let image = `https://robohash.org/${username}`
        axios.post('/auth/register', {username, password, image})
        .then(this.props.history.push('/dashboard'))
        .catch(error => alert('username already exists'))
    }

    login = () => {
        let { username, password } = this.state
        // axios.post('/auth/login', {username, password})
        // .then(this.props.history.push('/dashboard'))
        this.props.login({username, password})
        this.props.history.push('/dashboard')
    }

    render () {
        return (
            <div className="login-full">
                <div className="login">
                    <img src={heloLogo} alt='' height='100' width='100' />
                    <h1>Helo</h1>
                    <h2>Username: <input name="username" onChange={this.handleChange}></input></h2>
                    <h2>Password: <input type="password" name="password" onChange={this.handleChange}></input></h2>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.register}>Register</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    login,
    getUser
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)