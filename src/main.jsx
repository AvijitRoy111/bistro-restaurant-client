import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import AuthProvider from './AuthProvider/AuthProvider'
import { ToastContainer } from 'react-toastify'
import { CartProvider } from './Components/Carts/CartContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" reverseOrder={false} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
