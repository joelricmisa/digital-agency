import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import About from "./pages/About";
import Intro from "./pages/Intro";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Services />
      </main>
    </>
  );
}

export default App;
