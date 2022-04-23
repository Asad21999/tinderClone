import React from 'react'
import Chat from './Chat'
import "./chats.css"

function Chats() {
  return (
    <div className='chats'>
        <Chat 
        name='Mark'
        message="yo man what's up"
        timestamp="40 seconds ago"
        profilePic="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
        />
        <Chat 
        name='fida'
        message="yo man what's up"
        timestamp="40 seconds ago"
        profilePic="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHx8&w=1000&q=80"
        />
        <Chat 
        name='shanu'
        message="yo man what's up"
        timestamp="40 seconds ago"
        profilePic="https://i.pinimg.com/564x/e2/29/5f/e2295f7b9b470f873d0cc4b088ac0726.jpg"
        />
        <Chat 
        name='ajju'
        message="yo man what's up"
        timestamp="40 seconds ago"
        profilePic="https://burst.shopifycdn.com/photos/professional-man-portrait.jpg?width=500&format=pjpg&exif=1&iptc=1"
        />

    </div>
  )
}

export default Chats