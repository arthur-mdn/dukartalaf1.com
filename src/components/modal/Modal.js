// Modal.js
import React from "react";

function Modal({ isOpen, onClose, children, title, maxHeight = "90vh",maxWidth='500px',width="100%", marginBottom = "0", marginTop = "0" }) {
    if (!isOpen || isOpen === "null") return null;

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={'modal_bg'}>
                <div className={'modal'} style={{maxWidth:maxWidth, width:width, maxHeight: maxHeight, marginBottom: marginBottom,marginTop: marginTop, position:"relative"}}>
                    <div className={'modal_content_title'}>
                        <div></div>
                        <h2 className={"expansiva"} style={{margin:0}}>{title || 'Pistes'}</h2>
                        <button className={"close black bg-t fs1-5 b0"} onClick={onClose}>&times;</button>
                    </div>
                    {children}
                </div>
                <img src="/logo_white.png" alt="Logo" style={{maxWidth: '170px',width:'80%',marginTop:'0'}}/>
            </div>
    </div>
    );
}
export default Modal;
