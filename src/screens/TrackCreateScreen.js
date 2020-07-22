import '../_mockLocation';
import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location';
import Map from '../Components/Map';

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, [])

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={style.header} h3>Track Create Screen</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    header: {
        fontSize: 20,
        marginLeft: 10,
    }
});

export default TrackCreateScreen;