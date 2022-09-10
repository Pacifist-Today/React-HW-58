import React from "react";

class Header extends React.Component {
    render() {
        const {child, toggle} = this.props
        return (
            <div className="modal-header">
                <div className="modal-title">{child}</div>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={toggle}
                />
            </div>
        )
    }
}

Header.defaultProps = {
    toggle: () => {
        console.log("1")
    },
    child: "Hello"
}

export default Header