import React from 'react';
import {useSelector} from 'react-redux';

import Photo from './Photo'

function PhotosList() {
    const {photos} = useSelector(({photosInfo}) => photosInfo);
    console.log(photos)
    return (
        <>
            {photos.map(photo => <Photo imageUrl = {photo.img_src}/>)}
        </>
    )
}

export default PhotosList;