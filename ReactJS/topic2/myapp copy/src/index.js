import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { basliq } from './helper'


ReactDOM.render(
<React.StrictMode>
    {basliq}
    <App/>
</React.StrictMode>
,document.getElementById('root'))