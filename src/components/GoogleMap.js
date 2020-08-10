import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions, Keyboard, Image, StyleSheet, Platform, SafeAreaView, PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { scale } from '../utils/Scale';
const origin = { latitude: 21.028511, longitude: 105.804817 };
const destination = { latitude: 21, longitude: 105.80 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyCUwYhBR1K2yJiSoL81mStDqWIWxsgp6gY';
class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitudeDelta: 0.07,
            longitudeDelta: 0.22,
        };
    }
    async componentDidMount() {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        const hasLocationPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (hasLocationPermission) {
            Geolocation.getCurrentPosition(
                (position) => {
                    let initialRegion = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.07,
                        longitudeDelta: 0.22,
                    }
                    this.setState({
                        initialRegion
                    })
                },
                (error) => {
                    console.log(JSON.stringify(error));
                },
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 10000 }
            );
            this.watchId = Geolocation.watchPosition((position) => {
                let lastRegion = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.07,
                    longitudeDelta: 0.22,
                }
                this.setState({
                    initialRegion: lastRegion
                })

            })
        }
    }
    componentWillUnmount() {
        Geolocation.clearWatch(this.watchId)
    }
    _renderMarkers(lat, long, name) {
        return (
            <Marker
                coordinate={{
                    latitude: lat,
                    longitude: long,
                }}
            >
                {/* <Icon name={'bus'} size={scale(20)} ></Icon> */}
                <Callout>
                    <View style={{ width: scale(240) }}>
                        <Text>{name}</Text>

                    </View>
                </Callout>
            </Marker>
        )
    }
    render() {

        return (
            <MapView style={{ width: this.props.width, height: this.props.height, marginTop: this.props.marginTop }}
                region={this.state?.initialRegion}
                provide={PROVIDER_GOOGLE}
                showsUserLocation={true}
                loadingEnabled={true}
                showsMyLocationButton={true}
            >

                {this.props.stops.map((item, index) => {
                    let latitude = item.latitude ? item.latitude : 0
                    let longtitude = item.longtitude ? item.longtitude : 0
                    return this._renderMarkers(latitude, longtitude, item.stopName)
                })}
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                />

            </MapView>
        )
    }
}
export default GoogleMap;