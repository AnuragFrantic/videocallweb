


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';


function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<WebLayout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          {/* About, Terms, Privacy, EULA, Plans, Delete Account... all come from the Policies API */}
          <Route path='/:slug' element={<Policy />} />
        </Route>


      </>


    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />

    </>
  )
}

export default App
