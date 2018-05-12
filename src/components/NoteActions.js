import React from 'react';
import { Button } from 'semantic-ui-react'


const NoteActions = (props) => {

  const handleClick = (e) => {
    props.handleActions(e.target.id)
  }

  return(
    <Button.Group>
      <Button content="New" id="new" onClick={handleClick} />
      <Button content="Save" id="save" onClick={handleClick} />
      <Button content="Submit" id="submit" onClick={handleClick} />
    </Button.Group>
  )
}

export default NoteActions
