import {GET_ROVERS} from '../types';

const emptyStore = {
    rovers: []
};

const initStore = {...emptyStore};

export default function roverReducer(store = initStore, {type, payload}) {
    switch (type) {
        case GET_ROVERS: {
            return {
                ...store, ...payload
            };
        }
        default: {
            return store;
        }
    }
}