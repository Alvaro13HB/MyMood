import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  MoodSelection: undefined;
  Result: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;