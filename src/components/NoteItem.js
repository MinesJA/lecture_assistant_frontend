import React from 'react'
import { Button, List, Icon } from 'semantic-ui-react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'


const NoteItem = (props) => {
  let { id, title, topic, professor, location, full_text, user_id, created_at, updated_at, details } = props.note
  let link_path = `/notes/${id}`

  const renderButtons = () => {
    if(props.home){
      return(
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
      )
    }
  }


  return(
    <List.Item>

      {renderButtons()}

      <List.Content>
        <List.Header>
          <Link to={link_path}>
            Title: {title}
            <br/>
            Topic: {topic}
          </Link>
        </List.Header>
        <List.Description>
          <small>Updated at: <Moment format="DD/MM/YYYY">{updated_at}</Moment></small>
        </List.Description>
      </List.Content>

    </List.Item>

  )
}

export default NoteItem
