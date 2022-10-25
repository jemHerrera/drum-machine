function DrumPad(props){
    return (
        <li 
            id={props.content.id} 
            className={`drum-pad${props.displayed === props.content.name ? ' active' : ''}`}
            onClick={props.onClick}
        >
            {props.content.key}
            <audio id={props.content.key} className="clip" src={props.content.audio}></audio>
        </li>
    )
}

export default DrumPad