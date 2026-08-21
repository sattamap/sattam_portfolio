import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
          <h1 className="text-4xl font-bold">
            My VA Portfolio
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;