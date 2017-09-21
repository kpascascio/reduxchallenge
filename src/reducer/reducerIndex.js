const ReducerCounter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(state)
            return state + 1;
        case 'DECREMENT':
            console.log(state)
            return state;
        default:
            return state;
    };
    return state;
};

export default ReducerCounter;