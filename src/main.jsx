import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Provider} from 'react-redux';
import store from './store/store.js';



import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Home/Home.jsx'
import Employees from './Employees/Employees.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/employees',
    element: <Employees />,
  },
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
