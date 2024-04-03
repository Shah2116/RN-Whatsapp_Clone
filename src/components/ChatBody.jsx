import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcons'
import { MessageData } from '../data/MessageData'

const ChatBody = () => {
  const scrollViewRef = useRef();
  const userId = '1'

  const UserMessagesView = ({message,time}) => {
    return (
      <View style={styles.container}>
      <View style={styles.userInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
          <VectorIcon 
            type='FontAwesome5'
            name='check-double'
            size={15}
            color={Colors.blue}
            style={{marginLeft:5,}}
          />
      </View>
      </View>

    )
  }

  const OtherUserMessagesView = ({message,time}) => {
    return (
      <View style={styles.otherUsercontainer}>
        <View style={[styles.userInnerContainer, { backgroundColor: Colors.primaryColor }]}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    )
  }

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({animated: true})
  }

  return (
    <ScrollView
    ref={scrollViewRef}
    onContentSizeChange={scrollToBottom}
    showsVerticalScrollIndicator={false}
    >
      {MessageData.map((item) => {
        return (
          <>
            { item.id == userId ? (
              <UserMessagesView message={item.message} time={item.time} />
            ) : (
              <OtherUserMessagesView message={item.message} time={item.time} />
            )}
          </>
      )
      })}
    </ScrollView>
  )
}

export default ChatBody

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  otherUsercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  userInnerContainer: {
    backgroundColor: Colors.secondaryColor,
    flexDirection: 'row',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  message: {
    fontSize: 13,
    color: Colors.white,
  },
  time: {
    fontSize: 9,
    color: Colors.white,
    alignSelf:'flex-end',
    marginLeft: 5,
  },
})