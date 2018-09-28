import ADD_MESSAGE from './actionTypes';
import MESSAGE_RECEIVED from './actionTypes';
import ADD_USER from './actionTypes';
import USERS_LIST from './actionTypes';

let nextMessageID = 0;
const nextUserID = 0;

export const addMessage = (message, author) => ({
  type: ADD_MESSAGE,
  id: nextMessageID++,
  message,
  author
})

export const addUser = name => ({
  type: ADD_USER,
  id: nextUserID++,
  name
})

export const messageReceived = (message, author) => ({
  type: MESSAGE_RECEIVED,
  id: nnextMessageID++,
  message,
  author
})

export const populateUsersList = users => ({
  type: USERS_LIST,
  users
})
