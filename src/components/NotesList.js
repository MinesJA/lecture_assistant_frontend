import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import HomeHeader from './HomeHeader'
import NoteItem from './NoteItem'


const NotesList = (props) => {
  // debugger
  // const renderNoteItems = () => {
  //   return
  // }

  return(
    <div>
      <HomeHeader/>

        <Segment>
          <List divided verticalAlign='middle' size="large" >
            { props.notes ? props.notes.map ( note => <NoteItem note={note}/> ) : null }
          </List>
        </Segment>

    </div>
  )
}

export default NotesList
