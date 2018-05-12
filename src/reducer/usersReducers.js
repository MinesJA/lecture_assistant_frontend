import { USERS_LOADING, LOAD_USERS } from '../actions/usersActions'

const initialState = {loading: false, user: null}

export default function Users(state = initialState, action){
  switch(action.type){

    case USERS_LOADING:
     return Object.assign({}, state, {loading: true})

    case LOAD_USER:
      return Object.assign({}, state, {user: action.payload, loading: false})

    default:
      return {...state}
  }
}
