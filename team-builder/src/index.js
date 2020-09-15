import React, { useState } from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
//import { Simulate } from 'react-dom/test-utils';


const membersList = [
  { 
    memberFirstName: 'Neo', 
    memberLastName: 'Anderson', 
    memberFamily: 'Matrix',
  }
]

const initialFormValues = {
  memberFirstName: '',
  memberLastName: '',
  memberFamily: '',
}

function GoLForm() {
  const [members, setMembers] = useState(membersList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onChange = evt => {
    const { name, value } = evt.target
    setFormValues({...formValues, [name]: value})
  }
  const submit = evt => {
    evt.preventDefault()
    const newMember = {
      memberFirstName: formValues.memberFirstName.trim(),
      memberLastName: formValues.memberLastName.trim(),
      memberFamily: formValues.memberFamily.trim(),
    }
    setMembers([...members, newMember])
    setFormValues(initialFormValues)
  }

  return(
    <div className='container'>
      <h1>GoL</h1>
      <h2>Game Of Lambda</h2>
      {
        members.map((member, idx) => {
          return <div key={idx}>{member.memberFirstName} {member.memberLastName} is a member of the House {member.memberFamily} 
          </div>
        })
      }
      <form onSubmit={submit}>
        <div class='boxes'>
          <input 
          type='text' 
          name='memberFirstName' 
          onChange={onChange}
          value={formValues.memberFirstName}
          placeholder='First Name' 
          />
        <br />
          <input 
          type='text' 
          name='memberLastName' 
          onChange={onChange}
          value={formValues.memberLastName}
          placeholder='Last Name' 
          />
        <br />
          <select 
            type='text' 
            name='memberFamily' 
            onChange={onChange}
            value={formValues.memberFamily}>
              <option value=''>:::Select:::</option>
              <option value='FullStack Dev'>FullStack Dev</option>
              <option value='Data Science'>Data Science</option>
              <option value='iOS Dev'>iOS Dev</option>
              <option value='UX'>UserExperience</option>
              <option value='Android Dev'>Android Dev</option>  
           </select>
        </div>

        <br />
          <button>Winter Break is Coming</button>
       
      </form>
    </div>
  )
}
render(
  <React.StrictMode>
    <GoLForm />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

