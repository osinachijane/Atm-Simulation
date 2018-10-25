import React from 'react'
import './Amount.css'


const Amount =() =>{
    return <div className='Amount'>

                <p className= 'AMT'>Select Amount You Want To Withdraw?</p>
   
              
              <button className= "ButtonL" > N10,000 </button>
              <button className= "ButtonB" > N20,000 </button>
              

              <div>
              <button className= "ButtonK" > N5,000 </button>
              <button className= "ButtonG" > N40,000 </button>
              </div>
              
              <div>
              <button className= "ButtonQ" > N1,000</button>
              <button className= "ButtonT" > Others </button>
             </div>
              
              
              
                </div>
}







export default Amount