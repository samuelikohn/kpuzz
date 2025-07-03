import "../styles/Notes.css"

export default function Notes(props) {

    const divStyle = {
        top: props.y * (props.height + props.margin) + props.y_offset + "rem",
        left: props.x * (props.width + props.margin) + props.x_offset + "rem"
    }

    return (
        <textarea style={divStyle}/>
    )
}