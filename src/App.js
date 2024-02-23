import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Profile from "./components/Profile/profile";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
