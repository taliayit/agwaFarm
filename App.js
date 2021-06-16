import Login from './pages/Login';
import Home from './pages/Home';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Farm from './pages/Farm';
import { I18nManager } from "react-native";

export default function App() {
  // force LTR layout for RTL devices
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);
  
  // initialize parse SDK 
  Parse.serverURL = 'https://parseapi.back4app.com/';
  Parse.setAsyncStorage(AsyncStorage);
  Parse.initialize('Z2GjdTOFqHoydCPICvNH6kannQnF2WTwh3KjdPvx','N9sQIz454ccnF39FHURYy3C5GVzGIp6bYK7fpPAw');
  
  // Create main navigator
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Farm" component={Farm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
