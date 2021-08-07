import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    AppRoot: {
      // display: 'flex',
      // flexDirection: 'column',
      // height: '100%',
    },

      HeaderRoot: {
        // flex: '0 1 auto',
      },

      MainContentRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '4px',
        // justifyContent: 'space-between',
        // marginTop: '2px',
        
        // minHeight: '100%',
        // height: '100%',
        // flex: '1 1 auto',
        // offset: theme.mixins.toolbar,
        // marginTop: '70px',
      },

        IntroRoot: {
          // padding: '4px',
          flex: '0 1 auto',
          marginBottom: '4px',
        },

        MainProfileRoot: {
          // border: '1px solid blue',
          // height: '400px',
          flex: '1 1 auto',
        },

            UserProfileRoot: {
              // height: '100%',
              flex: '1 1 auto',
              // height: '300px',
              // minHeight: '100%',
            },

                UserProfileTitle: {
                  marginBottom: '8px',

                },

                UserProfileDataBlock: {


                },

                UserProfileDataItem: {
                  
                },


    menuButton: {
      // marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },

    table:{
      minWidth: 250,
    },

    // paper: {
    //   height: 'auto',
    //   width: '400',
    //   justify:"center",
    //   elevation:'5',
    // },
    // control: {
    //   padding: theme.spacing(2),
    // },
    // btn: {
    //   '& > *': {
    //     margin: theme.spacing(1),
    //   },
    // },
}));

export default useStyles;