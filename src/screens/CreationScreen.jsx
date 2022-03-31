import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';

const CreationScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if(modalVisible === false){
      navigation.navigate('feed')
      setModalVisible(true)
    }
  })

  return (
    <View style={styles.centeredView}>
      <GestureRecognizer onSwipeDown={ () => setModalVisible(false) }>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Pressable style={styles.aboveModalView} onPress={() => {setModalVisible(false)}} />
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Create New Nft</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Create derivative</Text>
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

export default CreationScreen;
