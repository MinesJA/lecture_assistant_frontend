import React from 'react'
import { Button, List, Icon } from 'semantic-ui-react'


const NoteItem = (props) => (
    <List.Item>
      <List.Content floated='right'>

        <Button animated size="small">
          <Button.Content visible >
            <Icon name="edit"/>
          </Button.Content>
          <Button.Content hidden>
            Edit
          </Button.Content>
        </Button>

        <Button animated size="small">
          <Button.Content visible>
            <Icon name="delete"/>
          </Button.Content>
          <Button.Content hidden>
            Delete
          </Button.Content>
        </Button>

      </List.Content>
        <Icon name="pencil square" size="big"/>
      <List.Content>
        <List.Header>
          {props.noteInfo.noteTopic}
        </List.Header>
        <List.Description>
          <small>{props.noteInfo.updatedOn}</small>
        </List.Description>
      </List.Content>
    </List.Item>
  )

export default NoteItem
