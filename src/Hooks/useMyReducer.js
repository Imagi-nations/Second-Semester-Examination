/*import useReducer from 'react'*/

/*function useReducer(reducer, initialState){
    const [state, setState] = useState(initialState)

    function dispatch(action){
        let newState = reducer(state, action)
        setState(newState)
    }
    return [state, dispatch],
};*/

/*function useMyReducer(initialState, action){
    const [initialState, dispatch] = useMyReducer( initialState, action)
    switch(action){
        case 'increment':
            return initialState + 1;
        case 'decrement':
            return initialState - 1;
        case 'reset':
            return initialState;
        case 'participantId':
            return Math.random()*101;
        default:
            return initialState;

    }
}
export default useMyReducer;*/