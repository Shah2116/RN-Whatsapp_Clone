import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'
import wallpaper from '../assets/images/wallpaper.jpeg'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatHeader />
      <ImageBackground source={wallpaper} style={{flex:1, paddingHorizontal: 15,}}>
      <ChatBody />
      </ImageBackground>
      <ChatFooter/>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})