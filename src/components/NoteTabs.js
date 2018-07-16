import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'

class NoteTabs extends Component {

  buildPanes = () => {
    if(Object.keys(this.props.specialLines).length > 0){
      let panes = [];
      let specialLinesObj = this.props.specialLines
      let specialWords = Object.keys(specialLinesObj);

      specialWords.forEach( (specialWord)=>{
        let listItems = specialLinesObj[specialWord].map((line)=>{
          return <li>{line}</li>
        })

        let pane = { menuItem: `${specialWord}`, render: () =>
          <Tab.Pane>
            <ol>
              {listItems}
            </ol>
          </Tab.Pane>
        }

        panes.push(pane)
      })

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
