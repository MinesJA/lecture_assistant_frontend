import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

const HomeHeader = () => (
  <Segment>
    <Header as='h2'>
      <Icon name='pencil' />
      <Header.Content>
        My Notes
        <Header.Subheader>
          See your recent notes below
        </Header.Subheader>
      </Header.Content>
    </Header>
  </Segment>
)

export default HomeHeader
