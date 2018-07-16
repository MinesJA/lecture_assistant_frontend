import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import HomeHeader from './HomeHeader'
import NoteItem from './NoteItem'


const NotesList = (props) => {

  const renderNoteItems = () => {
    return props.notes.map ((note)=>(
      <NoteItem noteInfo={note}/>
    ))
  }

  return(
    <div>
      <HomeHeader/>

        <Segment>
          <List divided verticalAlign='middle' size="large" >
            {renderNoteItems}
          </List>
        </Segment>

    </div>
  )
}

export default NotesList
