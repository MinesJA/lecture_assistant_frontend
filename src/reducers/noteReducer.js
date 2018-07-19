import { FETCH_NOTES, SELECT_NOTE, NOTE_LOADING } from '../actions/noteActions'

const initialState = {
  notesLoading: false,
  notes: [],
  selectedNote: null
}

export default function Notes(state = initialState, action){
  switch(action.type){
    case NOTE_LOADING:
      return Object.assign({}, state, {notesLoading: true})

    case FETCH_NOTES:
      return Object.assign({}, state, {notes: action.payload.notes, notesLoading: false})

    case SELECT_NOTE:
      return Object.assign({}, state, {selectedNote: action.playload})

    default:
      return state
  }
}
