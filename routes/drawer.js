import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import ProfileStack from "./profileStack";



const screens = {

  
    Home:{
        screen: HomeStack
    },
    Profile:{
        screen:ProfileStack
    }
}



const RootDrawerNavigation  = createDrawerNavigator(screens);

export default RootDrawerNavigation;