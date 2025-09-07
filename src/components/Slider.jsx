import React, { useState } from 'react'

export default function Slider() {
    const [values, setValues] = useState({
        min: 0,
        max: 20,
        currentValue: 10
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            currentValue: Number(e.target.value)
        })
    }

  return (
    <div id='slider'>
        <div id='slider-text' className='flex w-full'>
            <label htmlFor="slider">Character Length</label>
            <p>{values.currentValue}</p>
        </div>
        <input 
            type='range' 
            name='slider' 
            step='1' 
            min={values.min} 
            max={values.max} 
            value={values.currentValue} 
            onChange={handleChange}
            className='slider'
        />
    </div>
  )
}
