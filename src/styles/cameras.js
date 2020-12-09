import {makeStyles} from '@material-ui/core';

const camerasStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        maxHeight: '100vh'
    },
    camerasMain: {
        display: 'block'
    },
    camerasH1: {
        width: '100%',
        textAlign: 'center',
    },
    paper: {
        cursor: 'pointer',
        padding: '15px',
        minWidth: 175,
        width: '35%',
        margin: '0 15%',
        background: 'none',
        marginBottom: '2%',
        textAlign: 'center',
        border: '1px solid white',
        transition: '0.5s',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.5)',
            transition: '0.5s',
            border: 'none',
            marginBottom: '2.5%',
            marginTop: '0.5%'
        }
    },
    cameraName: {
        color: 'white',
        margin: 0
    },
    active: {
        background: 'rgba(255, 255, 255, 0.5)',
    },
    control: {
        padding: theme.spacing(2),
    },
    solInputDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    solInput: {
        color: 'white',
        background: 'none',
        outline: 'none',
        border: '1px solid white',
        padding: '15px 0 15px 15px',
        fontSize: '3vh',
        minWidth: 105,
        width: '25%',
        borderRadius: '5px'
    }

}));

export default camerasStyles;