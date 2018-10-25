import React from 'react'
import './Tranx.css' 
import {Link} from 'react-router-dom'



const Tranx = () => {
    return <div className= 'Tranx'>
           
            <p className= 'Par'>Which Operation Do You Want to Perform?</p>
    <Link to= "/Amount">
                <button className= "ButtonW" > Withdrawal </button>
    </Link>
         <Link to="/Check">
                <button className= "ButtonCB" > Check Balance </button>
        </Link>
               <div>
     <Link to= '/Change'>
                <button className= "ButtonC" > Change Pin </button>
     </Link>
                <button className= "ButtonE" > Exit </button>
                </div>
              


        </div>

}
export default Tranx