import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store'
import { TodoList } from './app/features/todos/TodoList.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
        <TodoList></TodoList>
      </Provider>
  </React.StrictMode>,
)
