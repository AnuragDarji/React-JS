import React from 'react'
import { useRecoilValue } from 'recoil'
import { formState } from './atoms'

const FormSummary = () => {
    const form = useRecoilValue(formState);
    
  return (
    <div>
        <h2>Form Summary</h2>
        <p>Name: {form.name}</p>
        <p>Email: {form.email}</p>
    </div>
  )
}

export default FormSummary