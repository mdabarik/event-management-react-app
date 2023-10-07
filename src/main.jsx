import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routers/Routers'
import FirebaseAuthProvider from './providers/FirebaseAuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={routes} />
    </FirebaseAuthProvider>
  </React.StrictMode>,
)
