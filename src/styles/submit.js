import {makeStyles} from '@material-ui/core';

const submitStyles = makeStyles(() => ({
    root: {
        justifyContent: 'space-around',
        margin: '0 15px',
        width: 250,
        height: 50,
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.5)'
        }
    },
    submitMain: {
        display: 'block',
        width: '80%'
    },
    submitDiv: {
        textAlign: 'center'
    },
    loadMoreDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    checkUpInfo: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    infoWindow: {
        border: '1px solid white',
        color: 'white',
        textAlign: 'center',
        padding: 15,
        marginBottom: 50,
        width: '250px'
    },
    finishMessage: {
        width: '100%',
        textAlign: 'center'
    },
    noMoreMessage: {
        width: '100%',
        textAlign: 'center',
        fontSize: '16pt'
    }
}));

export default submitStyles;