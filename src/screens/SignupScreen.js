import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../Components/AuthForm';
import NavLink from '../Components/NavLink';

const SignupScreen = () => {
    const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);
    
    useEffect(() => {
        tryLocalSignin();
    }, []);

    return (
        <View style={style.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText="Sign-Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign-Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an Account? Sign-In instead!"
            />
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
    }
});

export default SignupScreen;