import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Rooms from "./components/Rooms";
import Servises from "./components/Servises";
import FeedBack from "./components/FeedBack";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Hero />
      <Rooms />
      <Gallery />
      <Servises />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default App;
