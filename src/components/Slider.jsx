import React, { useMemo, useState } from 'react'

export default function Slider() {
    const [values, setValues] = useState({
        min: 0,
        max: 20,
        currentValue: 0,
        step: 1
    })

    const sliderTrackStyle = useMemo(() => {
        const gradientPErcentage = (values.currentValue / values.max) * 100
        return {
            background: `linear-gradient(to right, rgb(164, 255, 175) ${gradientPErcentage}%, rgb(8, 7, 11) ${gradientPErcentage}%)`
        }
    }, [values.currentValue])

    
    const handleChange = (e) => {
        setValues({
            ...values,
            currentValue: Number(e.target.value)
        })
    }


  return (
    <div id='slider'>
        <div id='slider-text' className='flex justify-between items-center gap-2 w-full'>
            <label htmlFor="slider" className='preset-4 text-gray-200-2'>Character Length</label>
            <p className='preset-1 text-neon'>{values.currentValue}</p>
        </div>
        <input 
            type='range' 
            name='slider' 
            step={values.step} 
            min={values.min} 
            max={values.max} 
            value={values.currentValue} 
            onChange={handleChange}
            className='slider w-full'
            style={sliderTrackStyle}
            aria-label='Character number selector'
        />
    </div>
  )
}
