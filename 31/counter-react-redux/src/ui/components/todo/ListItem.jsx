import '/style.css';


function ListItem(props){
    const {children} = props
    return (
            <li className='liItem'>
                {children}
            </li>
    );
}
export default ListItem