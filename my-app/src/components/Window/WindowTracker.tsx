import React, {useState} from "react"
import {useEffect} from "react";

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(()=>{

        function ResizeWindowWidth() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", ResizeWindowWidth);
        console.log("Test mount");
        return () => {window.removeEventListener("resize", ResizeWindowWidth)};
    },[windowWidth]);
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
