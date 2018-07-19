import React, { Fragment } from 'react'
import { List, Segment } from 'semantic-ui-react'
import HomeHeader from './HomeHeader'
import NoteItem from './NoteItem'
import UUID from 'uuid'


const NoteDetails = (props) => {

  

  return(
    <Fragment>
      <HomeHeader/>

        <Segment>
          <List divided verticalAlign='middle' size="large" >
            { props.notes ? props.notes.map ( note => <NoteItem details={props.details} note={note} key={UUID()}/> ) : null }
          </List>
        </Segment>

    </Fragment>
  )
}

export default NoteDetails
