import React, {useContext, useState} from 'react'
import { Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput, View} from 'react-native'
import { Context as MintingContext } from '../context/MintingContext'
import Checkbox from 'expo-checkbox'
import { AntDesign } from '@expo/vector-icons';

const UploadConfigurationScreen = ({navigation}) => {
  const { state } = useContext(MintingContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const [isChecked, setChecked] = useState(false)


    return (
    <SafeAreaView style={styles.container}>
    <Pressable style={styles.backButton} onPress={()=>{navigation.goBack()}}>
      <Text style={{fontSize: 20}}>Cancel</Text>
      </Pressable>
    <Image source={{uri: state.image}} style={styles.image}/>
      <Text style={styles.text}>Title</Text>
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
    <Text style={styles.text}>Description</Text>
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
    <Text style={styles.text}>Add Tags</Text>
    <View style={styles.tagContainer}>
    <TextInput
     style={styles.tagsInput}
     editable
     onChangeText={(text) => setTags(text)}
     autoCorrect={false}
     autoCapitalize='none'
     maxLength={20}
    />
    <TextInput
     style={styles.tagsInput}
     editable
     onChangeText={(text) => setTags(text)}
     autoCorrect={false}
     autoCapitalize='none'
     maxLength={20}
    />
    <TextInput
     style={styles.tagsInput}
     editable
     onChangeText={(text) => setTags(text)}
     autoCorrect={false}
     autoCapitalize='none'
     maxLength={20}
    />
    <TextInput
     style={styles.tagsInput}
     editable
     onChangeText={(text) => setTags(text)}
     autoCorrect={false}
     autoCapitalize='none'
     maxLength={20}
    />
    </View>
    <View style={styles.checkboxContainer}>
    <Checkbox
    style={styles.checkbox}
    value={isChecked}
    onValueChange={setChecked} />
    <Text style={styles.checkboxText}>Confirmation of validity</Text>
    </View>
    <Pressable style={styles.continueButton}>
    <Text style={{paddingRight: '1%'}}>
      Continue
    </Text>
    <AntDesign name="arrowright" size={20} color="black" />
    </Pressable>
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
      flex: 1,
      borderRadius: 10,
      resizeMode: 'contain'
    },
    text: {
        fontSize: 14,
        marginTop:'3%'
    },
    titleInput:{
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      padding: 10,
      marginTop: '3%',
    },
    descriptionInput:{
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      paddingBottom: 80,
      paddingLeft: 10,
      marginTop: '3%'
    },
    tagContainer:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    tagsInput:{
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      marginTop: '3%',
      flex: 0.2,
      padding: '2%'
    },
    checkboxContainer:{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    checkbox: {
      margin: 8,
      marginTop: '3%',
    },
    checkboxText:{
      marginTop: '1%'
    },
    continueButton:{
      margin: '3%',
      backgroundColor: 'lightblue',
      alignSelf: 'flex-end',
      padding: '3%',
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center'
    }
})

export default UploadConfigurationScreen
