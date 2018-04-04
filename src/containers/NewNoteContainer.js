import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import NoteTextArea from '../components/NoteTextArea'
import NoteTabs from '../components/NoteTabs'
import NoteActions from '../components/NoteActions'
import NoteDetailsInput from '../components/NoteDetailsInput'


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
    }
  }


  handleTextInput = (e) => {
    let specWordsAndSentObj = {};
    let text = e.target.value
    this.setState({
      text
    })
    // Sets state with all incoming text


    let textArray = text.split(" ");
    if(textArray.length > 2){
      let conditions = ["?", ".", "!"];
      // 
      let specialWordsArray = this.findSpecWords(textArray);

      console.log("Identify Special Words: ", specialWordsArray);

      specialWordsArray.forEach((specWord)=>{
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
      console.log(specWordsAndSentObj)

      this.setState({
        specialLines: specWordsAndSentObj
      }, ()=>{console.log(this.state.specialLines)})
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

    let specWords = textArray.filter((word)=>{
      return word.includes("#")
        &&
      word.split("").slice(1).join("") === word.split("").slice(1).join("").toUpperCase()
        &&
      word.length > 2
    })

    return specWords;
  }


  render(){
    return(
      <Grid columns='equal' >

        <Grid.Row>
          <Grid.Column width={1}  />
          <Grid.Column width={8} >
            <NoteDetailsInput handleDetailsInput={this.handleDetailsInput} />
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
            <NoteTabs specialLines={this.state.specialLines}/>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={1} />


          <Grid.Column width={8}>
            <NoteActions />
          </Grid.Column>

          <Grid.Column>
            Hello world
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

      </Grid>
    )
  }
}

export default NoteContainer
