import React, { Component } from 'react'
import NotesList from '../components/NotesList'
import NoteDetails from '../components/NoteDetails'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectNote } from '../actions/noteActions'


class MyNotesContainer extends Component {


  // This is ridiculous....see Mike
  // Need to run a function in response to a route changing


  render(){
    let { notes, location, selectNote, selectedNote } = this.props
    let { pathname } = location
    let noteClicked = !!pathname.split("/")[2]
    {noteClicked ? selectNote(pathname.split("/")[2]) : null}

    return(
      <Grid>
        <Grid.Row/>
        <Grid.Row>
          <Grid.Column width = {1}/>
          <Grid.Column width = {5}>
            <NotesList notes={notes} />
          </Grid.Column>

          <Grid.Column width = {9}>
            { selectedNote && notes.length > 0 ? <NoteDetails note={this.props.selectedNote}/> : <div> Nothing to show </div> }
          </Grid.Column>
          <Grid.Column width = {1}/>
        </Grid.Row>
      </Grid>
    )
  }

}

function mapStateToProps(state){
  return {
    notes: state.Notes.notes,
    selectedNote: state.Notes.selectedNote
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectNote: (noteId) => dispatch(selectNote(noteId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNotesContainer)
