import React from 'react'
import ReactDOM from 'react-dom/client'

import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'

import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        {/* <FirstApp title='hi' subtitle={123} /> */}
        <CounterApp />

    </React.StrictMode>


)