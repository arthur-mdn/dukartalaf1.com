// Modal.js
import React from "react";

function Modal({ isOpen, onClose, children, title, maxHeight = "90vh", marginBottom = "0" }) {
    if (!isOpen || isOpen === "null") return null;

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={'modal_bg'}>
                <div className={'modal'} style={{maxWidth:'500px', maxHeight: maxHeight, marginBottom: marginBottom, position:"relative"}}>
                    <div className={'modal_content_title'}>
                        <div></div>
                        <h2 className={"expansiva"}>{title || 'Pistes'}</h2>
                        <button className={"close black bg-t fs2 b0"} onClick={onClose}>&times;</button>
                    </div>
                    {children}
                </div>
            </div>
    </div>
    );
}
export default Modal;
