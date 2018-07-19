import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

const HomeHeader = (props) => (
  <Segment>
    <Header as='h2'>
      <Icon name={props.icon} />
      <Header.Content>
        {props.headerText}
        <Header.Subheader>
          {props.subheader}
        </Header.Subheader>
      </Header.Content>
    </Header>
  </Segment>
)

export default HomeHeader
