import React from 'react'
import './Check.css'

const Check= (props)  => { 
    return<div className='Check'>

        <p className='Bal'>Your Account Balance is:{props.age1}</p>
    
          <button className= "ButtonP">  Continue </button><br/>
          <button className= "ButtonU">  Exit </button>


        </div>

}





export default Check