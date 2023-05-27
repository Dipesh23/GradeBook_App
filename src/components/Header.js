import React, { useState } from 'react'
import '../CSS/header.css'
import sir from'../Junaid_sir.jpeg'



function Header() {
    const [popup,setPop]=useState(false);
    const popUpWindow=()=>{
        setPop(true)
    }
    const closePopup=()=>{
        setPop(false)
    }
  return (
    <div>
        <div className='nav'>
        <nav className='navbar'>GradeBook App <br /> <p style={{fontSize:'15px'}}>Grading digital book for exam</p></nav>
        </div>
        <div className='row'>
        <div className='innerRow'>
        <img src={sir} alt="" onClick={()=>popUpWindow()} className='pimg' />
        <p className='pName'>Mir Junaid Rasool</p>
        </div>
        <div className='column'>
        <h4>Group - B</h4>
        <h4>Semester - 8 </h4>
        </div>
        </div>


        <div>
                {
                    popup?
                  
                        <div className="popup">
                            <div className="popup-header">
                                <h1 style={{marginLeft:"40%"}}>Detail of Faculty</h1>
                                <h1 onClick={closePopup} style={{cursor:"pointer"}}>X</h1>
                                
                            </div>
                            <div className='profileRow'>
                             <div>
                            <img src={sir} alt="" className='fImg' />
                            </div>
                            <div className='Fdetails'>
                            <h3>Name- Mir Junaid Rasool (Assistant Professor)</h3>
                            <h3>UMS Id- 27346</h3>
                            <h3>Email - mir.27346@lpu.co.in</h3>
                            <h3>Linkedin - <a href="https://www.linkedin.com/in/mirjunaidrasool/" target='_blank'>Click here</a> </h3>
                            <h3>Contact No - 8825021631</h3>
                            <h3>Department - Computer Science</h3>
                            </div>
                            </div>
                        </div>:""
                  
                }
            </div>
    </div>
  )
}

export default Header