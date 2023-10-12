import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './app/features/counter/counterSlice'


function App() {
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {count} </h1>
      <div className="card">
        <button onClick={()=> dispatch(increment())}>
           Increment
        </button>
        <button onClick={()=> dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={()=> dispatch(incrementByAmount(2))}>
          Increment By 2
        </button>
      </div>
    </>
  )
}

export default App
