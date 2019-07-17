import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './Nav.css'
import homeLogo from './home_logo.png'
import newPostLogo from './new_post.png'
import logoutLogo from './shut_down.png'
import { connect } from 'react-redux'
import {logout} from '../../ducks/reducer'

class Nav extends Component {
    render () {
        console.log(this.props)
        return (
            <div className="nav-bar">
                {this.props.user ?
                    <div>
                        <img src={this.props.user.image} alt='' height="100" width='100' />
                        <h1>{this.props.user.username}</h1>
                    </div>
                :
                null
                }
                <Link to={`${this.props.match.url}dashboard`}>
                    <img src={homeLogo} alt='' height='100' width='100'/>
                </Link>
                <Link to={`${this.props.match.url}new`}>
                <img src={newPostLogo} alt='' height='100' width='100'/>
                </Link>
                <Link to='/'>
                <img src={logoutLogo} alt='' height='100' width='100' onClick={this.props.logout}/>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.data
    }
}

export default connect(mapStateToProps, { logout })(withRouter(Nav))