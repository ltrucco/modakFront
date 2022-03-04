import api from './api'

function getUsers (  ) {
  return api.get( '/user' )
}

function getLessons (  ) {
  return api.get( '/lesson' )
}

function getUserLessons (  ) {
  return api.get( '/userLesson' )
}

function getUserFriends (  ) {
  return api.get( '/userFriend' )
}



export const ApiCalls = {
  getUsers,
  getLessons,
  getUserLessons,
  getUserFriends
}