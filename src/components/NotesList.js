import React from 'react'
import { Button, Image, List, Icon, Segment } from 'semantic-ui-react'
import HomeHeader from './HomeHeader'



const NotesList = (props) => {


  const handleItemClick = (e) => {
    console.log(e.target.value)
  }

  return(
  <div>
    <HomeHeader/>

      <Segment>
        <List divided verticalAlign='middle' size="large" >

          <List.Item>
            <List.Content floated='right' >

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
              <Button onClick={handleItemClick}  color="black">
              <Icon name="pencil square"/>
              </Button>
            <List.Content>
              <List.Header>
                Note Topic
              </List.Header>
              <List.Description>
                <small>Updated on June 8, 2018</small>
              </List.Description>
            </List.Content>
          </List.Item>
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
                Note Topic
              </List.Header>
              <List.Description>
                <small>Updated on June 8, 2018</small>
              </List.Description>
            </List.Content>
          </List.Item>
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
                Note Topic
              </List.Header>
              <List.Description>
                <small>Updated on June 8, 2018</small>
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Segment>

  </div>
)


}

export default NotesList
