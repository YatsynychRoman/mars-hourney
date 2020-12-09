import {makeStyles} from '@material-ui/core';

const roversStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginLeft: '5vw'
    },
    paper: {
        padding: '1px 25px 35px 25px',
        height: '15vw',
        width: '15vw',
        minWidth: 175,
        minHeight: 175,
        background: 'none',
        color: 'white',
        transition: '0.5s',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.5)',
            transition: '0.5s',
        }
    },
    roverName: {
        fontSize: '30pt',
        [theme.breakpoints.up('lg')]: {
            fontSize: '34pt',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '38pt',
        }
    },
    roverDate: {
        fontSize: '10pt',
        [theme.breakpoints.up('lg')]: {
            fontSize: '10pt',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '16pt',
        }
    },
    roverSols: {
        fontSize: '10pt',
        [theme.breakpoints.up('lg')]: {
            fontSize: '12pt',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '18pt',
        }
    },
    introMessage: {
      color: 'white',
      width: '80%',
      textAlign: 'center'
    },
    active: {
        background: 'rgba(255, 255, 255, 0.5)',
        transition: '0.5s',
        border: 'none',
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default roversStyles;