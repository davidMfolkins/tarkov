import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';


const Stack = createStackNavigator();
function ScreenA({navigation}: any) {

  const onPressHandler = () => {
    navigation.navigate('Screen_B')
  }
  return (
    <View>
      <Text>
        Screen A
      </Text>
      <Pressable
      onPress={onPressHandler}
      >
        <Text>
          Go to Screen B
        </Text>
      </Pressable>
    </View>
  )
}

function ScreenB({navigation}: any) {

  const onPressHandler = () => {
    navigation.navigate('Screen_A')
  }

  return (
    <View>
      <Text>
        Screen A
      </Text>
      <Pressable
      onPress={onPressHandler}
      >
        <Text>
          Go to Screen A
        </Text>
      </Pressable>
    </View>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Screen_A"
        component={ScreenA}
        options={{
          header: () => null
        }}
        />
          <Stack.Screen
        name="Screen_B"
        component={ScreenB}
        options={{
          header: () => null
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
