import { NativeModules, Platform } from 'react-native';

const { AppleSignIn } = NativeModules;

export async function performAppleSignInRequest() {
    if (Platform.OS !== "ios") throw new Error("Platform must be IOS");

    return await AppleSignIn.requestAsync({
        requestedScopes: [AppleSignIn.Scope.FULL_NAME, AppleSignIn.Scope.EMAIL],
        requestedOperation: AppleSignIn.Operation.LOGIN,
    })
}

export default AppleSignIn;
