import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native';
import Header from '../components/Header';
import Textarea from 'react-native-textarea';
import { scale, scaleModerate, scaleVertical } from '../utils/Scale';
import { GRAY_FONTCOLOR, WHITE, BLACK, PRIMARY_COLOR } from '../constant/Colors';
class ErrorReportScreen extends React.Component {

    render() {
        return (
            <>
                <Header
                    title={'Báo sự cố'}
                />
                <ScrollView contentContainerStyle={styles.inputsContainer}>
                    <TextInput
                        placeholder={'14235238Q (Mã hành trình đang đi, tự hiển thị)'}
                        style={styles.input}
                        editable={false}
                        placeholderTextColor={PRIMARY_COLOR}
                    />
                    <TextInput
                        placeholder={'Loại sự cố'}
                        placeholderTextColor={GRAY_FONTCOLOR}   
                        style={styles.input}
                    />
                    <TextInput
                        placeholder={'Loại sự cố khác'}
                        placeholderTextColor={GRAY_FONTCOLOR}
                        style={styles.input}
                    />

                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        maxLength={120}
                        placeholder={'Miêu tả sự cố, Lý do'}
                        placeholderTextColor={GRAY_FONTCOLOR}
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        placeholder={'Thời gian xảy ra sự cố'}
                        placeholderTextColor={GRAY_FONTCOLOR}
                        style={styles.input}
                    />
                    <TextInput
                     placeholder={'Mục cần thay đổi'}
                     placeholderTextColor={GRAY_FONTCOLOR}   
                        style={styles.input}
                    />
                </ScrollView>

            </>
        )

    }
}
const styles = StyleSheet.create({
    inputsContainer: {
        alignItems: 'center',
        paddingTop: scale(45)
    },
    textareaContainer: {
        borderWidth: scale(0.5),
        borderColor: GRAY_FONTCOLOR,
        height: scale(180),
        padding: scale(5),
        backgroundColor: WHITE,
        width: '85%',
        marginBottom: scale(20),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: scale(170),
        fontSize: scale(14),
        color: GRAY_FONTCOLOR,
        width: '85%',
        fontWeight: 'bold'
    },
    input: {
        borderWidth: scale(0.5),
        borderColor: GRAY_FONTCOLOR,
        width: '85%',
        justifyContent: 'center',
        fontSize: scaleModerate(14),
        textAlign: 'left',
        paddingHorizontal: scaleModerate(0),
        paddingLeft: scale(5),
        height: scale(35),
        marginBottom: scale(20),
        backgroundColor: WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        fontWeight: 'bold',

    }
});
export default ErrorReportScreen;
