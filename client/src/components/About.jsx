import { ScrollArea } from "@base-ui-components/react/scroll-area"
import "../styles/Overlay.css"

export default function About(props) {

    function handleBackdropClick() {
        props.onClose()
    }

    function handleContentClick(event) {
        event.stopPropagation()
    }

    function openWebsite() {
        // window.open(TODO, "_blank").focus()
    }

    function openGithub() {
        window.open("https://github.com/samuelikohn", "_blank").focus()
    }

    function openBlog() {
        // window.open(TODO, "_blank").focus()
    }

    function openSource() {
        window.open("https://github.com/samuelikohn/K-Puzz", "_blank").focus()
    }

    return (
        <div className="overlayBackdrop" onClick={handleBackdropClick}>
            <ScrollArea.Root className="scrollArea">
                <ScrollArea.Viewport className="viewport">
                    <ScrollArea.Content>
                        <div className="overlay about" onClick={handleContentClick}>
                            <h2>About</h2>
                            <div className="controlBox">
                                <p>
                                    K-Puzz (<a
                                        className="textLink"
                                        href="http://www.murderousmaths.co.uk/books/kjpz.htm"
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                    >
                                        Kjarposko Puzzles
                                    </a>) created by <a
                                        className="textLink"
                                        href="https://www.kjartan.co.uk/"
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                    >
                                        Kjartan Poskitt
                                    </a>
                                </p>
                            </div>
                            <div className="controlBox">
                                <p>Website created by Sam Kohn</p>
                            </div>
                            <div className="links">
                                <button onClick={openWebsite}>Website</button>
                                <button onClick={openGithub}>GitHub</button>
                                <button onClick={openBlog}>Blog</button>
                                <button onClick={openSource}>Source</button>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div className="controlBox">
                                <p>This website was made as a personal project for fun. No copyright infringement intended.</p>
                            </div>
                            <button onClick={props.onClose}>Close</button>
                        </div>
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="scrollbar">
                    <ScrollArea.Thumb className="thumb"/>
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </div>
    )
}