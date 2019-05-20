import { createStore } from 'redux';

const initialState = {
  name: 'Oleg',
  surname: 'Shepel'
}

function reducer(state=initialState, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: actions.payload }

    case 'CHANGE_SECOND_NAME':
      return { ...state, surname: actions.payload }

      break;
    default:

  }
  console.log(state);
  console.log(action);
  return state;
}

const store = createStore(reducer);

console.log(store.getState());


const changeName = {
  type: 'CHANGE_NAME',
  payload: 'Oleg'
}

const changeSurname = {
  type: 'CHANGE_SECOND_NAME',
  payload: 'Shepel'
}

store.dispatch(changeName);

console.log(store.getState());

store.dispatch(changeSurname);
