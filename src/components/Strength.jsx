import React from 'react'

export default function Strength() {
  return (
    <div className='flex bg-black'>
        <p className='preset-2 flex-1 text-gray-500'>Strength</p>
        <div className='flex items-center gap-4'>
            <p className='preset-2 text-white'>Too Weak</p>
            <div className='flex gap-2'>
                <div className='h-8 w-3 bg-red-400'></div>
                <div className='h-8 w-3 bg-black border-2 border-white'></div>
                <div className='h-8 w-3 bg-black border-2 border-white'></div>
                <div className='h-8 w-3 bg-black border-2 border-white'></div>
            </div>
        </div>

    </div>
  )
}
