import React from 'react';
import {View, Button, Text} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to React Native Maps</Text>
      <Button title="Go to Map" onPress={() => navigation.navigate('Map')} />
    </View>
  );
}
