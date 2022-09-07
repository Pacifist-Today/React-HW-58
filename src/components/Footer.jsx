function Footer (props) {
    return (
        <div className="modal-footer">
            <button type="button" className="modal-close-button btn btn-secondary" onClick={props.toggle}>{props.children}</button>
        </div>
    )
}

export default Footer