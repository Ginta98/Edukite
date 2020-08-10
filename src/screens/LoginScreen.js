import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions, Keyboard, Image, StyleSheet, Platform, SafeAreaView, AsyncStorage } from 'react-native';
import { scale, scaleModerate, scaleVertical } from '../utils/Scale';
import { callApiWithRawBody, login } from '../api/AuthAPI';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { BOTTOM_TAB } from '../navigator/RouteName'
import { refreshStore } from '../actions/SystemActions';
import { connect } from 'react-redux';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false,
            responseError: null,

        };

    }

    async componentDidMount() {
        setTimeout(() => this.props.refreshStore(), 1000)
    }

    async _onPressLogin() {
        this.setState({ isLoading: true })
        Keyboard.dismiss();
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        const response = await login(data)
        this.setState({ isLoading: false })
        console.log(response)
        if (response) {
            if (response?.access_token) {
                await AsyncStorage.setItem('token', response.access_token);
                this.props.navigation.navigate(BOTTOM_TAB)
            } else {
                this.setState({
                    responseError: {
                        data: {
                            message: response.error_description
                        }
                    }
                })
            }
        } else {
            this.setState({
                responseError: {
                    data: {
                        message: 'unknown error'
                    }
                }
            })
        }

    }

    render() {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}>
                <TextInput
                    onChangeText={(username) =>
                        this.setState({
                            username: username,
                        })
                    }
                    placeholder="Username"
                    textAlign="left"

                    style={{
                        borderBottomWidth: scale(0.5),
                        borderColor: '#616161',
                        width: '80%',
                        justifyContent: 'center',
                        fontSize: scaleModerate(15),
                        textAlign: 'center',
                        paddingVertical: scaleVertical(10),
                        paddingHorizontal: scaleModerate(0),
                    }}
                />
                <TextInput
                    onChangeText={(password) =>
                        this.setState({
                            password: password,
                        })
                    }
                    placeholder="Password"
                    textAlign="left"

                    style={{
                        borderBottomWidth: scale(0.5),
                        borderColor: '#616161',
                        width: '80%',
                        justifyContent: 'center',
                        fontSize: scaleModerate(15),
                        textAlign: 'center',
                        paddingVertical: scaleVertical(10),
                        paddingHorizontal: scaleModerate(0),
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        this._onPressLogin();
                    }}
                    style={{
                        backgroundColor: 'green',
                        borderRadius: scale(10),
                        width: '30%',
                        height: scaleVertical(30),
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: scale(10),
                    }}>
                    <Text style={{ color: 'white' }}>Login</Text>
                </TouchableOpacity>

                {this.state.isLoading ? <Loading /> : null}
                {this.state.responseError !== null ? (
                    <Message
                        message={this.state.responseError?.data?.message}
                        close={() => {
                            this.setState({ responseError: null });
                        }}
                    />
                ) : null}
            </View>


        );
    }
}
const containerW = Dimensions.get('window').width;
const containerH = Dimensions.get('window').height;

const mapStateToProps = (store) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        refreshStore: () => {
            dispatch(refreshStore())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

