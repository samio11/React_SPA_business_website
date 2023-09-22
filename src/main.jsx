import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MailView from './MainElement/MailView'
import About from './About'
import Contact from './Contact'
import MoreInfo from './MoreInfo'
import Home from './Home'
import ProductInformation from './ProductInformation'
const myWeb = createBrowserRouter([
  {
    path : '/',
    element : <MailView></MailView>,
    children :[
      {
        path : '/',
        element : <Home></Home>
      },{
        path : '/about',
        element: <About></About>,
        loader : ()=> fetch(`https://dummyjson.com/products`)
      },{
        path : '/contact',
        element : <Contact></Contact>
      },
      {
        path : '/more',
        element: <MoreInfo></MoreInfo>
      },{
        path : `/product/:id`,
        element : <ProductInformation></ProductInformation>,
        loader : (para)=> fetch(`https://dummyjson.com/products/${para.params.id}`)
        
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myWeb}></RouterProvider>
  </React.StrictMode>,
)
