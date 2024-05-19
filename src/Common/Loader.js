import React from 'react'
import { BiLoaderCircle } from 'react-icons/bi'

export const Loaders = () => {
  return (
    <>
    <div className='flex items-center justify-center bg-white'>
        <div className='h-10 w-36  '>
        <BiLoaderCircle
                className="animate-spin "
                color="black"
                size={10}
              />
        </div>
    </div>
    </>
  )
}
