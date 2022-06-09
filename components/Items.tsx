import { Pressable, Text, View } from 'react-native';

export const Items = function({navigation}: any) {

  const onPressHandler = () => {
    navigation.navigate('Homepage')
  }

  return (
    <View>
      <Text>
        Items
      </Text>
      <Pressable
      onPress={onPressHandler}
      >
        <Text>
          Go to HomePage
        </Text>
      </Pressable>
    </View>
  )
}