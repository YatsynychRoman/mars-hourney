import {makeStyles} from '@material-ui/core';

const photosListStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: '0 15px',
        width: 'calc(100% - 32px)',
    },
    paper: {
        width: '100%',
        height: '100%',
    },
    img: {
        width: '100%',
        height: '100%',
    }
}));

export default photosListStyles;