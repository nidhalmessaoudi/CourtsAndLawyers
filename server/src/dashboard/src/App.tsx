import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import type {} from "@mui/x-date-pickers/themeAugmentation";

import Diary from "./components/Diary";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  function menuHandler() {
    setSidebarIsOpen((oldState) => !oldState);
  }

  return (
    <>
      <CssBaseline />
      <Navbar menuHandler={menuHandler} />
      <Sidebar isOpen={sidebarIsOpen} />
      <Main>
        <Diary />
      </Main>
    </>
  );
}

export default App;
