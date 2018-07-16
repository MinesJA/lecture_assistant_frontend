import React from 'react'
import { List, Segment } from 'semantic-ui-react'



const Instructions = () => (
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

  </Segment>
)

export default Instructions
