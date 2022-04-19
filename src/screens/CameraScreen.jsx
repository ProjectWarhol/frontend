import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable} from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MintingContext } from '../context/MintingContext'

export default function App({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const { takePicture, pickImage, state } = useContext(MintingContext)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
      style={styles.camera}
      type={type}
      ref={ref => setCamera(ref)}
      >
      <Pressable style={styles.cancelButton} onPress={()=>{navigation.navigate('creation')}}>
        <Text style={styles.text}>Cancel</Text>
        </Pressable>
        <View style={styles.buttonContainer}>
        <Pressable style={styles.galleryButton} onPress={()=>{pickImage(), console.log(state.image)}}>
          <Entypo name="image" size={40} color="white" />
          </Pressable>
          <Pressable style={styles.pictureButton}
          onPress={()=> takePicture(camera)}
          ><Ionicons name="camera-outline" size={50} color="white" /></Pressable>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <MaterialIcons name="flip-camera-ios" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cancelButton:{
    marginTop: '10%',
    marginLeft: '5%'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between'
  },
  galleryButton:{
    alignSelf: 'flex-end',
  },
  pictureButton:{
    borderRadius: 40,
    alignSelf: 'flex-end',
    borderWidth: 2,
    borderColor: 'white',
    padding: 5
  },
  button: {
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
