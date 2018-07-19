import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import HomeContainer from './containers/HomeContainer'
import MyNotesContainer from './containers/MyNotesContainer'
import NewNoteContainer from './containers/NewNoteContainer'
import MyListsContainer from './containers/MyListsContainer'
import SignupContainer from './containers/SignupContainer'
import LoginContainer from './containers/LoginContainer'
import NavBar from './components/NavBar'
import { fetchNotes } from './actions/noteActions'
import { connect } from 'react-redux'



class App extends Component {

  componentDidMount(){
    this.props.fetchNotes(1)
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/notes" exact component={MyNotesContainer} />
          <Route path="/notes/new" exact component={NewNoteContainer} />
          <Route path="/notes/:id" component={MyNotesContainer} />
          <Route path="/lists" exact component={MyListsContainer} />
          <Route path="/signup" exact component={SignupContainer} />
          <Route path="/login" exact component={LoginContainer} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(connect(null, { fetchNotes })(App));
