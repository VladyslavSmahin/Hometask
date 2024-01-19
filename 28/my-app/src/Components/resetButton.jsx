function Reset(props) {
    const {text, onClick} = props
    return (
        <button onClick={onClick}>{text}</button>
    )
}
export default Reset