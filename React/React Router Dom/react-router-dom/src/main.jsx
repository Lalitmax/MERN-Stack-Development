import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Footer } from './Components/footer.jsx'
import { About } from './Components/about.jsx'
import { Contact } from './Components/contact.jsx'
import { Layout } from './Layout.jsx'
import { Home } from './Components/home.jsx'
import { GithubUsers } from './Components/githubUsers.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       }
//       ,
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//       ,
//       {
//         path:'githubUsers',
//         element:<GithubUsers/>
//       }
//     ]

//   }
// ]);

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='githubusers' element={<GithubUsers />} />
      
    </Route>
  )
)






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
