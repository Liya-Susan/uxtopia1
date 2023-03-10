import React from 'react'
import { useField } from 'formik'
import './TextField.css'

const TextField = ({label,...props}) => {
    const [field,meta]=useField(props)
    
    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input 
            {...field}
            {...props}
            />
        </div>
    )
}

export default TextField
