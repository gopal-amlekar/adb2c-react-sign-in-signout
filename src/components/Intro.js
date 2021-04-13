import { Paper, Typography } from '@material-ui/core'
import  Box  from '@material-ui/core/Box'

const Intro = () => {
    return (
         <Paper elevation={4}>
             <Box m={0.5}>
                 <Typography m={3} variant="subtitle1" gutterBottom>
                 This is a sample app developed to demonstrate some of the Azure AD B2C functionalities. 
                 It uses <a href="https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/2ac9a8a3da75aaf40fa111e97ecff24ebd778958/lib/msal-react">MSAL React library</a> and provides functionalities to sign-in, sign-up users using OAuth Authorization Code Flow with PKCE.
                 </Typography>
             </Box>
         </Paper>
    )
}

export default Intro