import { useRoutes,BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Contex' 

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFount from '../NotFount'
import SignIn from '../SignIn'
import Navbar from '../../Componentes/Navbar'
import CheckoutSideMenu from '../../Componentes/CheckoutSideMenu'
import './App.css'
import { use } from 'react'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/',element: <Home />},
    {path: '/clothes',element: <Home />},
    {path: '/electronics',element: <Home />},
    {path: '/fornitures',element: <Home />},
    {path: '/toys',element: <Home />},
    {path: '/others',element: <Home />},
    {path: '/my-account',element: <MyAccount />},
    {path: '/my-order',element: <MyOrder />},
    {path: '/my-orders',element: <MyOrders />},
    {path: '/my-orders/last',element: <MyOrder />},
    {path: '/my-orders/:id',element: <MyOrder />},
    {path: '/*',element: <NotFount />},
    {path: '/sign-in',element: <SignIn />},
  ])
  return routes
}

const App = () => {

  return (
  <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
     </BrowserRouter>
  </ShoppingCartProvider> 


 
  )
}

export default App
