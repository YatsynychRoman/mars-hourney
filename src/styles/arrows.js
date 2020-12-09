import {makeStyles} from '@material-ui/core';

const arrowStyles = makeStyles((theme) => ({
    leftArrow: {
        height: '10vw',
        width: '10vw',
        textDecoration: 'none',
        color: 'white',
        background: 'none',
        outline: 'none',
        border: 'none',
        fontSize: '15vw',
        transition: '0.5s',
        '&:hover': {
            color: 'grey',
            transition: '0.5s'
        }
    },
    rightArrow: {
        height: '10vw',
        width: '10vw',
        textDecoration: 'none',
        color: 'white',
        background: 'none',
        outline: 'none',
        border: 'none',
        fontSize: '15vw',
        transition: '0.5s',
        '&:hover': {
            color: 'grey',
            transition: '0.5s'
        }
    },
    active: {
        background: 'blue'
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default arrowStyles;