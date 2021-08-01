import React from 'react'
import { useMsal } from '@azure/msal-react'
import { useAccount } from '@azure/msal-react'
import IdTokensTable from './IdTokensTable'
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/useStyles';
import { Paper } from '@material-ui/core';

function UserProfile () {
  const classes = useStyles();
  
  const { instance, accounts, inProgress } = useMsal();

  const account = useAccount(accounts?.[0] || {} );

  return (

    <div className={classes.UserProfileRoot}>
      {/* <Paper> */}
      <div className={classes.UserProfileTitle}>
        <Typography variant="h5" color="primary">User Profile</Typography>
      </div>
      
      <div className={classes.UserProfileDataBlock}>
        {account? 
          <IdTokensTable idTokenClaims={account?.idTokenClaims}></IdTokensTable> : 
          <div>
            <Typography variant="overline">Not signed in</Typography>
          </div>
        }
      </div>

      {/* </Paper> */}
    </div>
  )
}

export default UserProfile