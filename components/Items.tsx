import { Pressable, Text, View, StyleSheet, Image } from 'react-native';
import { request, gql } from 'graphql-request'
import { useEffect, useState } from 'react';
export const Items = function({navigation}: any) {
const [weapons, setWeapons] = useState()
  const onPressHandler = () => {
    navigation.navigate('Homepage')
  }



// const query = gql`
// {
//     itemsByType(type: gun) {
//         name
//         iconLink
//     }
// }
// `


// request('https://api.tarkov.dev/graphql', query).then((data) => console.log(data))


useEffect(() => {

  const query = gql`
{
    itemsByType(type: gun) {
        id
        name
        iconLink
    }
}
`
  request('https://api.tarkov.dev/graphql', query).then((data) => setWeapons(data))
},[]);


console.log(weapons && weapons.itemsByType)
const list = () => {
  return weapons && weapons.itemsByType.map((weapon: any) => {
    return (
      <View key={weapon.id} style={{margin: 10}}>
        <Text style={styles.text}>{weapon.name}</Text>
        <Image
        style={styles.image}
        source={{
          uri: `${weapon.iconLink}`,
        }} />
      </View>
    );
  });
};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Items
      </Text>
      <Pressable
      onPress={onPressHandler}
      >
        <Text style={styles.text}>
          Go to HomePage
        </Text>
      </Pressable>
      {list()}
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
  },
  image: {
    width: '100px',
    height: '100px'
  }
});