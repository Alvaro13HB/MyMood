import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import styles from "../components/Header/style";

const {Screen, Navigator} = createStackNavigator();

import { LoginScreen, MoodSelectionScreen, ResultScreen } from "../screens";

export function StackRoutes(){
    return(
        <Navigator initialRouteName="Login">
            <Screen 
                name='Login'
                component={LoginScreen}
                options={{
                    animation: 'slide_from_right',
                    headerShown: false,
                }}
            />
            <Screen
                name='MoodSelection'
                component={MoodSelectionScreen}
                options={{
                    headerBackImage: () => (<Image source={require("../../assets/left-arrow.png")} />),
                    animation: 'slide_from_right',
                    headerTitleStyle: styles.title,
                    headerStyle: styles.header,
                    headerBackTitleStyle: styles.title,
                }}
            />
            <Screen
                name='Result'
                component={ResultScreen}
                options={{
                    headerBackImage: () => (<Image source={require("../../assets/left-arrow.png")} />),
                    animation: 'slide_from_right',
                    headerTitleStyle: styles.title,
                    headerStyle: styles.header,
                    headerBackTitleStyle: styles.title,
                }}
            />
        </Navigator>
    )
}

export default StackRoutes