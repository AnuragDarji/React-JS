import React from 'react'
import { useRecoilState } from 'recoil' 
import { formState } from './atoms'

const NameInput = () => {

    const [form, setForm] = useRecoilState(formState);

    const handleNameChange = (event) => {
        setForm((prevForm) => ({...prevForm, name: event.target.value}));
    }

  return (
    <div>
        <label>Name:</label>
        <input type='text' value={form.name} onChange={handleNameChange}/>
    </div>
  )
}

export default NameInput