import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Modal extends React.Component {
    static Header = Header
    static Body = Body
    static Footer = Footer

    render() {
        return (
            <div className={this.props.isOpen ? "modal fade show" : "modal"}
                 style={this.props.isOpen ? {display: "block"} : {display: "none"}} role="dialog">
                <div className="modal-dialog">
                     <div className="modal-content">
                        <Modal.Header toggle = {this.props.toggle}>Modal title</Modal.Header>
                        <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Modal.Body>
                        <Modal.Footer toggle = {this.props.toggle}>Cancel</Modal.Footer>
                    </div>
                </div>
             </div>
        )
    }
}

export default Modal