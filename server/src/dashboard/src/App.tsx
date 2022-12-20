import Diary from "./components/Diary";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Main>
        <h1>
          Hello from the other side!!! You accessed this page because you are
          logged in!
        </h1>
        <Diary />
      </Main>
    </>
  );
}

export default App;
