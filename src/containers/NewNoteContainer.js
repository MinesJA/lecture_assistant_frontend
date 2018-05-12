import React, { Component } from 'react'
import { List, Grid, Segment } from 'semantic-ui-react'
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

  handleTextInput = (e, {value}) => {
    this.setState({
      text: value}, ()=>{this.processText()})
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

      return(
      <Segment padded='very'>
        <strong>Instructions</strong>
        <br></br>
        Heres how to use LectureAssistant:

        <List ordered>
          <List.Item>Type normally like you would a regular text editor.</List.Item>
          <List.Item>If you want to start a new list like "Questions" just start the name of the list you want to write with a hashtag and capitlize all letters like so: #QUESTIONS. You should see it appear as a tab header to the right of the editor.</List.Item>
          <List.Item>Everything you write after the new label and before a period, question mark or exclamation point will be added to the tab as an item.</List.Item>
          <List.Item>When youre finished with your note, you can save it to work on later, submit it to your lists, or wipe it and start fresh by click new.</List.Item>
        </List>

      </Segment>)
    }
  }

  handleActions = (button_id) => {
    // case(button_id)
    //
    // when
    console.log(button_id)
    console.log(this.state)
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
            <TextArea autoHeight onChange={this.handleTextInput} placeholder='Try adding multiple lines' rows={10} />
          </Grid.Column>
          <Grid.Column>
            {this.renderTabsOrInstructions()}
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={1} />

          <Grid.Column width={8}>
            <NoteActions handleActions={this.handleActions} />
          </Grid.Column>

          <Grid.Column>

          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>

      </Grid>
    )
  }
}

function mapDispatchToProps = () => {


}

export default connect(null, mapDispatchToProps)(NoteContainer)
