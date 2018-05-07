import React from "react";
import "./Modal.css";


const Modal = ({handleClose, show, children, saveMovie}) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";

return (
    <div className={showHideClassName} id="movieModal" data-target="movieModal">
        <section className="modal-main">
            {children}
            <button className="btn btn-primary" onClick={handleClose}>close</button>
            <button className="btn btn-primary" onClick={saveMovie}>save</button>
        </section>


    </div>
)

};

// const Modal = props => {

//     return (
//     <div id= "movieModal" className="modal" tabindex="-1" role="dialog">
//         <div className="modal-dialog" role="document">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title">{props.title}</h5>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <div className="modal-body">
//                     <p>{props.overview}</p>
//                 </div>
//                 <div className="modal-footer">
//                     <button type="button" className="btn btn-primary">Save Movie</button>
//                     <button onClick={props.onClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }

export default Modal;


