import React from "react";
import Modal from  "./Modal"

class Component extends React.Component {
    state = {
        modal: false,
        style: {
            display: "none",
            className: "modal"
        }
    };

    toggle = (e) => {
        if (this.state.modal === false) {
            this.setState({style: {display: "none", className: "modal"}})
        }   else {
            this.setState({style: {display: "block", className: "modal fade show"}})
        }
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.modal} toggle = {this.toggle} />
            </div>
        );
    }
}

export default Component