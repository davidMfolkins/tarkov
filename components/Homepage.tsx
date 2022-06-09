import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, Text, View } from 'react-native';

export const Homepage = function({navigation}: any) {

  const onPressHandler = () => {
    navigation.navigate('Items')
  }
  return (
    <View>
      <Text>
        Homepage
      </Text>
      <Pressable
      onPress={onPressHandler}
      >
        <Text>
          Go to Items
        </Text>
      </Pressable>
    </View>
  )
}