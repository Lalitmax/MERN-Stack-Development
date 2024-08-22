const redux = require('redux')

const INITIAL_VAL = {
    counter: 0,
}
const reducer = (store = INITIAL_VAL, action) => {
    switch (action.type) {
        case 'INCREMENT': return { counter: store.counter + 1 };
        case 'DECREMENT': return { counter: store.counter - 1 };
        case 'ADDITION': return { counter: store.counter + action.payload.number };
    }
    return { counter: store.counter + 1 };

}
 
const store = redux.createStore(reducer);

const subscriber = () => {
    const state = store.getState(); // gives cuur val
    console.log(state);
}

store.subscribe(subscriber); // why writtten jare becase tore don't know what is name of subscriber so that i had written store.subs ...


store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({
    type: 'ADDITION', payload: {
        number: 12
    }
})
store.dispatch({ type: 'INCREMENT' })
