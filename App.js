import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import GetStarted from "./screens/GetStarted";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Map from "./screens/Map";
import SignIn from "./screens/register/SignIn";
import SignUp from "./screens/register/SignUp";
import Profile from "./screens/register/Profile";
import OrderBike from "./screens/OrderBike";
import QRScanner from "./screens/QRScanner";
import Payment from "./screens/Payment";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="Map"
          component={Map}
          screenOptions={{ headerShown: true, title: "" }}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="OrderBike" component={OrderBike} />
       <Stack.Screen name="QRScanner" component={QRScanner} />
       <Stack.Screen name="Payment" component={Payment} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
