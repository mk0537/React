const initialState = {
    // 배열로 상태를 받을 것
    todos:[],
}

export const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos:[...state.todos, {id:action.payload.id, text:action.payload.text}]
            };
        case 'REMOVE_TODO' :
            return {
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.id)
            }
        default : 
            return state;
    }
}