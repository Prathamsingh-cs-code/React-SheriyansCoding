import React from 'react'
import Card from './components/Card'
const App = () => {
  // const age = 20;
  // const name = "Sheriyan Coding"
  // const arr = ['alok', 'bhanu', 'charan', 'deepak'];

  return (
    <div className='p-3 h-screen bg-black text-white'>
   {Card('Sheriyan', 'Coding')}
   </Card >
   
    </div>
  )
}

export default App
