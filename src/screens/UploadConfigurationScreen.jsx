import React, {useContext, useState} from 'react'
import { Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput} from 'react-native'
import { Context as MintingContext } from '../context/MintingContext'
import Spacer from '../components/Spacer'

const UploadConfigurationScreen = ({navigation}) => {
  const { state } = useContext(MintingContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])

    return (
    <SafeAreaView style={styles.container}>
    <Pressable style={styles.backButton} onPress={()=>{navigation.goBack()}}>
      <Text style={{fontSize: 20}}>Cancel</Text>
      </Pressable>
      <Spacer/>
    <Image source={{uri: state.image}} style={styles.image}/>
    <Spacer/>
      <Text>Title</Text>
    <TextInput
     style={styles.titleInput}
     editable
     multiline
     onChangeText={(text) => setTitle(text)}
     placeholder="Title"
     autoCorrect={false}
     autoCapitalize='none'
     maxLength={100}
    />
    <Spacer/>
    <Text>Description</Text>
    <TextInput
     style={styles.descriptionInput}
     editable
     multiline
     onChangeText={(text) => setDescription(text)}
     placeholder="Description"
     autoCorrect={false}
     autoCapitalize='none'
     maxLength={100}
    />
    <Spacer/>
    <Text>Add Tags</Text>
    <TextInput
     style={styles.tagsInput}
     editable
     onChangeText={(text) => setTags(text)}
     autoCorrect={false}
     autoCapitalize='none'
     maxLength={50}
    />
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginLeft: '5%',
      marginRight: '5%'
    },
    backButton:{
      margin: 10
    },
    image:{
      flex: 0.4,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'black'
    },
    text: {
        fontSize: 30,
    },
    titleInput:{
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
      padding: 10,
      marginTop: 15
    },
    descriptionInput:{
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
      paddingBottom: 80,
      paddingLeft: 10,
      marginTop: 15,
    },
    tagsInput:{
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
      marginTop: 15,
    }
})

export default UploadConfigurationScreen
