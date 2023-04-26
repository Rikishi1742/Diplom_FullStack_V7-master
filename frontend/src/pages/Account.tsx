import React from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

function Account({}: Props) {

  const { UserId } = useParams();

  return (
    <div>Account {UserId} </div>
  )
}

export default Account;