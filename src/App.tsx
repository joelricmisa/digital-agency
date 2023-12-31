import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Intro from "./pages/Intro";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";

function App() {
  console.log();
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Intro />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Faqs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
