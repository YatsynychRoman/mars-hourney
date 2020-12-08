import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cameraUpdate, solUpdate} from "../actions/optionsFlow";

function Cameras() {
    const {cameras, max_sol} = useSelector(({singleRoverInfo}) => singleRoverInfo);
    const dispatch = useDispatch();
    console.log(cameras)
    return (
        <div>
            {cameras?.map(camera => <p onClick={() => dispatch(cameraUpdate(camera.name))}>{camera.name}</p>)}
            <input id="sol" type="text" max={max_sol} onInput={(e) => dispatch(solUpdate(e.target.value))}/>
            <label htmlFor="sol">Max sol is {max_sol}</label>
        </div>
    )
}

export default Cameras;
