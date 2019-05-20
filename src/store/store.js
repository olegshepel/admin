

class Store {
  constructor(updateState, state) {
    this._updateState = updateState;
    this._state = state;
    this._callbacks = [];
  }

  getState() {
    return this._state;
  }
  update(action) {
    this._state = this._updateState(this._state, action);
  }

  subscribe(callback) {
    this._callbacks.push(callback)
    return
    //this._callbacks.forEach(callback => callback());
  }
}

const store = new Store(updateState, 0);

const incrementAction = { type: 'INCREMENT', amount: 5 }
const decrementAction = { type: 'DECREMENT', amount: 3 }

store.subscribe(() => console.log('State changed' store.state));

store.update(incrementAction);
console.log(store.state)

store.update(decrementAction);
console.log(store.state)

store.update({});
console.log(store.state)
