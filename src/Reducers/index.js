import { combineReducers } from 'redux'

import photosInfo from './photosReducer'
import roversInfo from './roversReducer';
import singleRoverInfo from './singleRoverReducer'

export default combineReducers({photosInfo, roversInfo, singleRoverInfo});