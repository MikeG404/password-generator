import React from 'react'

export default function ChecboxesList() {
  return (
    <div>
        <ul className='flex flex-col gap-4 preset-4 text-gray-200-2'>
            <li>
                <input type="checkbox" className='checkbox' name='checkbox-1'/>
                <label htmlFor="checkbox-1">Include Uppercase Letters</label>
            </li>
            <li>
                <input type="checkbox" className='checkbox' name='checkbox-1'/>
                <label htmlFor="checkbox-1">Include Lowercase Letters</label>
            </li>
            <li>
                <input type="checkbox" className='checkbox' name='checkbox-1'/>
                <label htmlFor="checkbox-1">Include Numbers</label>
            </li>
            <li>
                <input type="checkbox" className='checkbox' name='checkbox-1'/>
                <label htmlFor="checkbox-1">Include Symbols</label>
            </li>   
        </ul>
    </div>
  )
}