// EventModal.js
import React from "react";

function EventModal({ isOpen, onClose, children, title, maxHeight = "90vh",maxWidth = '500px', marginBottom = "0" }) {
    if (!isOpen || isOpen === "null") return null;

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={'modal_bg'}>
                <div className={'modal'} style={{maxWidth:maxWidth, maxHeight: maxHeight, width:'100%',height:'77vh', marginBottom: marginBottom, position:"relative"}}>
                    <div className={'modal_content_title'}>
                        <div></div>
                        <button className={"close black bg-t fs2 b0"} onClick={onClose}>&times;</button>
                    </div>
                    {children}
                </div>
            </div>
    </div>
    );
}
export default EventModal;
