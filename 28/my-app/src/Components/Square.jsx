import PropTypes from "prop-types";

function Square(props) {
    const {value, onClick,} = props
    return (
        <>
            <button onClick={onClick} className='square'>
                {value}
            </button>
        </>
    )
}
Square.propType = {
    value: PropTypes.oneOf([`x`, '0']),
    onClick: PropTypes.func
}
export default Square
