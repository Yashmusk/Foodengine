import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Restros from "./Components/Restros";
import { useState } from "react";

function App() {
  const [selectedItems, setSelecteditems] = useState([]);
  console.log(selectedItems);
  return (
    <div className="App">
      <Header />
      <Restros
        setData={(data) => {
          setSelecteditems(data);
        }}
      />
    </div>
  );
}

export default App;
