
import "./index.css"
import {useEffect, useState, useContext} from "react";
import {SidebarContext} from "../../app/context";

export const Banner = ({ image, title, description }) => {
    const [counter, setCounter] = useState(0);
    const {sidebar, setSidebar} = useContext(SidebarContext);
    
    const onClick = () => {
        setCounter(counter + 1);
        setSidebar((sidebar) => { return !sidebar});
    }
    
    useEffect(() => {
        console.log("called on mount");
        return () => {
            console.log("called on unmount");
        }
    }, [counter]);
    
    return <div className={"banner"}>
        <h1>{title}</h1>
        <img src = { image } alt = { "tttt" } />
        <p>{description}</p>
        <button onClick={onClick}>add to counter</button>
        <p>Counter: {counter}</p>
    </div>
}
