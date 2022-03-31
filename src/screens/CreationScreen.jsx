import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';
import { withNavigation } from 'react-navigation'

const CreationScreen = ({navigation, props}) => {
  const [modalVisible, setModalVisible] = useState(true);

   navigation.addListener('didFocus', () => {
      setModalVisible(true)
    });

  return (
    <View style={styles.centeredView}>
      <GestureRecognizer onSwipeDown={ () => setModalVisible(false) }>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <Pressable style={styles.aboveModalView} onPress={() => {setModalVisible(false), navigation.navigate('feed')}} />
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {navigation.navigate('camera'), setModalVisible(false)}}
            >
              <Text style={styles.textStyle}>Camera</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {navigation.navigate('cameraRoll'), setModalVisible(false)}}
            >
              <Text style={styles.textStyle}>Upload from Gallery</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </GestureRecognizer>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalContainer:{
  flex: 1,
  flexDirection: 'column',
  },
  aboveModalView:{
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    elevation: 2,
    marginTop: 10
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default withNavigation(CreationScreen);
