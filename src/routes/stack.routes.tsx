import { createStackNavigator } from "@react-navigation/stack";
import styles from "../components/Header/style";

const {Screen, Navigator} = createStackNavigator();

import { LoginScreen, MoodSelectionScreen, ResultScreen } from "../screens";

export function StackRoutes(){
    return(
        <Navigator initialRouteName="MoodSelection">
            <Screen 
                name='Login'
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name='MoodSelection'
                component={MoodSelectionScreen}
                options={{
                    headerTitleStyle: styles.title,
                    headerStyle: styles.header,
                    headerBackTitleStyle: styles.title,
                }}
            />
            <Screen
                name='Result'
                component={ResultScreen}
                options={{
                    headerTitleStyle: styles.title,
                    headerStyle: styles.header,
                    headerBackTitleStyle: styles.title,
                }}
            />
        </Navigator>
    )
}

export default StackRoutes