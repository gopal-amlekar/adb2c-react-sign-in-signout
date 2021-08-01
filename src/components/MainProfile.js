import { Paper } from "@material-ui/core";
import useStyles from "../styles/useStyles";
import Grid from "@material-ui/core/Grid";
import UserProfile from "./UserProfile";

import Box from "@material-ui/core/Box";

const MainProfile = () => {
  const classes = useStyles();

  return (
    <div className={classes.MainProfileRoot}>
        <UserProfile></UserProfile>
    </div>
  );
};

export default MainProfile;
