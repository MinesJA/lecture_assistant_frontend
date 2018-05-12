import { NOTES_LOADING, SELECT_NOTE, FETCH_NOTES } from '../actions/notesActions'

const initialState = {loading: false, notes: [], selectedNote: null}

export default function Notes(state = initialState, action){
  switch(action.type){

    case NOTES_LOADING:
     return Object.assign({}, state, {loading: true})

    case FETCH_NOTES:
      return Object.assign({}, state, {notes: [action.payload], loading: false})

    case SELECT_NOTE:
      return Object.assign({}, state, {selectedNote: action.payload})

    default:
      return {...state}
  }
}
