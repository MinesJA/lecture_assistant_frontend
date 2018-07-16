import React from 'react'
import { Form } from 'semantic-ui-react'

const NoteDetailsInput = (props) => (
  <Form>
    <Form.Group>
      <Form.Input onChange={props.handleDetailsInput} name="topic" label='Topic' value={props.topic} placeholder='Topic...' width={6} />
      <Form.Input onChange={props.handleDetailsInput} name="date" label='Date' value={props.date} width={6} />
    </Form.Group>
    <Form.Group>
      <Form.Input onChange={props.handleDetailsInput} name="professor" label='Professor Name' value={props.professor} placeholder='Professor...' width={6} />
      <Form.Input onChange={props.handleDetailsInput} name="location" label='Location' value={props.location} placeholder='Location...' width={6} />
    </Form.Group>
  </Form>
)


export default NoteDetailsInput
