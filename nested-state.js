//depiction of use case of immer

const redux = require('redux')
const produce = require('immer').produce


const initialState = {
  name: 'Kushagra',
  address: {
    street: '123 Main St',
    city: 'New Delhi',
    state: 'Delhi'
  }
}
const STREET_UPDATED = 'STREET_UPDATED'

function updateStreet(newStreet){
    return {
        type : STREET_UPDATED,
        payload : newStreet
    }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload
      //     }
      //   }
      return produce(state, draft => {
        draft.address.street = action.payload
      })
    default: {
      return state
    }
  }
}

const store = redux.createStore(reducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})
store.dispatch(updateStreet('456 Main St'))
unsubscribe()