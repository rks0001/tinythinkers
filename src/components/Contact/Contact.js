import React from 'react'
import './contact2.css'

const Contact = () => {
  return (
    <div className='contactcon'>
      
      <h3 className='contitle'>Contact Me</h3>
      <div className="con2">

    <form className="frm" action="/action_page.php">
    <label className='lab'>First Name</label>
    <input className='in' type="text" id="fname" name="firstname" placeholder="Your first name.." />
    <label className='lab'>Last Name</label>
    <input className='in' type="text" id="lname" name="lastname" placeholder="Your last name.." />


    <label className='lab'>Email</label>
    <input className='in' type="email" id="email" name="email" placeholder="Your email" />


    <label className='lab'>Subject</label>
    <textarea className="txtarea" id="subject" name="subject" placeholder="Write something.."></textarea>
    <input className='insub' type="submit" value="Submit" />
    </form>
    </div>
    </div>

      
       
    
    
  )
}

export default Contact