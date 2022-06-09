import { Pressable, Text, View, StyleSheet } from 'react-native';
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

//   const query2 = gql`
// {
//   items {
//     name
//     types
// }
// }
// `
//   request('https://api.tarkov.dev/graphql', query2).then((data) => setWeapons(data))
});

const testData = {
  "posts": {
    "data": [
      {
        "id": "1",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      },
      {
        "id": "2",
        "title": "qui est esse"
      },
      {
        "id": "3",
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut"
      },
      {
        "id": "4",
        "title": "eum et est occaecati"
      },
      {
        "id": "5",
        "title": "nesciunt quas odio"
      }
    ],
  }
}
console.log(weapons)

const list = () => {
  return testData.posts.data.map((element) => {
    return (
      <View key={element.id} style={{margin: 10}}>
        <Text style={styles.text}>{element.id}</Text>
        <Text style={styles.text}>{element.title}</Text>
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
        {list()}
        <Text style={styles.text}>
          Go to HomePage
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