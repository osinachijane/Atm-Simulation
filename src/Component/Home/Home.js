import React from 'react'
import './Home.css' 
import {Link} from 'react-router-dom'

const Home = () => {
        return <div className= 'Home'>
                <form onSubmit= {this.handleSubmit}>
                    <label className= "Label"> <b>Enter your Name:</b></label>
                    <br/>
                    <input className = "input" type= 'text' name="acc_name"/>
                    <br/>
                    <Link to="/Pin">
                        <button className= "ButtonH" >  
                             Continue
                        </button>
                    </Link>
                    </form>


            </div>

}

export default Home