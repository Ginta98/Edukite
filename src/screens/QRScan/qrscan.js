import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
class QRScanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlash: false,
      qr_code_value: 'Chọn mã để Quét',
    };
  }

  onSuccess = (e) => {
    try {
      this.setState({qr_code_value: e.data});
    } catch (error) {
      this.setState({qr_code_value: 'Có lỗi trong quá trình quét mã'});
    }
  };
  render() {
    const {isFlash, qr_code_value} = this.state;
    const _flashMode = this.state.isFlash
      ? RNCamera.Constants.FlashMode.torch
      : RNCamera.Constants.FlashMode.off;
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.off}
          topContent={<Text>QR Scan - Chọn mã QR của học sinh</Text>}
          bottomContent={
            <Text>Nội dung quét: {this.state.qr_code_value} </Text>
          }
        />
      </View>
    );
  }
}
export default QRScanScreen;
