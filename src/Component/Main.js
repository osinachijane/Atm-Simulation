import React, {Component} from 'react'
import Nav  from './Nav/Nav'
import Zenith from './Zenith/Zenith'
import Home from './Home/Home'
import Pin from './Pin/Pin'
import Tranx from './Tranx/Tranx'
import Change from './Change/Change'
import Amount from './Amount/Amount'
import Check from  './Check/Check'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {withRouter} from 'react-router'

class Main extends Component {

render (){
    console.log(this.props)
    return <div>
        <Nav/>
        <Zenith />
            <Route exact path="/" render={() => (
                <Home />
            )} />

            <Route path="/Pin" render={() => (
                <Pin {...this.props}/>
            )} />

            <Route path= "/Tranx" render={() => (
                <Tranx/>
            )}/>
          
          
            <Route path="/Change" render={() => (
                <Change/>
            )} />

            <Route path="/Amount" render={() => (
                <Amount/>
            )} />

            <Route path="/Check" render={() => (
                <Check {...this.props}/>
            )} />

   
        </div>

}
}


const mapStateToProps = (state) => {
    return{
    name1: state.name,
    age1: state.age
    }
}

export default withRouter(connect(mapStateToProps)(Main))