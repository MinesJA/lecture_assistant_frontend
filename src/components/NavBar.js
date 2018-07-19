import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src={require('../images/logo.png')} alt="logo" />
        </Menu.Item>
        <Menu.Item name='home' as={NavLink} exact to="/" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='myNotes' as={NavLink} exact to="/notes" active={activeItem === 'myNotes'} onClick={this.handleItemClick} />
        <Menu.Item name='newNote' as={NavLink} exact to="/notes/new" active={activeItem === 'newNote'} onClick={this.handleItemClick} />
        <Menu.Item name='allLists' as={NavLink} exact to="/lists" active={activeItem === 'allLists'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item name='signup' as={NavLink} exact to="/signup" active={activeItem === 'signup'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}

// <Route path="/something/:id" render={ (renderProps) => {
//    console.log(renderProps.match.params.id); => This will return whatever the user types in after "something/"
//
//    Use this slug to find matching data to render. Return it and it will render.
//    <BetCard info={info} />
// }}

export default NavBar
