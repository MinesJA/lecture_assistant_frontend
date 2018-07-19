import Adapter from '../Adapter'
export const FETCH_NOTES = 'FETCH_NOTES'
export const SELECT_NOTE = 'SELECT_NOTE'
export const NOTE_LOADING = 'NOTE_LOADING'


export function selectNote(note_id){
  return {
    type: SELECT_NOTE,
    payload: note_id
  }
}

export function fetchNotes(user_id){

  return function(dispatch){
    dispatch({type: NOTE_LOADING})


    Adapter.getNotes(user_id)
      .then(json => {
        console.log(json)
        dispatch({
          type: FETCH_NOTES,
          payload: json
        })
      })
  }

}
