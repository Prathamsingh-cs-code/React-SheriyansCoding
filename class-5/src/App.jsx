
// import React from 'react'

// const App = () => {

// // eslint-disable-next-line no-undef
// const [Num, setNum] = useState('prathamsingh')
 
//   const btbClicked = () => {
// setNum('aloksingh')
//   }
//   return (
//     <div>
//       <h1>Hello prathamsingh</h1>
//       <h1>{Num}</h1>
//       <button onClick={btbClicked}>Click me</button>  
//     </div>
//   )
// }

// export default App
// import React from 'react'

// const App = () => {
//   // eslint-disable-next-line no-undef
//   const[first, setFirst] = useState(0)

//   const arr = ['aloksingh', 'prathamsingh', 'rahulsingh']
//   return (

//     <div>
//       <h1>{arr[first]}</h1>
//       <button onClick={() => setFirst((first + 1) % arr.length)}>Click Me</button>  
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [Num, setNum] = useState([38, 45, 60, 72, 85]);
//   return (
//     <div>
//       <ul>
//         {Num.map((n, i) => <li key={i}>{n}</li>)}
//       </ul>
//       <button onClick={() => setNum(prev => [...prev, Math.floor(Math.random() * 100)])}>
//         Add number
//       </button>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// const App = () => {
// const [marks, setMarks] = useState([38, 45, 60, 72, 85]);
// function gracestudent() {
//   setMarks(prev => prev.map((mark) => {
//     return mark + 5
//   }))
//   console.log(marks)
// }
//   return (
//     <div>
//   {marks.map(function(elem, idx) {
//     return <h1 key={idx}> Student marks {idx + 1}={elem>33?"Pass":"Fail"}</h1>
//   })}
//     <button onClick={gracestudent}> Click me</button>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'
import Washroom from './components/Washroom'

const App = () => {

  const [gender, setGender] = useState('Male')

  function changeGender() {
    if (gender == 'Male') {
      setGender('Female')
    } else if (gender == 'Female') {
      setGender('Other')
    }else {
      setGender('Male')
    }
  }

  return (
    <div className='parent'>
      <h1>Your gender is ~ {gender}</h1>
      <button onClick={changeGender}>Change Gender</button>

      <Washroom user={gender} />
    </div>
  )
}

export default App