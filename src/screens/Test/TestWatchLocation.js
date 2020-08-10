import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions, Keyboard, Image, StyleSheet, Platform, SafeAreaView, PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Loading from '../../components/Loading';
export default class TestWatchLocation extends React.Component {
    constructor(props) {
        super(props);

    }
    async componentDidMount() {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        const hasLocationPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (hasLocationPermission) {
            Geolocation.getCurrentPosition(
                (position) => {
                    console.log('getCurrentPoisition')
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
                console.log('changed')
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
    render() {
        return (
            <>
                <MapView style={{ width: '100%', height: '80%' }}
                    region={this.state?.initialRegion}
                    provide={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                >
                </MapView>
                <Text>{JSON.stringify(this.state?.initialRegion)}</Text>
            </>
        )
    }
}
