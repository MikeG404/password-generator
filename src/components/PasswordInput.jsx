import React from 'react'
import IconCopy from '/images/icon-copy.svg'

export default function PasswordInput() {
  return (
    <div className='flex items-center p-4 bg-gray-800-2'>
        <input type="text" placeholder='P4$5W0rD!' className='preset-2 text-white placeholder:text-gray-700-2' />
        <img src={IconCopy} alt="Icon copy" className='w-[17.5px] h-5'/>
    </div>
  )
}
