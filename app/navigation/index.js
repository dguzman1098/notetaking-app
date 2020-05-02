import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ViewNotes from '../screens/ViewNotes'
import AddNotes from "../screens/AddNotes"
import AddCategory from "../screens/AddCategory"


const StackNavigator = createStackNavigator({
    ViewNotes: {
        screen: ViewNotes
    },

    AddNotes: {
        screen: AddNotes
    },

    AddCategory: {
        screen: AddCategory
    },
}, 
    {
        initialRouteName: 'ViewNotes',
        headerMode: 'none'
    })

export default createAppContainer(StackNavigator)

