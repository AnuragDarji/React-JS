import React from 'react'
import { useRecoilState } from 'recoil'
import { formState } from './atoms'

const EmailInput = () => {

    const [form, setForm] = useRecoilState(formState);

    const handleEmailChange = (event) => {
         setForm((prevForm) => ({...prevForm, email: event.target.value}));
    }

  return (
    <div>
        <label>Email:</label> 
        <input type='email' value={form.email} onChange={handleEmailChange}/>
    </div>
  )
}

export default EmailInput