const redux = require('redux')
const createStore = redux.configureStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware


const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger() 

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function orderCake(){
    return {
        type : CAKE_ORDERED,
        quantity : 1
    }
}
//action creators -- returns an object
function restockCake(qty = 1){
    return {
        type : CAKE_RESTOCKED,
        quantity : qty,
    }
}
function orderIceCream(qty = 1){
    return {
        type : ICECREAM_ORDERED,
        payload : qty,
    }
}
function restockIceCream(qty = 1){
    return {
        type : ICECREAM_RESTOCKED,
        payload : qty,
    }
}

const initialCakeState = { 
    numOfCakes : 10
}
const initalIceCreamState = {
    numOfIceCreams : 10
}

//reducer
//(previousState , action ) = newState 

const CakeReducer = (state = initialCakeState , action) => {
    switch(action.type) {
        case CAKE_ORDERED :
            return {
                    ...state,
                numOfCakes : state.numOfCakes - 1,
            }
        case CAKE_RESTOCKED : 
            return {
                ...state,
                numOfCakes : state.numOfCakes + action.qty
            }
            default : 
            return state
    }  
}

const IceCreamReducer = (state =initalIceCreamState , action) => {
    switch(action.type) {
        case ICECREAM_ORDERED :
            return {
                    ...state,
                numOfIceCreams : state.numOfIceCreams - 1,
            }
        case ICECREAM_RESTOCKED : 
            return {
                ...state,
                numOfIceCreams : state.numOfIceCreams + action.qty
            }
            default : 
            return state
    }  
}

//using to combine both the reducers
const rootReducer = combineReducers({
    cake : CakeReducer,
    iceCream : IceCreamReducer
})

const store = createStore(rootReducer , applyMiddleware(logger));
console.log('Initial state' , store.getState())
const unsuscribe = store.suscribe(() => console.log('updated state' , store.getState()))
const actions = bindActionCreators({orderCake , restockCake , orderIceCream, restockIceCream} , store.dispatch)
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

unsuscribe();