import './index.css' //importa arquivo css

import App from './components/App'
import React from 'react'
import ReactDom from 'react-dom'

//const tag = <strong>OLA REACT !!!</strong>

ReactDom.render(
    <App/>,
    
    document.getElementById('root')
)