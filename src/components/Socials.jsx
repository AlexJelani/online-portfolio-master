import React from 'react'

//import social data
import { social } from '../data'

const Socials = () => {
  return (
    <ul className='flex space-6-x'>
      {social.map((item, index)=>{
        return <li className='flex justify-center items-center key={index}'>
            <a className='text-base'   href={item.href}>
                {item.icon}
            </a>
        </li>
      })}
    </ul>
  )
}

export default Socials
