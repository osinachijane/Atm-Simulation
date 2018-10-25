import React from 'react'
import './Change.css'



const Change=()=> {
    return <div className= 'Change'>
    <form onSubmit= {this.handleSubmit}>
        <label className= "Label"><b> Enter your Old Pin:</b></label>
        <br/>
        <input className = "input" type= 'Password' name="acc_name"/>
        <br/>
        <label className= "Label"><b> Enter your New Pin:</b></label>
        <br/>
        <input className = "input" type= 'Password' name="acc_name"/>

        <button className= "ButtonS" > Change Pin </button>
         <button className= "ButtonES" > Exit </button>
               

        </form>
        </div>
}

export default Change