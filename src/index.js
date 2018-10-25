import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Main from './Component/Main'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import reducer from './redux/reducer'

const store1 = createStore(reducer)
ReactDOM.render(<Provider store={store1} ><BrowserRouter><Main /></BrowserRouter></Provider>, document.getElementById('root'));

