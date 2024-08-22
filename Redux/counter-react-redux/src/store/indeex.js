 
import { createStore } from 'redux'

const INITIAL_VAL = {
    counter: 0,
    privacy : false,
}
const counterReducer = (store = INITIAL_VAL, action) => {
     
    switch(action.type) {
        case 'DECREMENT' : return  {...store, counter : store.counter - 1}
        case 'INCREMENT' : return  {...store, counter : store.counter + 1}
        case 'ADDITION' : return  {...store, counter : store.counter + action.payload.number}
        case 'PRIVACY_TOGGLE' : return  {...store, privacy : !store.privacy}
        default : return store;
        
    }
}
const counterStore = createStore(counterReducer);

export default counterStore;