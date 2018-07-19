import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { fetchNotes } from '../actions/noteActions'
import NotesList from '../components/NotesList'
import { connect } from 'react-redux'


class HomeContainer extends Component {

  componentDidMount(){
    this.props.fetchNotes(1)
  }


  render(){
    let { notes } = this.props
    return(
      <Grid>
        <Grid.Row/>
        <Grid.Row>
          <Grid.Column width = {1}/>
          <Grid.Column width = {7}>
            <NotesList notes={notes}/>
          </Grid.Column>
          <Grid.Column width = {1}/>
          <Grid.Column width = {6}>
            
            <NotesList />
          </Grid.Column>
          <Grid.Column width = {1}/>
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {notes: state.Notes.notes}
}



export default connect(mapStateToProps, { fetchNotes })(HomeContainer)
