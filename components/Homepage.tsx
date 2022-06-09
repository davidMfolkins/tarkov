import { Pressable, Text, View, StyleSheet } from 'react-native';

export const Homepage = function({navigation}: any) {

  const onPressHandler = () => {
    navigation.navigate('Items')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Homepage
      </Text>
      <Pressable
      onPress={onPressHandler}
      >
        <Text style={styles.text}>
          Go to Items
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3b3a3a',
  },
  text: {
    color: '#fff',
  }
});