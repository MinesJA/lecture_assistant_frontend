import React from 'react'
import { Card, Form, TextArea, Input } from 'semantic-ui-react'

const NoteTextArea = (props) => {



  return(

    <Form>
      <TextArea autoHeight onChange={props.handleTextInput} placeholder='Try adding multiple lines' rows={10} />
    </Form>


  )

}

export default NoteTextArea
