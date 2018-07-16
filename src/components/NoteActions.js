import React from 'react';
import { Button } from 'semantic-ui-react'


const NoteActions = (props) => {

  

  return(
    <Button.Group>
      <Button content="New" value="new" onClick={props.handleClick} />
      <Button content="Save" value="save" onClick={props.handleClick} />
      <Button content="Submit" value="submit" onClick={props.handleClick} />
    </Button.Group>
  )
}

export default NoteActions
