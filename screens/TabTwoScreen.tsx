import * as React from 'react';
import {StyleSheet } from 'react-native';
import { Icon, Card, Button, Input } from 'react-native-elements'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Icon name='android' reverse={true} size={32}/>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <Input  placeholder='INPUT WITH ICON' leftIcon={{ name: 'chevron-left' }} /> */}
      <Text style={{ fontSize: 25}}> Santiago Paiz</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={{ fontSize: 20}}> 7a ave 16-00 zona 10</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title='Agregar persona de emeregncia'></Button>

       
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
