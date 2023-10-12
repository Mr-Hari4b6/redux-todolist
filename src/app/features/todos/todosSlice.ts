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
           console.log(state)
        },
        editTodo:(state, action) => {
           
            const updatedItem = state.map((todo) => {
                return todo.id === action.payload.id ? action.payload : todo;
              });  
              console.log(updatedItem)
              state=[...state,updatedItem]          
        },
        deleteTodo: (state,action)=>{
          state = state.filter((task)=> task.id !== action.payload)
          console.log(state,action)
        }
    }
})
export const {addTodo,deleteTodo,editTodo} = todosSlice.actions
export default todosSlice.reducer