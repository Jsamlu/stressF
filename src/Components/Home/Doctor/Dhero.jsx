import React from 'react'
import { useNavigate } from 'react-router-dom'


function Dhero() {
    const navigate = useNavigate();
  return (
    <div>
       
        <button onClick={()=>{navigate('/profile')}}> goto darhboard</button>    
    </div>
  )
}

export default Dhero