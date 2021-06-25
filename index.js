import { NativeModules } from 'react-native';

const { AppleSignIn } = NativeModules;

export async function performRequest() {
    return await AppleSignIn.requestAsync({
        requestedScopes: [AppleSignIn.Scope.FULL_NAME, AppleSignIn.Scope.EMAIL],
        requestedOperation: AppleSignIn.Operation.LOGIN,
    })
}

export default AppleSignIn;
