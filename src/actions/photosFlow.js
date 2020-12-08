import axios from 'axios'

import {GET_NEW_PHOTOS} from '../types';

export function getPhotos(rover, sol, camera, page) {
    return async dispatch => {
        try {
            let {data: {photos}} = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?camera=${camera}&sol=${sol}&page=${page}&api_key=${process.env.REACT_APP_API_KEY}`)

            dispatch({type: GET_NEW_PHOTOS, payload: photos})
        } catch (e) {
            console.log(e)
        }
    }
}

