function Reset(props) {
    const {text, onClick} = props
    return (
        <button onClick={onClick} className='resetB'>{text}</button>
    )
}
export default Reset