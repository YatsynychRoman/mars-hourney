import axios from 'axios'

import {
    ROVER_SELECT,
    GET_ROVERS,
    GET_SINGLE_ROVER,
    CAMERA_UPDATE,
    SOL_UPDATE,
    NEXT_PAGE, GET_NEW_PHOTOS
} from "../types";

export function roverSelect(roverName) {
    return async dispatch => {
        try {
            const {data: {rover}} = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}?api_key=${process.env.REACT_APP_API_KEY}`)
            dispatch({type: ROVER_SELECT, payload: rover.name});
            dispatch({type: GET_SINGLE_ROVER, payload: {
                    name: rover.name,
                    max_sol: rover.max_sol,
                    cameras: rover.cameras
                }});
        } catch (e) {
            console.log(e)
        }
    }
}

export function cameraUpdate(camera) {
    return async dispatch => {
        try {
            dispatch({type: CAMERA_UPDATE, payload: camera});
        } catch (e) {
            console.log(e);
        }
    }
}

export function solUpdate(sol) {
    return async dispatch => {
        try {
            dispatch({type: SOL_UPDATE, payload: sol});
        } catch (e) {
            console.log(e);
        }
    }
}

export function nextPage(page, rover, camera, sol, setNewPhotos) {
    return async dispatch => {
        try {
            dispatch({type: NEXT_PAGE, payload: page})
            let {data: {photos}} = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?camera=${camera}&sol=${sol}&page=${page}&api_key=${process.env.REACT_APP_API_KEY}`)

            console.log(setNewPhotos)
            if(!photos.length) setNewPhotos(false);
            dispatch({type: GET_NEW_PHOTOS, payload: photos})
        } catch (e) {
            console.log(e)
        }
    }
}

export function getRovers() {
    return async dispatch => {
        try {
            const {data: rovers} = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=${process.env.REACT_APP_API_KEY}`);

            dispatch({type: GET_ROVERS, payload: rovers})
        } catch (e) {
            console.log(e)
        }
    }
}