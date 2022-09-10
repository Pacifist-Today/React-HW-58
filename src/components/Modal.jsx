import React from "react";
import cn from "classnames"
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Modal extends React.Component {
    static Header = Header
    static Body = Body
    static Footer = Footer

    render() {
        const {isOpen, toggle} = this.props
        const modalClass = cn ({
            'modal': !isOpen,
            'modal fade show': isOpen
        })
        const modalStyles = isOpen ? {display: "block"} : {display: "none"}

        return (
            <div className={modalClass} style={modalStyles} role="dialog">
                <div className="modal-dialog">
                     <div className="modal-content">
                         <Modal.Header toggle={toggle}></Modal.Header>
                        <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Modal.Body>
                        <Modal.Footer toggle={toggle}>Cancel</Modal.Footer>
                    </div>
                </div>
             </div>
        )
    }
}

export default Modal