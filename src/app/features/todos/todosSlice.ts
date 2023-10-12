import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: [{
        id:1,
        task:'Playing Cricket'
    }],
    reducers: {
        addTodo : (state,action) => {
           state = [...state,{id: state[state.length-1].id + 1,task: action.payload}]
        },
        deleteTodo: (state,action)=>{
          state = state.filter((task)=> task.id !== action.payload)
        }
    }
})
export const {addTodo,deleteTodo} = todosSlice.actions
export default todosSlice.reducer