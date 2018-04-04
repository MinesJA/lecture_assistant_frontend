import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import NotesList from '../components/NotesList'



class HomeContainer extends Component {



  render(){
    return(
      <Grid>
        <Grid.Row/>
        <Grid.Row>
        <Grid.Column width = {3} />
          <Grid.Column width = {8}>

            <NotesList />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default HomeContainer
