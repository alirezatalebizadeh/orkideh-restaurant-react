import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import routes from "./routes";


function App() {
  let router = useRoutes(routes);

  return (
    <div className="App">
      <Header />
      {router}
      <Footer />
    </div>
  );
}

export default App;
