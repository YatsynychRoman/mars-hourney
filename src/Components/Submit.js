import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getPhotos} from '../actions/photosFlow';
import PhotosList from './PhotosList';
import {nextPage} from '../actions/optionsFlow';
import submitStyles from '../styles/submit'
import Button from "@material-ui/core/Button";

function Submit() {
    const dispatch = useDispatch();
    const [submitClicked, setSubmitClicked] = useState(false);

    const classes = submitStyles();

    const {rover, sol, camera, photos, page} = useSelector(({photosInfo}) => photosInfo);

    return (
        <div className={classes.submitMain}>
            <div className={classes.finishMessage}>
                <h1>Let's check up your setting, and if you ready push the 'Submit' button below</h1>
            </div>
            <div className={classes.checkUpInfo}>
                <div className={classes.infoWindow}>
                    <h1>Your rover: {rover}</h1>
                </div>
                <div className={classes.infoWindow}>
                    <h1>Your camera: {camera}</h1>
                </div>
                <div className={classes.infoWindow}>
                    <h1>Sol: {sol}</h1>
                </div>
            </div>
            <div className={classes.submitDiv} style={photos.length ? {pointerEvents: 'none'} : {}} onClick={() => {
                setSubmitClicked(true);
                dispatch(getPhotos(rover, sol, camera, page))
            }}>
                <Button className={classes.root}>
                    Submit
                </Button>
            </div>
            {photos.length || !submitClicked ? <PhotosList/> : <p>Sorry there is no photos with your settings</p>}
            {photos.length ? <div className={classes.loadMoreDiv} onClick={async () => {
                await dispatch(nextPage(Number(page) + 1, rover, camera, sol));
            }}>
                <Button className={classes.root}>
                    Load more
                </Button>
            </div> : <></>}
        </div>
    )
}

export default Submit;