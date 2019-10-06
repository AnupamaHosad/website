import React from "react";
import ReactDOM from "react-dom";

const domNode = typeof(document) !== "undefiend" ? document.querySelector("body") : {};

const ModalContent = ({ content, open }) => {

    if (open) {
        return (<div className="modal">
            <div className="modal-body">
                {content}
            </div>
        </div>);
    } else {
        return null;
    }
};

const Modal = (props) => {
    return ReactDOM.createPortal(
        <ModalContent content={props.children} {...props} />,
        domNode
    )
};

export default Modal;