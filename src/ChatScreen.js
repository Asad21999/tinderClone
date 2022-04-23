import React, { useState } from 'react'
import "./chatscreen.css"
import { Avatar } from '@mui/material'
function ChatScreen() {

const [input,setInput]=useState("")

    const [messages,setMessages]=useState([
        {
            name:"Mark",
            image:"https://burst.shopifycdn.com/photos/professional-man-portrait.jpg?width=500&format=pjpg&exif=1&iptc=1",
            messages:"what's up bro <3"
        },
        {
            name:"Mark",
            image:"https://burst.shopifycdn.com/photos/professional-man-portrait.jpg?width=500&format=pjpg&exif=1&iptc=1",
            messages:"what's up bro <3"
        },
        {
          
            messages:"what's up bro <3"
        }
    ])
    const handleSend=(e)=>{
        e.preventDefault();
        setMessages([...messages,{messages: input}])
        setInput('');
        // console.log(messages)
    }
  return (
      <div>
    <div className='chatScreen'>
 
      <p className='chatScreen___timestamp'>you matched with Mark on 02/02/2022</p>
      { 
      messages.map(message=>(
        message.name?(
        <div className='chatScreen___messages'>
            <Avatar alt={message.name} src={message.image} />
            <p className='chatScreen__text'> {message.messages}</p>
        </div>)
        :
        (
             <div className='chatScreen___messages'>
             <p className='chatScreen__textUser'> {message.messages}</p>
         </div>)
        )
    )
      }

<div >
    <form className='chatCreen__inputForm' action="">
        <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" className='chatCreen__inputField' />
        <button onClick={handleSend} type="submit" className='chatCreen__inputButton' placeholder='send a message'>send</button>
    </form>
</div>

</div>
    </div>
  )
}

export default ChatScreen
