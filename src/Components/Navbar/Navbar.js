import React from 'react';
import './Navbar.css';
import Bell from '../../assets/Bell.svg';
import initialAvatar from '../../assets/initialAvatar.svg';




export default function Navbar() {
  return (
    <div className="TopNavigation">
 
    <div style={{display:'flex'}}>
    <img src={Bell} style={{marginLeft:'1450px'}}/>
    <img src={initialAvatar} style={{height:'35px', width:'35px', marginLeft:'10px'}} />
    </div>
     
     </div>
    )
}
