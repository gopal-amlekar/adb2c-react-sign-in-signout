import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {

    auth: {
        clientId: process.env.REACT_APP_ADB2C_CLIENT_ID,
        authority: process.env.REACT_APP_ADB2C_AUTHORITY,
        knownAuthorities: process.env.REACT_APP_ADB2C_KNOWN_AUTHORITIES.split(','),
        redirectUri: process.env.REACT_APP_ADB2C_REDIRECT_URI,
        postLogoutRedirectUri: process.env.REACT_APP_ADB2C_POST_LOGOUT_REDIRECT_URI
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {	
                    return;	
                }
                switch (level) {	
                    case LogLevel.Error:	
                        console.error(message);	
                        return;	
                    case LogLevel.Info:	
                        console.info(message);	
                        return;	
                    case LogLevel.Verbose:	
                        console.debug(message);	
                        return;	
                    case LogLevel.Warning:	
                        console.warn(message);	
                        return;	
                }
            }
        }
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: process.env.REACT_APP_ADB2C_LOGIN_SCOPES.split(','),
};

export const editProfile = {
    authority: process.env.REACT_APP_ADB2C_EDIT_PROFILE_AUTHORITY,
};

export const policyNames = {
    signUpSignIn: process.env.REACT_APP_ADB2C_SIGNUP_SIGNIN_POLICY
};