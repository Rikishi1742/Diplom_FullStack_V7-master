import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

function HomePage({}: Props) {
  const { id } = useParams();
  
  return (
    <div className='Container'>
      {id}
    </div>
  )
}

export default HomePage