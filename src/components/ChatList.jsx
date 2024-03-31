import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcons'
import { ChatListData } from '../data/ChatListData'

const ChatList = () => {
    return (
        <>
            {ChatListData.map((item) => {
                return (
                    <View key={item.id}>
                        <TouchableOpacity style={styles.container}>
                            <View style={styles.leftContainer}>
                                <Image source={item.profile} style={styles.userImage} />
                                <View style={styles.userContainer}>
                                    <Text style={styles.username}>{item.name}</Text>
                                    <Text style={styles.userMessage}>{item.message}</Text>
                                </View>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={styles.timeStamp}>{item.time}</Text>
                                {item.mute &&
                                    <VectorIcon
                                        type='MaterialCommunityIcons'
                                        name='volume-variant-off'
                                        size={22}
                                        color={Colors.secondaryColor}
                                        style={{ marginLeft: 18 }}
                                    />
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </>
    )
}

export default ChatList

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: Colors.background,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftContainer: {
        backgroundColor: Colors.background,
        flexDirection: 'row',
    },
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },
    userContainer: {
        marginLeft: 10,

    },
    username: {
        fontSize: 20,
        color: Colors.white,
    },
    userMessage: {
        fontSize: 16,
        color: Colors.textGrey,
    },
    rightContainer: {
        marginRight: 16,
    },
    timeStamp: {
        fontSize: 14,
        color: Colors.textGrey,
    }
})