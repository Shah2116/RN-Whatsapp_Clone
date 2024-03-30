import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CommunityImg from '../assets/images/community-img.png'
import { Colors } from '../theme/Colors'


const Community = () => {
  return (
    <View style={styles.container}>
          <Image source={CommunityImg} style={styles.communityImg}/>
          <Text style={styles.community}>Introducing Communities</Text>
          <Text style={styles.communityText}>Easily organize your related groups and send announcements. Now, your communities like neighbourhood or schools, can have their own space. </Text>
          <TouchableOpacity style={styles.communityBtn}>
            <Text style={styles.communityBtnText}>Start your Community</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Community

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: Colors.background
  },
  communityImg: {
    height: 150,
    width: 250,
  },
  community: {
    fontSize: 30,
    color: Colors.white,
    marginVertical: 20,
  },
  communityText: {
    fontSize: 16,
    color: Colors.textGrey,
    textAlign: 'center',
    paddingHorizontal: 30,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  communityBtn: {
    backgroundColor: Colors.tertiary,
    width: '80%',
    marginTop: 30,
    borderRadius: 30,
    padding: 8,

  },
  communityBtnText: {
    textAlign: 'center',
    fontSize: 15,
    color: Colors.background,
  }

})