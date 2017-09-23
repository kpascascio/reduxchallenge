export function counterIncrement(store) {
    return ()=>{
        store.dispatch({type:'INCREMENT'})
    }
}

export function counterDecrement(store) {
    return ()=>{
        store.dispatch({type:'DECREMENT'})
    }
}