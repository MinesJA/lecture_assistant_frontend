import React, { Fragment } from 'react'
import { List, Segment, Card, Grid, Header, Icon, Item, Button, Divider, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import NoteItem from './NoteItem'

const NoteDetails = (props) => {

  console.log("NoteDetails: ", props)


  let {id, topic, professor, title, full_text, created_at} = props.notes.find((note)=> note.id == props.note)


  return(
    <Segment>
      <Grid columns='equal' >
        <Grid.Row>
          <Segment basic clearing>
            <h3>Title: {title}</h3>
            <h3>Topic: {topic}</h3>
            <h3>Professor: {professor}</h3>
            <h3>Date: {created_at}</h3>

            <List.Content floated='right'>
              <Button animated size="small">
                <Button.Content visible >
                  <Icon name="edit"/>
                </Button.Content>
                <Button.Content hidden>
                  Edit
                </Button.Content>
              </Button>
              <Button animated size="small">
                <Button.Content visible>
                  <Icon name="delete"/>
                </Button.Content>
                <Button.Content hidden>
                  Delete
                </Button.Content>
              </Button>
            </List.Content>
          </Segment>

        </Grid.Row>
        
        <Divider />

        <Grid.Row>
          <Container>
            {full_text}
          </Container>
        </Grid.Row>

        <Grid.Row>

        </Grid.Row>
      </Grid>
    </Segment>
  )
}

function mapStateToProps(state){
  return {
    notes: state.Notes.notes
  }
}

export default connect(mapStateToProps)(NoteDetails)
