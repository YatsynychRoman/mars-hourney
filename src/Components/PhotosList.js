import React from 'react';
import {useSelector} from 'react-redux';
import {Grid, Paper} from '@material-ui/core';

import photosListStyles from '../styles/photosList';

function PhotosList() {
    const {photos} = useSelector(({photosInfo}) => photosInfo);
    const classes = photosListStyles();

    return (
        <>
            <Grid container className={classes.root} spacing={4}>
                {photos?.map(photo => (
                    <Grid key={photo.id} item xs={12} sm={6} md={4} lg={2}>
                        <Paper className={classes.paper}>
                            <img src={photo.img_src} className={classes.img} alt='mars'/>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default PhotosList;