import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import axios from 'axios';
import CustomCard from '../components/CustomCard';
import { Icon, Card, Button } from 'react-native-elements'

export default function TabOneScreen() {
  const [userInfo, setUserInfo] = React.useState(null);
  const url = "https://l9sarjoe9b.execute-api.us-east-1.amazonaws.com/Dev/api/sos/"

  const send_sos_message = () => {
    console.log("here")
    // axios.post(url, {
    //   test: "test"
    // }, {

    // }).then((resp) => {
    //   console.log(resp);
    // }).catch((err) => {
    //   console.log(err);
    // })
  };

  return (
    <View style={styles.container}>
      <CustomCard title="Dispositivo 1" text="Dispositivo de la cocina"/>
      <CustomCard title="Agregar Dispositivo" text="Agrega un nuevo dispositivo"/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
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
