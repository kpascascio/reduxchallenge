const ReducerCounter = (state = {num: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(state)  
            let newState = state.num + 1
            return {...state, num:{newState}};
        case 'DECREMENT':
            console.log(state)
            return state.num - 1;
        default:
            return state;
    };
    return state;
};

export default ReducerCounter;