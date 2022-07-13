import {TopNavigation} from "../top-navigation";
import {Sidebar} from "../sidebar";

export const SimpleLayout = ( { children, navigation } ) => {
    return <div>
        { navigation }
        <Sidebar/>
        { children }
    </div>
}
