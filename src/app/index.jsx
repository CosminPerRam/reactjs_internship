
import './index.css';
import {TopNavigation} from "../components/top-navigation";
import {SimpleLayout} from "../components/simple-layout";
import {Banner} from "../components/banner";
import {Hello} from "../components/hello";
import {SidebarContext} from "./context";
import {useState} from "react";

export const App = () => {
    const [sidebar, setSidebar] = useState(true);
    return <SidebarContext.Provider value={{sidebar, setSidebar}}>
        <SimpleLayout navigation={<TopNavigation/>}>
            <Hello/>
            <Banner title={"react"} description={"framework"} image={"logo192.png"}/>
        </SimpleLayout>
    </SidebarContext.Provider>
}