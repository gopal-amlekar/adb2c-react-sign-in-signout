import { Paper } from '@material-ui/core'
import useStyles from "../styles/useStyles"
import Grid from '@material-ui/core/Grid';
import UserProfile from './UserProfile';

import Box from '@material-ui/core/Box';

const MainProfile = () => {
    const classes = useStyles()
    
    return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
            <Grid item>
                <Paper justify="center" elevation={5}  className={classes.paper}>
                    <Box
                        width={300}  
                        justifyContent="flex-start" 
                        m={2} p={1}
                        alignItems="flex-start"
                        minHeight="100vh">
                        <UserProfile ></UserProfile>
                    </Box>
                </Paper>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
    )
}

export default MainProfile