import React from "react";
import Modal from "./components/Modal"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle} />
            </div>
        );
    }
}

export default App