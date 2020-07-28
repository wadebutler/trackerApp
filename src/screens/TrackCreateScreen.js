import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import { StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../Components/Map';
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../Components/TrackForm';

const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording}, addLocation} = useContext(LocationContext)
    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording])
    const [err] = useLocation(isFocused || recording, callback)

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={style.header} h3>Track Create Screen</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    header: {
        fontSize: 20,
        marginLeft: 10,
    }
});

export default withNavigationFocus(TrackCreateScreen);