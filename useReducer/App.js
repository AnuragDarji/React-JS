import React,{useReducer} from 'react'

const counterReducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1};
    case 'DECREMENT':
      return { count: state.count -1};
    default:
      return state;
  }
}

const App = () => {

  const [state, dispatch] = useReducer(counterReducer, {count:0});


  return (
    <div className='container'>
      <div className='task'>
        <h3>Count: {state.count}</h3>
      </div>
      <button className='btn' onClick={ ()=> dispatch({ type: 'INCREMENT'})}>Increment</button>
      <button className='btn' onClick={ ()=> dispatch({ type: 'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default App
