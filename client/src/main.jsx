import React from 'react'
import ReactDOM from 'react-dom/client'

import "./assets/css/app.min.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/icons.min.css"

import NavBar from './components/ui/NavBar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div class="layout-wrapper d-lg-flex">
        <NavBar />
     </div>
  </React.StrictMode>,
)
