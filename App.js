import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const App = () => {
  auth()
    .signInWithEmailAndPassword('tho@gmail.com', 'tho1998')
    .then(() => {
      console.log('User account created & signed in!', Platform.OS);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
  return (
    <View style={styles.container}>
      <Text>Config firebase</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
