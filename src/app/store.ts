import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import todosReduces from './features/todos/todosSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReduces
  },
})