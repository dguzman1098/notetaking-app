import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import { Text, FAB, List} from 'react-native-paper';
import Header from '../components/header';
import { db } from '../config/config';


function ViewNotes({navigation}) {

    //notes array []
    var [notes, setNotes] = useState([])


    var addNotes = note => {
        note.id = notes.length + 1
        setNotes([...notes, note])
    }


    function clearNotes() {
        notes.length = 0
        setNotes([...notes])

        //clears notes in Firebase Database
        let ref = db.ref('/Notes')
        ref.remove()
        alert('Notes Cleared')
    }

    function clearNote() {
        notes.length = notes.length - 1
        setNotes([...notes])

        //clears notes in Firebase Database
        let ref = db.ref('/Notes')
        ref.remove()
        alert('Notes Cleared')
    }

    //TIMESTAMPS
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes


    return(
        <>
        {/** HEADER */}
        <Header titleText='Note Taking App'/>

        <View style={styles.container}>
        <Text style={{textAlign: 'center', textDecorationLine: 'underline', fontWeight: 'bold', fontSize: 20, paddingBottom: 10 }}> NOTES </Text>
            {notes.length == 0 ? (
                <View styles = {styles.container}>
                    <Text style={styles.titleContainer}> No Categories Created </Text>
                </View>
            ) : (
                
                <FlatList
                
                    data = {notes}
                    renderItem = {({item}) => (
                        <List.Item
                        style={{backgroundColor: '#f0f0f0', margin: 5}}
                            title = {item.noteTitle}
                            left={props => <List.Icon {...props} icon="note"/>}
                            right = {props => <Text style={styles.date}>Created On: {month}/{date}/{year} {hours}:{min}</Text>}
                            description = {item.noteContent}
                            descriptionNumberOfLines={10}
                            titleStyle={styles.listTitle}
                            descriptionStyle={styles.description}
                            onPress ={() => clearNote()}
                        /> 
                    )}
                        keyExtractor = {item => item.id.toString()}
                />
            )}

            {/** Create Note Button */}
             <FAB
                style = {styles.fab1}
                small
                icon = 'plus'
                label='Create a new Note'
                onPress = {() => navigation.navigate('AddNotes',
                {
                   addNotes
                })
                }
            />

            
            {/** Delete Note Button */}
            <FAB
                style = {styles.fab2}
                small
                icon = 'close'
                label='Clear notes'
                onPress = {() => clearNotes()}
                
                
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
        paddingHorizontal: 20,
        margin: 15
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    title: {
        fontSize: 20
    },

    fab1: {
        backgroundColor: '#19a863',
        margin: 25,
    },

    fab2: {
        backgroundColor: '#b01c1c',
        margin: 25,
    },

    listTitle: {
        fontSize: 22,
        height: 40,
        fontWeight: 'bold'
    },

    date: {
        fontSize: 10
    },

    description: {
        width: 200,
        color: 'black'
    }


})

export default ViewNotes