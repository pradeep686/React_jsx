import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './index.jsx'
import Car from './components/leranClass'//here the whole components folder is exdents..
import Garage from './components/garage'
import App from './App.jsx'
import Header from './components/header.jsx'
import Colour from './components2/useState.jsx'


createRoot(document.getElementById('root')).render(
  //<StrictMode> is a special component in React that helps identify potential issues in your application during development. 
  // It does not render anything in the UI but enables extra checks and warnings.
//  /  -> Self Closing Tag <Error find and display on website...
<StrictMode>
    <Index/> 
    <Car/>
    <Garage/> 
    <Header/>
    <Colour/>
  </StrictMode>
)
