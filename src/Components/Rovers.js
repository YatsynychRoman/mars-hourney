import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Grid, Paper} from '@material-ui/core';

import {roverSelect} from '../actions/optionsFlow'
import roversStyles from '../styles/rovers'

function Rovers() {
    const dispatch = useDispatch();
    const classes = roversStyles();

    const [active, setActive] = useState(0);
    const {rovers} = useSelector(({roversInfo}) => roversInfo);

    useEffect(() => {
        rovers.length && dispatch(roverSelect(rovers[0].name));
    }, [rovers])

    return (
        <>

            <Grid container justify='center' className={classes.root} spacing={4}>
                <div className={classes.introMessage}>
                    <h1>Before starting, let's do some settings up</h1>
                </div>
                {
                    rovers?.map((rover, index) => {
                        return (
                            <Grid item key={index}>
                                <Paper className={`${classes.paper} ${active === index ? classes.active : ''}`}
                                       onClick={() => {
                                           setActive(index)
                                           dispatch(roverSelect(rover.name))
                                       }}>
                                    <h1 className={classes.roverName}>{rover.name}</h1>
                                    <h2 className={classes.roverDate}>Launch date: {rover.launch_date}</h2>
                                    <h2 className={classes.roverDate}>Landing date: {rover.landing_date}</h2>
                                    <h3 className={classes.roverSols}>Sols on mars: {rover.max_sol}</h3>
                                </Paper>
                            </Grid>
                        )
                    })}
            </Grid>
        </>
    )
}

export default Rovers;