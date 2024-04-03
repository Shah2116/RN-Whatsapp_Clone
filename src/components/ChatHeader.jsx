import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcons'
import { Colors } from '../theme/Colors'
import ProfilePic from '../assets/images/user1.jpeg'
import { useNavigation } from '@react-navigation/native'


const ChatHeader = () => {
  const naviagtion = useNavigation()
  return (
    <View style={styles.container} >
      <View style={styles.leftContainer}>
        <VectorIcon
          type='AntDesign'
          name='arrowleft'
          size={22}
          color={Colors.white}
          // onPress={naviagtion.goBack()}
        />
      <Image source={ProfilePic} style={styles.profilePic}/>
      <Text style={styles.username}>Sam</Text>
      </View>
      <View style={styles.rightontainer}>
      <VectorIcon
          type='FontAwesome'
          name='video-camera'
          size={22}
          color={Colors.white}
        />
        <VectorIcon
          type='FontAwesome'
          name='phone'
          size={22}
          color={Colors.white}
          style={{marginHorizontal: 25}}
        />
        <VectorIcon
          type='Entypo'
          name='dots-three-vertical'
          size={22}
          color={Colors.white}
          style={{marginLeft:10}}
        /> 
      </View>
    </View>
      )
}

      export default ChatHeader

      const styles = StyleSheet.create({
        container: {
          backgroundColor: Colors.background,
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between'
        },
        leftContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        rightontainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        profilePic: {
          height: 40,
          width: 40,
          borderRadius: 50,
          marginLeft:5
        },
        username: {
          fontSize: 17,
          color: Colors.white,
          marginLeft: 10,
        }
       })