import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import NoteTextArea from '../components/NoteTextArea'
import NoteTabs from '../components/NoteTabs'
import NoteActions from '../components/NoteActions'
import NoteDetailsInput from '../components/NoteDetailsInput'
import Instructions from '../components/Instructions'


class NoteContainer extends Component {
  state = {
    topic: "",
    date: new Date(),
    professor: "",
    location: "",
    text: "",
    specialLines: {},
  }

  handleDetailsInput = (e) => {
    let input = e.target.value;

    switch(e.target.name){
      case "professor":
        this.setState({
          professor: input
        })
      break;

      case "date":
        this.setState({
          date: input
        })
      break;

      case "location":
        this.setState({
          location: input
        })
      break;

      case "topic":
        this.setState({
          topic: input
        })
      break;

      default:
        console.log("NO MATCH")
    }
  }

  handleTextInput = (e, {value}) => {
    this.setState({
      text: value
    }, ()=>{this.processText()})
  }

  processText = () => {
    let specWordsAndSentObj = {};
    let conditions = ["?", ".", "!"];
    let textArray = this.state.text.split(" ");

    if(textArray.length > 2){

      let specWords = this.findSpecWords(textArray)
      specWords.forEach((specWord)=>{
        specWordsAndSentObj[specWord] = [];

        let indexArray = this.returnMatchIndexes(textArray, specWord);

        indexArray.forEach((startIndex)=>{
          let letterArray = textArray.slice(startIndex);

          let endIndex = letterArray.findIndex((word) =>
            (conditions.some(el => word.includes(el))
            )
          )

          let sentence = letterArray.slice(1, endIndex+1).join(" ");

          if(sentence){
            specWordsAndSentObj[specWord].push(sentence)
          }
        })
      })

      this.setState({
        specialLines: specWordsAndSentObj
      })
    }
  }

  returnMatchIndexes = (textArray, specWord) => {
    let indexes = [];
    let counter = 0;

    textArray.forEach((textWord)=>{
      if(textWord === specWord){
        indexes.push(counter)
      }
      counter++
    })
    return indexes;
  }

  findSpecWords = (textArray) => {
    // Finds all words that start with a # and are all uppercase
    return textArray.filter((word)=>{
      return word.includes("#")
        &&
      word.split("").slice(1).join("") === word.split("").slice(1).join("").toUpperCase()
        &&
      word.length > 2
    })
  }

  renderTabsOrInstructions = () => {
    if (Object.keys(this.state.specialLines).length > 0){
      return <NoteTabs specialLines={this.state.specialLines}/>
    }else{
      return <Instructions />
    }
  }

  handleClick = (e) => {
    switch(e.target.value){
      case "new":

        break;
      case "save":

        break;
      case "submit":
        fetch('http:')



        debugger
        break;
      default:
        console.log("NO MATCH")
    }
  }




  render(){
    return(
      <Grid columns='equal' >

        <Grid.Row>
          <Grid.Column width={1}  />
          <Grid.Column width={8} >
            <NoteDetailsInput
              handleDetailsInput={this.handleDetailsInput}
              topic={this.state.topic}
              date={this.state.date}
              professor={this.state.professor}
              location={this.state.location}
            />
          </Grid.Column>
          <Grid.Column>

          </Grid.Column>
          <Grid.Column width={1}  />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={1}  />
          <Grid.Column width={8}  >
            <NoteTextArea handleTextInput={this.handleTextInput}/>
          </Grid.Column>
          <Grid.Column>
            {this.renderTabsOrInstructions()}
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={1} />

          <Grid.Column width={8}>
            <NoteActions handleClick={this.handleClick}/>
          </Grid.Column>

          <Grid.Column>

          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

      </Grid>
    )
  }
}

export default NoteContainer
