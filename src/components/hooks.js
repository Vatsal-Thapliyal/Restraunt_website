import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if(action.type === 'INCR')
       state = state + 1;

    if(action.type === 'DECR' && state > 0)
       state = state - 1;

    return state;
};

const Hooks = () => {
  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData); 
  
  return (
    <>
        <div>
           <h1 className='flex justify-center my-6'> { state } </h1>
           <div className='flex justify-center'>
                  
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-3 border border-teal-600 rounded mx-2" onClick={() => dispatch({type : 'INCR'})}> INCR </button>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-3 border border-teal-600 rounded mx-2" onClick={() => dispatch({type : 'DECR'})}> DECR </button>

            </div>
        </div>
    </>
  )
};

export default Hooks