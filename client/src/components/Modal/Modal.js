import React from "react";
import "./Modal.css";


const Modal = ({handleClose, show, children}) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";

return (
    <div className={showHideClassName} id="movieModal" data-target="movieModal">
        <section className="modal-main">
            {children}
            <button onClick={handleClose}>close</button>
        </section>


    </div>
)

};

export default Modal;


