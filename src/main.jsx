import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App/App'
import './index.css'

import {createBrowserRouter, RouterProvider,} from 'react-router-dom'

import Home from "./Routes/Home/Home"
import Aparelhos from './Routes/Aparelhos/Aparelhos'
import Error404 from './Compenents/Error404.jsx'
import AparelhosDetails from './Compenents/AparelhosDetails.jsx'

/*const router  = createBrowserRouter([
{
  path: "/",
  element: <Home />,
},
{
  path:"Aparelhos",
  element: <Aparelhos />,

},
{
  path:"VisualizarAparelho",
  element: <VisualizarAparelho />,
},

])*/

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path:"Aparelhos",
        element:<Aparelhos/>,
      },
      {
        path: "/Aparelhos/:id",
        element: <AparelhosDetails/>,
      },
        
      
    ]
  }
])




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
