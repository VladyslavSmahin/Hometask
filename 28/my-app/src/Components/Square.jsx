function Square(props) {
    const {value, onClick} = props
    return (
        <>
            <button>
                {value}
            </button>
        </>
    )
}

export default Square
