import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcons'
import { Colors } from '../theme/Colors'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatHeader />
      <ChatBody />
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