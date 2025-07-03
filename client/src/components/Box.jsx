import "../styles/Box.css"

export default function Box(props) {

    const divStyle = {
        top: props.y * (props.height + props.margin) + props.y_offset + "rem",
        left: props.x * (props.width + props.margin) + props.x_offset + "rem"
    }

    function filterInput(event) {
        const input = event.target
        input.value = input.value.replace(/[^0-9]/g, "")
        if (input.value.charAt(0) === "0") {
            input.value = input.value.slice(1)
        }
    }

    function sendInputToParent(event) {

        // Bottom vals are unique, use as keys for storing box states
        props.onChange(props.bottom_val, Number(event.target.value))
    }

    function handleInput(event) {
        filterInput(event)
        sendInputToParent(event)
    }

    return (
        <div className="boxDiv" style={divStyle}>
            <p className="boxTop">{props.top_val}</p>
            <input className="boxBottom" type="text" maxLength={2} onChange={handleInput} disabled={props.isSolved}/>
        </div>
    )
}