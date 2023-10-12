import { useDispatch, useSelector } from "react-redux"
import '../../../App.css';
import { SetStateAction, useState } from "react";
import {addTodo, deleteTodo} from './todosSlice';

export const TodoList = () => {
    const todos = useSelector((state :any)=> state.todos)
    const [isEditing,setIsEditing] = useState(false);
    const [newTodo,setNewTodo] = useState({});
    const dispatch = useDispatch();
    const [task,setTask] = useState('');
   const handelInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
     setTask(event.target.value);
     setNewTodo({...newTodo,task:event.target.value})
   }
    return(
        <div>
            <h1>Todo List</h1>
            <div>
                <input 
                  value={task}
                  onChange={handelInputChange}
                />
                {!isEditing && <button onClick={()=> dispatch(addTodo(task))}>Add Todo</button>}
                {isEditing && 
                   <>
                      <button>Update</button>
                      <button onClick={()=> setIsEditing(false)}>Cancel</button>
                   </>
                }
            </div>
            <div>
                {
                    todos.map((todo: any)=>{
                        return <div style={{
                                      display:'flex',
                                      justifyContent:'space-between',
                                      border:'2px solid gray',
                                      borderRadius:10,
                                      padding:10,
                                      textAlign:'center'
                                    }}>
                                 <li 
                                 style={{listStyle:'none'}}
                                 key={todo.id}>{todo.task}</li>
                                 <button onClick={()=> dispatch(deleteTodo(todo.id))}>Delete</button>
                                 <button onClick={()=> {
                                    setNewTodo(todo)
                                    setIsEditing(true)
                                    setTask(todo.task)
                                    }}>Edit</button>
                               </div>
                    })
                }
            </div>
        </div>
    )
}