import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Homepage } from './components/Homepage'
import { Items } from './components/Items'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{
          header: () => null
        }}
        />
          <Stack.Screen
        name="Items"
        component={Items}
        options={{
          header: () => null
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

