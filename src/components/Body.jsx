const Body = ({children}) => <div className="modal-body">{children}</div>

Body.defaultProps = {
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
}

export default Body