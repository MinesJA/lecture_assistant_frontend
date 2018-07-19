import React from 'react'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'

const SignupContainer = () => (
  <Grid>
    <Grid.Column width={4} />
    <Grid.Column width={8}>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' type="password"/>
        </Form.Field>
        <Form.Field>
          <label>Password Confirmation</label>
          <input placeholder='Password Confirmation' type="password"/>
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Grid.Column>
    <Grid.Column width={4} />
  </Grid>
)

export default SignupContainer
