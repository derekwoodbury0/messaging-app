import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import routes from './routes'
import { withRouter } from 'react-router-dom'
import { getUser } from './ducks/reducer'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
      return (
          <div className="App">
            {this.props.location.pathname === '/' ?
            null
            :
            <Nav />
            }
            {routes}
          </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.data
  }
  }

export default connect(mapStateToProps, {getUser})(withRouter(App))
