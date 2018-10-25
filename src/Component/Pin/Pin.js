import React from 'react'
import './Pin.css'
import {Link} from 'react-router-dom'



const Pin = (props) => {
    console.log(props)
    return <div className= 'Pin'>
    <form onSubmit= {this.handleSubmit}>
        
        <label className= "Label"><b> Enter your Pin:</b></label>
        <br/>
        <input className = "input" type= 'text' name="acc_name"/>
        <br/>
        <Link to = '/Tranx'>
        {props.name1}
        <button className= "ButtonA"> Continue</button><br/>
        </Link>
         <button className= "ButtonX">  Exit </button>
     </form>


</div>

}











export default Pin