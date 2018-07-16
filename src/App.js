import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomeContainer from './containers/HomeContainer'
import MyNotesContainer from './containers/MyNotesContainer'
import NewNoteContainer from './containers/NewNoteContainer'
import MyListsContainer from './containers/MyListsContainer'
import SignupContainer from './containers/SignupContainer'
import LoginContainer from './containers/LoginContainer'
import NavBar from './components/NavBar'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path="/" exact component={HomeContainer} />
        <Route path="/users/:id/notes" exact component={MyNotesContainer} />
        <Route path="/notes/new" exact component={NewNoteContainer} />
        <Route path="/lists" exact component={MyListsContainer} />
        <Route path="/signup" exact component={SignupContainer} />
        <Route path="/login" exact component={LoginContainer} />
      </div>
    );
  }
}

export default App;
