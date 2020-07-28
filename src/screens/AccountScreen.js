import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../Components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';
import { Feather } from '@expo/vector-icons';


const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}> 
            <Text style={style.header}>Account Screen</Text>
            <Spacer>
                <Button title="Sign-Out" onPress={signout}/>
            </Spacer>
        </SafeAreaView>
    );
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <Feather name="settings" size={24} color="black" />
}

const style = StyleSheet.create({
    header: {
        fontSize: 20,
        marginLeft: 10,
    }
});

export default AccountScreen;