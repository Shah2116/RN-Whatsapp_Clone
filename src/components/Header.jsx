import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WhatsAppLogo from '../assets/images/whatsapp-logo.png'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcons'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={WhatsAppLogo} style={styles.logo} />
      <View style={styles.icons}>
        <VectorIcon type='Feather' name='camera' size= {20} color ={Colors.secondaryColor} />
        <VectorIcon type='Ionicons' name='search' size={22} color ={Colors.secondaryColor}/>
        <VectorIcon type='Entypo' name='dots-three-vertical' size={24} color ={Colors.secondaryColor}/>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.primaryColor,
    padding:16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    height: 25,
    width: 110,
  },
  icons: {
    flexDirection: 'row',
    gap:22,
  }
});