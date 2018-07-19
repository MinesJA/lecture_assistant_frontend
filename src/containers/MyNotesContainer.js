import React, { Component } from 'react'
import NotesList from '../components/NotesList'
import NoteDetails from '../components/NoteDetails'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class MyNotesContainer extends Component {



  render(){
    let { notes, location } = this.props
    let { pathname } = location
    let noteClicked = !!pathname.split("/")[2]

    return(
      <Grid>
        <Grid.Row/>
        <Grid.Row>
          <Grid.Column width = {1}/>
          <Grid.Column width = {7}>
            <NotesList notes={notes} details/>
          </Grid.Column>
          <Grid.Column width = {1}/>
          <Grid.Column width = {6}>
            { noteClicked ? <NoteDetails note={this.props.selectedNote}/> : <div> Nothing to show </div> }
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

export default connect(mapStateToProps)(MyNotesContainer)
