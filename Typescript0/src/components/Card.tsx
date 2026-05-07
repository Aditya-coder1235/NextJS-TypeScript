import React from 'react'

interface CardProps{
  name:string;
  email:string;
  isMarry?:boolean
}

const Card = ({name,email,isMarry=true}:CardProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{isMarry && "person is married!"}</p>
    </div>
  )
}

export default Card
