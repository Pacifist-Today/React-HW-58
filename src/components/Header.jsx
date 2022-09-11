const Header = (props) => {
    const {children, changeHandler} = props

    return (
        <div className="modal-header">
            <div className="modal-title">{children}</div>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={changeHandler}
            />
        </div>
    )
}

Header.defaultProps = {
    changeHandler: null,
    children: "Modal Title"
}

export default Header