import {makeStyles} from '@material-ui/core';

const mainPageStyles = makeStyles(() => ({
    intro: {
        minHeight: '250vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20vh'
    },
    settingsIntro: {
        width: '100%',
        textAlign: 'center'
    },
    settingsMain: {
        display: 'flex',
    },
    credentials: {
        minHeight: '18vh',
        height: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    root: {
        justifyContent: 'space-around',
        margin: '0 15px',
        width: 250,
        height: 50,
        border: '1px solid white',
        color: 'white',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.5)'
        }
    }
}));

export default mainPageStyles;