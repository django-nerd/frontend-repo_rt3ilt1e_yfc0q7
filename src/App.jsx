import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Footer />
    </div>
  );
}

export default App;
