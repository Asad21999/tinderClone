import React from 'react'
import "./Header.css";
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import {Link,useHistory} from "react-router-dom"

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
function Header({backButton}){
const history=useHistory();

  return (
    <div className='header'>
      {backButton?(
      <IconButton onClick={()=>history.replace(backButton)} className='header__icon'  >
      <ArrowBackIosNewIcon />
      </IconButton>
      ):(
      <IconButton className='header__icon'  >
      <PersonIcon />
      
      </IconButton>)}

<Link to="/">
<img className='header__logo' src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt="" />      
</Link>
<Link to="/chat" >
<IconButton>
<ForumIcon className='' />

</IconButton>
</Link>
    </div>
  )
}

export default Header
