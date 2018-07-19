import React, { Fragment } from 'react'
import { List, Segment } from 'semantic-ui-react'
import Header from './Header'
import NoteItem from './NoteItem'
import UUID from 'uuid'


const NotesList = (props) => {

  return(
    <Fragment>
      <Header headerText="Your Notes" subheader="see your notes below" icon="pencil"/>

        <Segment>
          <List divided verticalAlign='middle' size="large" >
            { props.notes ? props.notes.map ( note => <NoteItem home={props.home} note={note} key={UUID()}/> ) : null }
          </List>
        </Segment>

    </Fragment>
  )
}

export default NotesList
