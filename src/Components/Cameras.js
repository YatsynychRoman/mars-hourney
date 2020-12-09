import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {cameraUpdate, solUpdate} from '../actions/optionsFlow';
import {Grid, Paper, Tooltip} from '@material-ui/core';

import camerasStyles from '../styles/cameras'

function Cameras() {
    const {cameras, max_sol} = useSelector(({singleRoverInfo}) => singleRoverInfo);
    const dispatch = useDispatch();

    const classes = camerasStyles();
    const [active, setActive] = useState(0);
    const [sol, setSol] = useState(1000);

    useEffect(() => {
        dispatch(cameraUpdate(cameras[0].name));
        dispatch(solUpdate(sol));
    }, [cameras, max_sol])

    return (
        <div className={classes.camerasMain}>
            <div className={classes.camerasH1}>
                <h1>Select which camera and
                    <Tooltip title='A mars day which is approx. 24 hours, 39 minutes' placement={"top"} arrow={true}>
                        <span> sol </span>
                    </Tooltip>
                    you want</h1>
            </div>
            <Grid container justify='center' className={classes.root}>
                {cameras?.map((camera, index) =>
                    <Paper key={index} onClick={() => {
                        dispatch(cameraUpdate(camera.name));
                        setActive(index)
                    }} className={`${classes.paper} ${active === index ? classes.active : ''}`
                    }>
                        <h2 className={classes.cameraName}>{camera.full_name}</h2>
                    </Paper>)
                }
            </Grid>
            <div className={classes.solInputDiv}>
                <input className={classes.solInput} id="sol" type='text' value={sol > max_sol ? max_sol : sol} onChange={(e) => setSol(Number(e.target.value))} placeholder={1000}
                       onInput={(e) => dispatch(solUpdate(e.target.value))}/>
                <label className={classes.solInputLabel} htmlFor="sol">Max sol is {max_sol}</label>
            </div>
        </div>
    )
}

export default Cameras;
