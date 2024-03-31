import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ChatList from '../components/ChatList'
import VectorIcon from '../utils/VectorIcons'
import { Colors } from '../theme/Colors'
const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ChatList />
      </ScrollView>
      <TouchableOpacity style={styles.contactIcon}>
        <VectorIcon
          type='MaterialCommunityIcons'
          name='message-reply-text'
          size={22}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ChatListScreen

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  contactIcon: {
    backgroundColor: Colors.textGrey,
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
})