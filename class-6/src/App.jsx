// import React from 'react'

// const App = () => {
//   const submitForm = (e) => {
//     e.preventDefault()
//     console.log('Form submitted')

//   }
//   return (
//     <div>
//       <form onSubmit={(e) => submitForm(e)}>
//         <input type="text" name="username" placeholder="Username" />
        
//         <button type="submit">Submit</button>
//       </form>
//     </div>
  
    
//   )
// }

// export default App
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()



    setAllUsers([...allUsers, { title, email }])

    setTitle('')
    setEmail('')
  }


  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder='Enter name'
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <input
          type="text"
          placeholder='Enter email'
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />

        <button>Submit</button>
      </form>

      {allUsers.map(function (elem, idx) {
        return <div key={idx}>
          <h4>{elem.title}</h4>
          <p>{elem.email}</p>
        </div>
      })}
    </div>
  )
}

export default App


