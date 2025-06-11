import { MoodSelectionScreen, LoginScreen, ResultScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{animation: 'slide_from_left'}} />
        <Stack.Screen name="MoodSelection" component={MoodSelectionScreen} options={{animation: 'slide_from_right'}} />
        <Stack.Screen name="Result" component={ResultScreen} options={{animation: 'slide_from_right'}} />
      </Stack.Group>
    </Stack.Navigator>
  );
}