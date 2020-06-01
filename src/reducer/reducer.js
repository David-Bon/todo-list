export const TOGGLE_DONE = "TOGGLE-DONE";
const initialState = {
    todo: [
        {id: 1, text: 'Lorem ipsum dolor sit amet', done: false, important: false},
        {id: 2, text: 'React App', done: false, important: false},
        {id: 3, text: 'React App', done: false, important: false},
    ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DONE:
            const id = action.payload;
            const idx = state.todo.findIndex(item => item.id === id);
            const selectedItem = state.todo[idx];
            const newItem = {...selectedItem, done: !selectedItem['done']};
            const newArray = [...state.todo.slice(0, idx), newItem, ...state.todo.slice(idx + 1)];
            debugger
            return {
                ...state, todo: newArray
            };
        default:
            return state
    }
};
export default reducer