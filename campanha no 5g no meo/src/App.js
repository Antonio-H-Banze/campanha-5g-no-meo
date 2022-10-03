import logo from './MEO-logo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Vantagens } from "./components/Vantagens";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Vantagens />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
