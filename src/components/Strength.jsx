import React from 'react'

export default function Strength() {
  return (
    <div className='flex items-center bg-gray-850-2 px-4 py-[14px]'>
        <p className='preset-4 flex-1 text-gray-500'>STRENGTH</p>
        <div className='flex items-center gap-4'>
            <p className='preset-2 text-white'></p>
            <div className='flex gap-2'>
                <div className='h-8 w-3 border-2 border-white'></div>
                <div className='h-8 w-3  border-2 border-white'></div>
                <div className='h-8 w-3  border-2 border-white'></div>
                <div className='h-8 w-3  border-2 border-white'></div>
            </div>
        </div>

    </div>
  )
}
