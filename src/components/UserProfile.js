import React from 'react'
import { useMsal } from '@azure/msal-react'
import { useAccount } from '@azure/msal-react'
import IdTokensTable from './IdTokensTable'
import Typography from '@material-ui/core/Typography';

function UserProfile () {

  const { instance, accounts, inProgress } = useMsal();

  const account = useAccount(accounts?.[0] || {} );

  return (

    <div p={3}>
      <Typography variant="h5" color="primary">User Profile</Typography>
      <p></p>
        {account? <IdTokensTable idTokenClaims={account?.idTokenClaims}></IdTokensTable> : <div><Typography variant="overline" gutterBottom>Not signed in</Typography> </div>}
    </div>
  )
}

export default UserProfile