import "../styles/Select.css"

export default function RevealSelect(props) {

    function revealBox() {
        console.log("box revealed")
    }

    function revealPuzzle() {
        console.log("puzzle revealed")
    }

    const selectStyle = props.cursorPos ? {
        left: props.cursorPos[0],
        top: props.cursorPos[1]
    } : null

    return (
        <div className="selectBackdrop" onClick={props.onClose}>
            <div className="select" style={selectStyle}>
                <p className="boxSelect" onClick={revealBox}>Box</p>
                <p className="puzzleSelect" onClick={revealPuzzle}>Puzzle</p>
            </div>
        </div>
    )
}