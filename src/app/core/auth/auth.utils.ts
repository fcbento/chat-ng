export class AuthUtils {

    emailRegEx() {
        return /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    }

    handleError(error: any): string {
        if(error.error.message) {
            return error.error.message
        }else{
            return 'Something went wrong'
        }
    }

}