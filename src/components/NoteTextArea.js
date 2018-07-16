import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const NoteTextArea = (props) => (
  <Form>
    <TextArea autoHeight onChange={props.handleTextInput} placeholder='Try adding multiple lines' rows={10} />
  </Form>
)


export default NoteTextArea
