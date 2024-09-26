import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
