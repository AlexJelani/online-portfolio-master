import React from 'react'

//import social data
import { social } from '../data'

const Socials = () => {
  return (
    <ul className='flex space-6-x'>
      {social.map((item, index)=>{
        return <li key={index} className='flex justify-center items-center key={index}'>
            <a className='text-base mx-1'   href={item.href} target="_blank">
                {item.icon}
            </a>
        </li>
      })}
    </ul>
  )
}

export default Socials
