import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import MyNotesContainer from './containers/MyNotesContainer'
import NewNoteContainer from './containers/NewNoteContainer'
import MyListsContainer from './containers/MyListsContainer'
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
      </div>
    );
  }
}

export default App;
