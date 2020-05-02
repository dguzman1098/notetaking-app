/**
 * 
Diego Guzman 
Mobile App Development - Final Project
V1.0
*
*/


import React from 'react'
import {Provider as PaperProvider} from 'react-native-paper'
import AppNavigator from './app/navigation/index'


export default function App(){
  return (
    <PaperProvider>
      <AppNavigator/>
    </PaperProvider>
  )
}