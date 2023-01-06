import CssBaseline from "@mui/material/CssBaseline";

import Diary from "./components/Diary";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Main>
        <Diary />
      </Main>
    </>
  );
}

export default App;
