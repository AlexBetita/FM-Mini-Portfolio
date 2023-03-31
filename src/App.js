import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "./components/Main";
import Footer from "./components/Footer/footer";
import Header from "./components/Header";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
]);


function App() {
  return (
  <>
    <header role='header' className="px-[165px] py-[50px]"> 
      <Header/>
    </header>
    <main role='main' className="px-[165px]">
      <RouterProvider router={router} />
    </main>
    <footer role='footer'>
      <Footer/>
    </footer>
  </>
  );
}

export default App;
