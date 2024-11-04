import { Image, StyleSheet, Platform, View, Text, Button, Alert, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const LoginScreen = () => {
  const handleLoginButtonPress = () => {
    Alert.alert('Button pressed')
  }
  
  return (
   <View style={{marginTop: 200}}>
    <View style={{backgroundColor: 'red'}}>
      <Text>HEADER</Text>
    </View>
    <Text>INITIAL SCREEN</Text>
    <TextInput placeholder='EMAIL' />
    <TextInput placeholder='PASSWORD' />
    <Button title='LOGIN' onPress={handleLoginButtonPress}/>
    <View style={{backgroundColor: 'blue'}}>
      <Text>SOME TEXT</Text>
      <Text>SOME TEXT</Text>
      <Text>SOME TEXT</Text>
      <Text>SOME TEXT</Text>
    </View>
   </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
