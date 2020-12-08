import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getRovers, roverSelect} from '../actions/optionsFlow'

function Rovers() {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            console.log('dd')
            await dispatch(getRovers());
        })()
    }, [])

    const {rovers} = useSelector(({roversInfo}) => roversInfo);

    return (
        <form action="">
            {rovers && rovers.map(rover => {
                return (
                    <>
                        <div onClick={() => dispatch(roverSelect(rover.name))}>
                            <h1>{rover.name}</h1>
                        </div>
                    </>
                )
            })}
        </form>

    )
}

export default Rovers;