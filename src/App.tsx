import Header from "./components/Header";
import About from "./pages/About";
import Intro from "./pages/Intro";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
      </main>
    </>
  );
}

export default App;
