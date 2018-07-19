import React from 'react'
import { Button, List, Icon } from 'semantic-ui-react'
import Moment from 'react-moment';


// "id": 1,
//   "title": "RW6",
//   "topic": "they're good dogs Brent",
//   "professor": "Reginald Cattermole",
//   "location": "945 Grove St Apt. 20",
//   "full_text":
//   "user_id": 1,
//   "created_at": "2018-05-28T23:02:55.240Z",
//   "updated_at": "2018-05-28T23:02:55.306Z"


const NoteItem = (props) => {

  console.log("NoteItem Props: ", props)
  let { topic, professor, location, full_text, user_id, created_at, updated_at } = props.note





  return(
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

      <List.Content floated='left'>
        <Button>VIEW</Button>
      </List.Content>

      <List.Content>
        <List.Header>
          {topic}
        </List.Header>
        <List.Description>
          <small>Professor {professor} | Location: {location}</small>
          <br/>
          <small>Updated at: <Moment format="DD/MM/YYYY">{updated_at}</Moment></small>
        </List.Description>
      </List.Content>
    </List.Item>

  )
}

export default NoteItem
