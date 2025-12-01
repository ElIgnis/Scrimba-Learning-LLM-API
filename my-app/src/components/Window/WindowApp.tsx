import WindowTracker from "./WindowTracker.tsx"
import {useState} from "react";

export default function WindowApp() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    const [show, setShow] = useState(false);

    return (
        <main className="container">
            <button onClick={()=> setShow(!show)}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </main>
    )
}