import React from 'react'
import { Form } from 'semantic-ui-react'

const NoteDetailsInput = (props) => {

  let currentTime = new Date()



  return(
    <Form>
      <Form.Group>
        <Form.Input onChange={props.handleDetailsInput} name="topic" label='Topic' placeholder='Topic...' width={6} />
        <Form.Input onChange={props.handleDetailsInput} name="date" label='Date' placeholder={currentTime} width={6} />
      </Form.Group>
      <Form.Group>
        <Form.Input onChange={props.handleDetailsInput} name="professor" label='Professor Name' placeholder='Professor...' width={6} />
        <Form.Input onChange={props.handleDetailsInput} name="location" label='Location' placeholder='Location...' width={6} />
      </Form.Group>
    </Form>
  )

}


export default NoteDetailsInput
