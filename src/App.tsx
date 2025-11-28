import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import Main from "./components/Main";
import FormAreaHookForm from "./components/Form/FormAreaHookForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <FormAreaHookForm />
    </div>
  );
};

export default App;
