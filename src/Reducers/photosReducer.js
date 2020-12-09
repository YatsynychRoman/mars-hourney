import {CAMERA_UPDATE, GET_NEW_PHOTOS, NEXT_PAGE, ROVER_SELECT, SOL_UPDATE} from '../types';

const emptyStore = {
    photos: [],
    rover: null,
    camera: null,
    sol: 1000,
    page: '1'
};
const initStore = {...emptyStore};

export default function photosReducer(store = initStore, {type, payload}) {
    switch (type) {
        case GET_NEW_PHOTOS: {
            return {
                ...store,
                photos: [...store.photos, ...payload]
            };
        }
        case ROVER_SELECT: {
            return {
                ...store,
                rover: payload,
                photos: [],
            }
        }
        case CAMERA_UPDATE: {
            return {
                ...store,
                camera: payload,
                photos: [],
            }
        }
        case SOL_UPDATE: {
            return {
                ...store,
                sol: payload,
                photos: [],
            }
        }
        case NEXT_PAGE: {
            return {
                ...store,
                page: payload,
            }
        }
        default: {
            return store;
        }
    }
}