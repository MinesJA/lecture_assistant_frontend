export const NOTES_LOADING = 'NOTES_LOADING'
export const SELECT_NOTE = 'SELECT_NOTE'
export const FETCH_NOTES = 'FETCH_NOTES'


export function fetchNotes(){

  return (dispatch) => {
    dispatch({
      type: NOTES_LOADING
    })

    return fetch('http://localhost:3000/api/v1/notes')
    .then(resp => resp.json())
    .then(result => {

      dispatch({
      type: LOAD_NOTES,
      payload: result
      })
    })
  }

}

export function postNote(note){
  let options ={
    method: "POST",
    headers:
      {Accept: 'application/json',
       'Content-Type': 'application/json'},
    body:
      JSON.stringify({



      name: tool.name,
      description: tool.description,
      url: tool.url,
      tags: tool.tags
    })
  }

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/notes/`, options)
    .then(resp => resp.json())
    .then(result => {
      dispatch({
        type: 'ADD_TOOL',
        payload: result
      })
    })
  }

}

// export function patchTool(tool){
//   let options ={
//     method: "PATCH",
//     headers:
//       {Accept: 'application/json',
//        'Content-Type': 'application/json'},
//     body:
//       JSON.stringify({
//       name: tool.name,
//       description: tool.description,
//       url: tool.url,
//       tags: tool.tags
//     })
//   }
//
//   return (dispatch) => {
//     return fetch(`http://localhost:3000/api/v1/tools/${tool.id}`, options)
//     .then(resp => resp.json())
//     .then(result => {
//       dispatch({
//         type: 'ADD_TOOL',
//         payload: result
//       })
//     })
//   }
//
// }

export function setLoading(){
  return {
    type: USERS_LOADING
  }
}
