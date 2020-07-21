import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context } from '../context/AuthContext';
import AuthForm from '../Components/AuthForm';
import NavLink from '../Components/NavLink';

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(Context);

    return (
        <View style={style.container}>

            <NavigationEvents onWillFocus={clearErrorMessage} />

            <AuthForm 
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign-In"
            />

            <NavLink 
                routeName="Signup"
                text="Don't have an account? Sign-Up instead!"
            />
        </View>
    );
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;