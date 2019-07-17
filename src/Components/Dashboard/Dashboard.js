import React, { Component } from 'react'
import {getUser} from '../../ducks/reducer'
import {connect} from 'react-redux'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            checked: true,
            posts: []
        }
    }

    componentDidMount() {
        this.props.getUser()
    }

    getPosts = async() => {
        if (!this.props.user) {
            await this.props.getUser()
        }
        let {user_id} = this.props.user
        axios.get(`/posts/getposts?user_id=${user_id}`)
        .then(response => {
            this.setState ({ posts: response.data })
        })
    }

    render () {
        return (

            <div>
                <button onClick={this.getPosts}>Get Posts</button>
                {this.state.posts.map(post => {
                    return (
                        <div>
                            <h1>{post.title}</h1>
                            <h2>Author: {post.username}</h2>
                            <h3>{post.message}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.data
    }
}

export default connect(mapStateToProps, {getUser})(Dashboard)