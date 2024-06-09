import React, { useState } from 'react'
import { AiFillStar,AiOutlineStar } from "react-icons/ai";

const Rating = ({rating,style,onClick}) => {

  return (
    <>
    <span className='flex items-center'>

    {[...Array(5)].map((_,i)=>(
        <span key={i} onClick={()=>onClick(i)} className={`${style && 'text-primary'}`}>
             {rating>i ?(<AiFillStar />):(<AiOutlineStar />)}
        </span>
    ))}
    </span>
    
    </>
  )
}

export default Rating