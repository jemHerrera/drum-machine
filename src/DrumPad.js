function DrumPad(props){
    return (
        <li 
            id={props.id} 
            className="drum-pad"
            onClick={props.onClick}
        >
            {props.id}
        </li>
    )
}

export default DrumPad