import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import NoteSpecialLines from './NoteSpecialLines'


class NoteTabs extends Component {
  // state = {
  //   panes: []
  // }

  buildPanes = () => {
    // debugger;

    if(Object.keys(this.props.specialLines).length > 0){
      let panes = [];
      let specialLinesObj = this.props.specialLines

      let specialWords = Object.keys(specialLinesObj);
      console.log("buildPanes, specialWords Keys: ", specialWords)

      specialWords.map((specialWord)=>{
        console.log(specialWord)
        console.log(specialLinesObj)
        let listItems = specialLinesObj[specialWord].map((line)=>{
          return <li>{line}</li>
        })

        console.log(listItems)

        let pane = { menuItem: `${specialWord}`, render: () =>
          <Tab.Pane>
            <ol>
              {listItems}
            </ol>
          </Tab.Pane>
        }

        panes.push(pane)
      })

      // this.setState({
      //   panes
      // })

      return(panes)
    } else {

      return [{ menuItem: "", render: () => <Tab.Pane></Tab.Pane>}]

     }
  }



  render(){
    return(
      <Tab panes={this.buildPanes()} />
    )
  }

}

export default NoteTabs
