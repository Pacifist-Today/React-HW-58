import Header from "./Header";

const Footer = (props) => {
    const {children, toggle} = props

    return (
        <div className="modal-footer">
            <button
                type="button"
                className="modal-close-button btn btn-secondary"
                onClick={toggle}
            >
                {children}
            </button>
        </div>
    )
}

// Footer.defaultProps = {
//     toggle: () => {
//
//     }
// }

export default Footer