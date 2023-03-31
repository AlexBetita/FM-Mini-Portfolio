import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { useState } from 'react'

import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfoilo";
import ContactMe from "./components/ContactMe";

import "./index.css";

// const Main = () => {

//   const [ currentLocation, setCurrentLocation ] = useState('')

//   return(<>
//     <header role='header' className="px-[165px] py-[50px]"> 
//       <Header setCurrentLocation={setCurrentLocation}/>
//     </header>

//     <main role='main' className="px-[165px]">
//       <Outlet setCurrentLocation={setCurrentLocation}/>
//     </main>

//     <footer role='footer'>
//       <Footer/>
//     </footer>
//   </>)
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/portfolio",
//         element: <Portfolio/>
//       },
//       {
//         path: "/contact-me",
//         element: <ContactMe/>
//       }
//     ],
//   },
// ]);

const Main = () => {
  const [ currentLocation, setCurrentLocation ] = useState('')

  return (
    <>
      <header role='header' className="px-[165px] py-[50px]"> 
        <Header setCurrentLocation={setCurrentLocation}/>
      </header>

      <main role='main' className="px-[165px]">
        <Outlet setCurrentLocation={setCurrentLocation} />
      </main>

      <footer role='footer'>
        <Footer/>
      </footer>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home setCurrentLocation={props => props.setCurrentLocation} />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/contact-me",
        element: <ContactMe />
      }
    ],
  },
]);




function App() {

  return (
  <>
    <RouterProvider router={router} />
  </>
  );
}

export default App;
