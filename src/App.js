import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

function App() {
  return (
    <div>
      <Navbar />
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
