import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import About from "./pages/About";
import Intro from "./pages/Intro";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
