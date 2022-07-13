
import "./index.css"
import {useSidebarToggle} from "./hooks/useSidebarToggle";

export const Sidebar = () => {
    const {ref, sidebar, setSidebar, onToggle} = useSidebarToggle();
    return <div ref = {ref} className = {"sidebar"}>
        <button onClick={onToggle}>Toggle</button>
        <div className = {sidebar ? "sidebar-content" : "sidebar-content-closed"}>
            Sidebar
        </div>
    </div>
}