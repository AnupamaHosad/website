import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";

const ModalContent = (props) => {
    const { showClose, children, modalRef, className } = props;
    const [ isOpen, setIsOpen ] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener("keyup", (event) => {
            if (event.key === "Escape") {
                hideModal();
            }
        });
    }, []);

    useImperativeHandle(modalRef, () => {
        return {
            showModal,
            hideModal
        }
    });
    

    if (isOpen) {
        return (<div className={`modal ${className}`}>
            {showClose && <div className="modal-close-cont">
                <span className="modal-close" onClick={hideModal}>x</span>
            </div>}
            <div className="modal-content">
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>);
    } else {
        return null;
    }
};

ModalContent.defaultProps = {
    showClose: true,
    className: ""
};

let Modal = (props, ref) => {
    const { children, ...restProps } = props;
    const domNode = typeof(document) !== "undefined" ? document.querySelector("body") : null;


    return domNode ? ReactDOM.createPortal(
        <ModalContent {...restProps} modalRef={ref}>
            {children}
        </ModalContent>,
        domNode
    ) : null
};

Modal = forwardRef(Modal);

export default Modal;