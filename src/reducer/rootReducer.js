import { combineReducers } from 'redux'
import Users from './usersReducers'
import Notes from './notesReducers'


const toolsApp = combineReducers({
  Users,
  Notes
})


export default toolsApp
