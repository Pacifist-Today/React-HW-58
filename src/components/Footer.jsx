const Footer = (props) => {
    const {children, changeHandler} = props

    return (
        <div className="modal-footer">
            <button
                type="button"
                className="modal-close-button btn btn-secondary"
                onClick={changeHandler}
            >
                {children}
            </button>
        </div>
    )
}

Footer.defaultProps = {
    changeHandler: null,
    children: "Cancel"
}

export default Footer