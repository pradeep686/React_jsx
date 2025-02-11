import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  //<StrictMode> is a special component in React that helps identify potential issues in your application during development. 
  // It does not render anything in the UI but enables extra checks and warnings.
//  /  -> Self Closing Tag <Error find and display on website...
<StrictMode>
<App/>
  </StrictMode>
)
