export function counterIncrement(store) {
    return ()=>{
        store.dispatch({type:'increment'})
    }
}

export function counterDecrement(store) {
    return ()=>{
        store.dispatch({type:'DECREMENT'})
    }
}