import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import React from "react";
import Main from "./components/Main";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
