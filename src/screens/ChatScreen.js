import React from 'react';
import {
    Text, View, TextInput, StyleSheet, ScrollView, Image
} from 'react-native';
import Header from '../components/Header';
import { scale, scaleModerate, scaleVertical } from '../utils/Scale';
import { GRAY_FONTCOLOR, WHITE, PRIMARY_COLOR } from '../constant/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { texts } from '../constant/CommonStyles';
class ChatScreen extends React.Component {


    _renderChat(avatar, name, parent, lastMessage, lastTime, seen) {
        return (
            <View style={styles.dataChatItem}>
                <View style={{ flex: 1.7, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{
                        width: scale(66),
                        height: scale(66),
                    }}>
                        <Image style={{ height: '100%', width: '100%', borderRadius: scale(50) }}
                            source={{
                                uri: avatar,
                            }}
                        />
                    </View>
                </View>
                <View style={{ flex: 3.2, paddingTop: scale(10) }}>
                    <Text
                        numberOfLines={1}
                        style={[texts.l_h4, { fontWeight: 'bold', color: PRIMARY_COLOR }]}>{name}</Text>
                    <Text
                        numberOfLines={1}
                        style={[texts.l_normal, { color: GRAY_FONTCOLOR, marginTop: scale(5) }]}>{parent}</Text>
                    <Text
                        numberOfLines={1}
                        style={[texts.l_normal, { color: GRAY_FONTCOLOR, marginTop: scale(5) }]}>{lastMessage}</Text>
                </View>
                <View style={{ flex: 1.2 }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                        {
                            seen ? <Icon name={'check-circle'} size={scale(22)}></Icon> : null
                        }
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[texts.l_normal, { color: GRAY_FONTCOLOR, marginTop: scale(5) }]}>{lastTime}</Text>
                    </View>
                </View>

            </View>
        )
    }
    render() {
        let dataChat = [
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: false,
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: true,
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: false,
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: true,
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: true,
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: true,
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: false,
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: true,
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: false,
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: true,
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: true,
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                name: 'Bơ Đậu Phộng',
                parent: 'Mẹ cháu Bơ',
                lastMessage: 'Vâng, em cảm ơn chị ạ.',
                lastTime: '4:28 PM',
                seen: true,
            },
        ]
        return (
            <>
                <Header
                    title={'Tin nhắn'}
                ></Header>
                <View
                    style={styles.container}
                >
                    <View style={styles.searchContainer}>
                        <Icon name={'search'} size={scaleModerate(20)} color={PRIMARY_COLOR} style={{ flex: 1, marginLeft: scale(5) }} />
                        <TextInput
                            placeholder={'Search'}
                            style={styles.input} />
                    </View>
                    <ScrollView
                        style={{ width: '100%' }}
                        contentContainerStyle={styles.dataChat}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            dataChat.map((item, index) => {
                                return (this._renderChat(item.avatar, item.name, item.parent, item.lastMessage, item.lastTime, item.seen))
                            })
                        }
                        <View style={{ marginBottom: scale(90) }} />
                    </ScrollView>
                </View>
            </>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: scale(20),

    },
    input: {
        justifyContent: 'center',
        fontSize: scaleModerate(14),
        textAlign: 'left',
        height: scale(33),
        fontSize: scale(14),
        paddingVertical: scale(-5),
        backgroundColor: WHITE,
        borderRadius: scale(15),
        flex: 8.5
    },
    searchContainer: {
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(35),
        backgroundColor: WHITE,
        borderWidth: scale(0.5),
        borderRadius: scale(15),
        marginBottom: scale(10)
    },
    dataChat: {
        alignItems: 'center',


    },
    dataChatItem: {
        width: '85%',
        height: scale(100),
        marginTop: scale(10),
        borderWidth: scale(0.5),
        borderColor: PRIMARY_COLOR,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 50,
        backgroundColor: WHITE,
        elevation: 8,
    }
})
export default ChatScreen;
