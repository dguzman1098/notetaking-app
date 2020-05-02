import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, FAB, IconButton, TextInput } from 'react-native-paper'
import Header from '../components/header'
import { db } from '../config/config'

function AddNotes({navigation}) {

    var [noteTitle, setNoteTitle] = useState('')
    var [noteContent, setNoteContent] = useState('')
    
    var date = useState(new Date().getDate()) //current date
    var id = 0

    function saveNote(){
        navigation.state.params.addNotes({noteTitle, noteContent})
        
        //database push item of Note 
        db.ref('/Notes').push({
            name: noteTitle,
            id: id + 1

        })
        navigation.goBack()
        alert('Note created')
    }


    return(
        <>
        {/* HEADER */}
        <Header titleText="Create a New Note" />

        <IconButton
            icon = "close"
            size = {25}
            color = 'white'
            onPress = {() => navigation.goBack()}
            style = {styles.iconButton}
        />

        <View style={styles.container}>
            
            <TextInput
                label = "Note Title Here"
                value = {noteTitle}
                mode = 'outlined'
                onChangeText = {setNoteTitle}
                style = {styles.title}
            />

            <TextInput
            
                label = "Note Content Here"
                value = {noteContent}
                mode = "flat"
                onChangeText = {setNoteContent}
                multiline ={true}
                scrollEnabled ={true}
                returnKeyLabel ='done'
                blurOnSubmit = {true}
                style = {styles.text}
                
            />
            
            <FAB
            small
            icon = 'check'
            label = "submit"
            disabled = {noteTitle == '' ? true : false}
            onPress = {() => saveNote()}
            style = {styles.fab}
            
            />

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
        margin: 20,
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    title: {
        fontSize: 24,
        marginBottom: 35,
        
    },

    iconButton: {
        backgroundColor: 'red',
        position: 'absolute',
        right: 15,
        top: 25,
        margin: 5
        
    },

    text: {
        height: 250,
        fontSize: 16,
       
    },

    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
    }

})

export default AddNotes
