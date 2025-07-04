import { useState } from "react"
import "../styles/Box.css"

export default function Box(props) {
    const [boxVal, setBoxVal] = useState()
    
    const divStyle = {
        top: props.y * (props.height + props.margin) + props.offsetY + "rem",
        left: props.x * (props.width + props.margin) + props.offsetX + "rem"
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
        props.onChange(props.bottomVal, Number(event.target.value))
    }

    function handleInput(event) {
        filterInput(event)
        sendInputToParent(event)
    }
    if (props.boxStates){
    console.log(props.boxStates[props.bottomVal].revealed)}
    return (
        <div className="boxDiv" style={divStyle}>
            <p className="boxTop">{props.topVal}</p>
            <input
                className="boxBottom"
                type="text"
                maxLength={2}
                onChange={handleInput}
                disabled={props.isSolved}
                value={!props.boxStates || !props.boxStates[props.bottomVal].revealed ? undefined : props.bottomVal}/>
        </div>
    )
}