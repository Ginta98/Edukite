import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform
} from 'react-native';
import { statusBarHeight } from '../constant/Layout';
import * as COLOR from '../constant/Colors'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { scaleModerate, scaleVertical, scale } from '../constant/Scale';
import { texts } from '../constant/CommonStyles';
import { CommonActions } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const headerHeight = scaleVertical(50)

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { leftIcon, title, rightIcon, screenPopUpFromRightIcon } = this.props;
    return (
      <View
        style={styles.container}>
        <View style={styles.headerContent}>
          {
            leftIcon ?
              <TouchableOpacity
                onPress={() => this.props.onPressLeftIcon()}
                style={styles.buttonArea}>
                <Icon name={leftIcon} size={scaleModerate(22)} color={COLOR.WHITE} />
              </TouchableOpacity> :
              <View style={styles.buttonArea} />
          }

          <Text style={[texts.white_bold, { fontSize: scaleModerate(17) }]}>{title || 'Edukite'}</Text>
          {
            rightIcon ?
              <TouchableOpacity style={styles.buttonArea}
                onPress={() => this.props.onPressRightIcon()}>
                <Icon name={rightIcon} size={scaleModerate(22)} color={COLOR.WHITE} />
              </TouchableOpacity> :
              <View style={styles.buttonArea} />
          }
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: Platform.OS === 'ios' ? headerHeight + scale(20) : headerHeight,
    backgroundColor: COLOR.PRIMARY_COLOR,
    paddingTop: Platform.OS === 'ios' ? statusBarHeight : 0
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonArea: {
    height: headerHeight,
    width: headerHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
