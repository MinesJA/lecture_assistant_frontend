// const API_ROOT = 'http://localhost:3000/api/v1'
//
// const headers = {
//   'Content-Type': 'application/json',
//   Accepts: 'application/json'
// }
//
// const getWithToken = url => {
//   const token = localStorage.getItem('token');
//
//   return fetch(url, {
//     headers: { Authorization: token}
//   }).then(res => res.json());
//
// }

const ROOT_URL = 'http://localhost:3000/api/v1'


export default class Adapter {

  static getNotes(user_id){
    return fetch(`${ROOT_URL}/users/${user_id}/notes`)
      .then(resp => resp.json())
  }

}
