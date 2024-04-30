import { useState } from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Modal from "./components/Modal"
import Subheader from "./components/Subheader/Subheader"

function App() {
  const [modalIsView,setModalisView] = useState(false);
  const modalOpen = () =>{
    setModalisView(true);
  }

  const closeModal = () =>{
    setModalisView(false);
  }

  const [valueFromForm, setValueFromForm] = useState('');

  const handleValueChange = (value) => {
    setValueFromForm(value);
  };
  return (
    <>
      <Header/>
      <Subheader/>
      <Main onValueChange={handleValueChange} onView={modalOpen}/>
      {modalIsView && <Modal val={valueFromForm} onClose={closeModal} />}
  
      {!modalIsView && <img src='./support.png' className="fixed bottom-[24px] right-[24px]"></img>}
    </>
  )
}

export default App
