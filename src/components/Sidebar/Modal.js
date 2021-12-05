import { useRef } from "react";
import './Modal.css';

function Modal({children,showModal,setShowModal}){
    const modalRef=useRef();

    function closeModal(e){
        if(modalRef.current===e.target){
            setShowModal(false);
        }
    }

    return(
        showModal &&
        <div className='modal' ref={modalRef} onClick={closeModal}>
            <div className='container'>
                {children}
            </div>
        </div>
    )
}

export default Modal;