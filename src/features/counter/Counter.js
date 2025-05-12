import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center space-y-6">
        <h1 className="text-2xl font-semibold text-gray-700">Counter App</h1>
        
        <div className="flex justify-center items-center space-x-6">
          <button
            className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition duration-300"
            onClick={() => dispatch(decrement())}
          >
            −
          </button>
          
          
          
          <button
            className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition duration-300"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter;
