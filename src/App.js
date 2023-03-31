import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Body from "./components/Body";
import Footer from "./components/Footer/footer";
import Header from "./components/Header";

import "./index.css";

const Main = () => {
  return(<>
    <header role='header' className="px-[165px] py-[50px]"> 
      <Header/>
    </header>

    <main role='main' className="px-[165px]">
        <Outlet />
    </main>

    <footer role='footer'>
      <Footer/>
    </footer>
  </>)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
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
