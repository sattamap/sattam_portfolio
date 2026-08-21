import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <Services/>
        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">About</h2>
        </section>

        <section
          id="tools"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Tools</h2>
        </section>

        <section
          id="portfolio"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Portfolio</h2>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App;