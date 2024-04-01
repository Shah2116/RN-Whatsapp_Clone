import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcons'

const ChatFooter = () => {
  const [message, setMessage] = useState('')
  const [sendEnable, setSendEnable] = useState(false)

  const onChange = (value) => {
    setMessage(value);
    setSendEnable(true)
  }

  const onSend = () => {
    setMessage('')
    setSendEnable(false)
    Alert.alert('Message sent!')
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
      <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
        <VectorIcon
          type='MaterialIcons'
          name='emoji-emotions'
          size={22}
          color={Colors.white}
        />
        <TextInput
          placeholder='message'
          placeholderTextColor={Colors.textGrey}
          style={styles.messageInput}
          onChangeText={(value) => (
            onChange(value)
          )}
          value={message}
        />
        </View>
        <View style={styles.iconWrapper}>
          <VectorIcon
            type='Entypo'
            name='attachment'
            size={20}
            color={Colors.white}
          />
          <VectorIcon
            type='FontAwesome'
            name='rupee'
            size={20}
            color={Colors.white}
            style={{ marginHorizontal: 16 }}
          />
          <VectorIcon
            type='FontAwesome'
            name='camera'
            size={20}
            color={Colors.white}
          />
        </View>
      </View>
      <View style={styles.rightContainer}>
      { sendEnable ? (
          <VectorIcon
          type='MaterialCommunityIcons'
          name='send'
          size={22}
          color={Colors.white}
          onPress={onSend}
        />
        ):(
          <VectorIcon
          type='MaterialCommunityIcons'
          name='microphone'
          size={22}
          color={Colors.white}
        />
        )
        
      }
      </View>
    </View>
  )
}

export default ChatFooter

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    padding:10
  },
  leftContainer: {
    backgroundColor: Colors.primaryColor,
    height: 40,
    width: '80%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
    
  },
  iconWrapper: {
    flexDirection: 'row',
  },
  rightContainer: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: Colors.teal,
    marginLeft: 20
  },
  messageInput: {
    color: Colors.white,
    marginLeft:10,
  },

})