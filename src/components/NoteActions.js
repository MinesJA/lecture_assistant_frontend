import React from 'react';
import { Button } from 'semantic-ui-react'


const NoteActions = () => {

  const handleClick = (e) => {
    console.log(e.target.value)
  }

  return(
    <Button.Group>
      <Button content="New" onClick={handleClick} />
      <Button content="Save" onClick={handleClick} />
      <Button content="Submit" onClick={handleClick} />
    </Button.Group>
  )
}

export default NoteActions
