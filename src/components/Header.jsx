import React from "react";

const Header = (props) => {
    const {children, toggle} = props

    return (
        <div className="modal-header">
            <div className="modal-title">{children}</div>
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

// Header.defaultProps = {
//     isOpen: true,
//     toggle: (isOpen) => !isOpen,
//     child: "Hello"
// }

export default Header