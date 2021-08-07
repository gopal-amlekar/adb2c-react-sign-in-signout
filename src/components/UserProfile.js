import React from "react";
import { useMsal } from "@azure/msal-react";
import { useAccount } from "@azure/msal-react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

import IdTokensTable from "./IdTokensTable";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/useStyles";
import { Paper } from "@material-ui/core";

function UserProfile() {
  const classes = useStyles();

  const { instance, accounts, inProgress } = useMsal();

  const account = useAccount(accounts?.[0] || {});

  return (
    <div className={classes.UserProfileRoot}>
      {/* <Paper> */}
      
      <div className={classes.UserProfileTitle}>
        <Typography variant="h5" color="primary">
          User Profile
        </Typography>
      </div>

      <AuthenticatedTemplate>
        <div className={classes.UserProfileDataBlock}>
          <IdTokensTable idTokenClaims={account?.idTokenClaims}></IdTokensTable>
        </div>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <div>
          <Typography variant="overline">Sign in to see your profile</Typography>
        </div>
      </UnauthenticatedTemplate>

      {/* <AuthenticatedTemplate>
        <div>
          <Typography variant="subtitle1">Welcome!</Typography>
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Typography variant="caption">
          Please sign-in to see your profile
        </Typography>
      </UnauthenticatedTemplate> */}

      {/* </Paper> */}
    </div>
  );
}

export default UserProfile;
