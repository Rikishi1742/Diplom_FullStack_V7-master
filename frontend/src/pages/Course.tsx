import React from 'react'
import { useParams } from 'react-router-dom'
import CourseContent from '../components/Course/CourseContent';

type Props = {}

function HomePage({}: Props) {
  const { id } = useParams();
  
  return (
    <div className='Container'>
      <CourseContent id={id}/>
    </div>
  )
}

export default HomePage