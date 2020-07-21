import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from '../Components/Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({navigation, text, routeName}) => {
    return (
        <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={style.link}>
                    {text}
                </Text>
            </TouchableOpacity>
        </Spacer>
    )
}

const style = StyleSheet.create({
    link: {
        color: 'blue',
        fontSize: 16,
    }
})

export default withNavigation(NavLink);