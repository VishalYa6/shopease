import React from 'react'
import ArrowIcon from '../common/ArrowIcon'

const Card = ({imagePath , title, description, actionArrow, height, width}) => {
  return (
    <div className='flex flex-col p-6'>
      <img
        className="h-[280px] w-[240px] object-cover object-center border rounded hover:scale-105 cursor-pointer"
        src={imagePath}
        alt={title}
      />
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <p className='text-[16px] p-1'>{title}</p>
          {description && <p className='text-[12px] px-1 text-gray-500'>{description}</p>}
        </div>
        {actionArrow && <span className='cursor-pointer pr-2 py-2'><ArrowIcon /></span>}
      </div>
    </div>
  )
}

export default Card