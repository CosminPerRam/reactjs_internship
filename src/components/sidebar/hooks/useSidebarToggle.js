import {useCallback, useContext, useEffect, useRef} from "react";
import {SidebarContext} from "../../../app/context";

export const useSidebarToggle = () => {
    const {sidebar, setSidebar} = useContext(SidebarContext);
    
    const onToggle = useCallback(() => {
        setSidebar(!sidebar);
    }, [sidebar, setSidebar]);
    
    const ref = useRef(null);
    
    useEffect(() => {
        setTimeout(() => {
            ref.current.style.backgroundColor = "magenta";
        }, 1000);
    }, []);
    
    return { ref, sidebar, setSidebar, onToggle };
}