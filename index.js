import React from 'react';
import { NativeModules, requireNativeComponent, Platform } from 'react-native';

const { AppleSignIn } = NativeModules;

export const SignInWithAppleWhiteButton = requireNativeComponent('RNSignInWithAppleWhiteButton');

export const SignInWithAppleBlackButton = requireNativeComponent('RNSignInWithAppleBlackButton');

export const SignInWithAppleButton = (style, callBack, buttonStyle) => {
    if (Platform.OS === 'ios') {
        const Button = buttonStyle === "black" ? SignInWithAppleBlackButton : SignInWithAppleWhiteButton;
        return <Button style={style} onPress={async () => {

            await AppleSignIn.requestAsync({
                requestedScopes: [AppleSignIn.Scope.FULL_NAME, AppleSignIn.Scope.EMAIL],
                requestedOperation: AppleSignIn.Operation.LOGIN,
            }).then((response) => {
                callBack(response) //Display response
            }, (error) => {
                callBack(error) //Display error

            });

        }} />
    } else {
        return null
    }

}

export const performAppleSignInRequest = async () => {
    if (Platform.OS !== "ios") throw new Error("Platform must be IOS");

    return await AppleSignIn.requestAsync({
        requestedScopes: [AppleSignIn.Scope.FULL_NAME, AppleSignIn.Scope.EMAIL],
        requestedOperation: AppleSignIn.Operation.LOGIN,
    })
}

export default AppleSignIn;
