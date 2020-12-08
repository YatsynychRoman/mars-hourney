import {GET_SINGLE_ROVER} from "../types";

const emptyStore = {
    name: null,
    max_sol: null,
    cameras: []
};

const initStore = {...emptyStore};

export default function singleRoverReducer(store = initStore, {type, payload}){
    switch (type) {
        case GET_SINGLE_ROVER: {
            return {...store, ...payload};
        }
        default: {
            return store;
        }
    }
}