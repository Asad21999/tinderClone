import React from 'react'
import "./chat.css"
import { Avatar } from '@mui/material'
import {Link} from "react-router-dom"

function Chat({name,message, profilePic, timestamp}) {
  return (
    <Link to={`/chat/${name}`}>
    <div className='chat'>
      <Avatar className='chat__Image' alt={name} src={profilePic} />
      <div className='chat__details'>
          <h3>{name}</h3>
          <p>{message}</p>
      </div>
<p className='chat__timestamp'>{timestamp}</p>
    </div>
    </Link>

  )
}

export default Chat
