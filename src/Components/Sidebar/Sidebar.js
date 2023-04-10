import React from 'react';
import './Sidebar.css';
import Badge from '../../assets/idBadge.svg';
import clipBoard from '../../assets/clipBoard.svg';
import Iauro from '../../assets/logoIauro.svg';




export default function Sidebar() {
  return (
    <div>
<div className="SideNavigation">
<div style={{display:'flex', flexDirection:'column'}}>
<img src={Iauro} style={{marginLeft:'15px', marginBottom:'19px'}} />

<span style={{backgroundColor:'#328DF6',height:'35px', width:'35px', borderRadius:'4px', padding:'4px',marginLeft:'15px'}}> <img src={Badge} style={{paddingTop:'5px'}} /> </span>
 <img src={clipBoard} style={{marginTop:'14px',height:'25px', width:'25px', marginLeft:'22px' }} />
</div>

</div>
<div className="NavOption"></div>
</div>
  )
}
