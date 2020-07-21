import React from 'react';
import { StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../Components/Map';

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={style.header} h3>Track Create Screen</Text>
            <Map />
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