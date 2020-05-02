import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, FAB, IconButton, TextInput } from 'react-native-paper'
import Header from '../components/header'


function AddCategory({navigation}) {

    let [categoryTitle, setCategoryTitle] = useState('')

    function saveCategory() {
        navigation.state.params.addCategories({categoryTitle, categoryValue})
        navigation.goBack()
    }
    
    return(
        <>
        {/* HEADER */}
        <Header titleText="Create a New Category" />

        {/**Exit Button to return to home */}
        <IconButton
        icon = "close"
        size = {25}
        color = 'white'
        onPress = {() => navigation.goBack()}
        style = {styles.iconButton}
        />

        {/*Category Text Field */}
        <View style={styles.container}>
            <TextInput 
            label = "Add Category Title Here"
            value = {categoryTitle}
            mode = 'outlined'
            onChangeText = {setCategoryTitle}
            style = {styles.title}
            />
            
            {/*Save Category Button */}
            <FAB
            style = {styles.fab}
                small
                icon = 'check'
                disable = {categoryTitle = '' ? true : false}
                onPress = {() => saveCategory()}

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
        paddingHorizontal: 10
    },

    iconButton: {
        
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    title: {
        fontSize: 20
    },

    fab: {
        color: 'red',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0
    },

    text: {
        height: 300,
        fontSize: 16
    }
})

export default AddCategory
