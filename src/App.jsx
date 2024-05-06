import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Modal from "./components/Modal"
import Subheader from "./components/Subheader/Subheader"
import Payment from "./components/Payment/Payment";
import ConfirmPayment from './components/Payment/ConfirmPayment';
import ModalConfirm from './components/ModalConfirm';
import ModalSucces from './components/ModalSucces';

function App() {
    const [modalIsView, setModalIsView] = useState(false);
    const [modalIsViewConfirm, setModalIsViewConfirm] = useState(false);

    const modalOpen = () => {
        setModalIsView(true);
        
    }

    const closeModal = () => {
        setModalIsView(false);
    }

    const modalOpenConfirm = () => {
        setModalIsViewConfirm(true);
    }
    
    const closeModaConfirml = () => {
        setModalIsViewConfirm(false);
    }
    
    const [valueFromForm, setValueFromForm] = useState('');

    const handleValueChange = (value) => {
        setValueFromForm(value);
    };
    return (
        <Router>
            {/* change routes in modal windows */}
            <div>
                <Header />
                <Subheader />
                <Routes>
                    {/* first route for commission 1 and first modal*/}
                    <Route path="/" element={<React.Fragment><Main onValueChange={handleValueChange} onView={modalOpen} />{modalIsView && <Modal val={valueFromForm} onClose={closeModal} />}</React.Fragment>}/>
                    {/* second route for commission 2 and second modal*/}
                    <Route path="/payment" element={<React.Fragment><Payment onView={modalOpen}/>{modalIsView && <ModalSucces onClose={closeModal} />}</React.Fragment>} />
                    {/* third route for commission 3 and the modal for commission 4*/}
                    <Route path="/confirm" element={<React.Fragment><ConfirmPayment  onViewConfirm={modalOpenConfirm}/>{modalIsViewConfirm && <ModalConfirm onClose={closeModaConfirml} />}</React.Fragment>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
