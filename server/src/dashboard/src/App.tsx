import { useState } from "react";

import Diary from "./components/Diary";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [showModal, setShowModal] = useState(true);

  function modalCloseHandler() {
    setShowModal(false);
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <Main>
        <Diary />
      </Main>
      {showModal && (
        <Modal heading="New Case" closeIt={modalCloseHandler}>
          Create a New Case
        </Modal>
      )}
    </>
  );
}

export default App;
