import "./App.css";
import { createContext, useState, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Login from "./Components/Login";
import Regsiter from "./Components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Regsiter />,
    errorElement: <Error />,
  },
]);

const SelectedItemsContext = createContext();
export function useSelectedItems() {
  return useContext(SelectedItemsContext);
}

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  console.log(selectedItems);
  return (
    // why it has both slecteditem and setselecteditems
    <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </SelectedItemsContext.Provider>
  );
}

export default App;
