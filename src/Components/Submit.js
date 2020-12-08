import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../actions/photosFlow";
import PhotosList from "./PhotosList";
import {nextPage} from "../actions/optionsFlow";

function Submit() {
    const dispatch = useDispatch();
    const [submitClicked, setSubmitClicked] = useState(false);

    const {rover, sol, camera, photos, page} = useSelector(({photosInfo}) => photosInfo);
    console.log(page)
    return (
        <>
            <div style={photos.length ? {pointerEvents: 'none'} : {}} onClick={() => {
                setSubmitClicked(true);
                dispatch(getPhotos(rover, sol, camera, page))
            }}>
                <h1>SUBMIT</h1>
            </div>
            {photos.length || !submitClicked ? <PhotosList/> : <p>Sorry there is no photos with your settings</p>}
            {photos.length && <div onClick={async () => {
                await dispatch(nextPage(Number(page) + 1, rover, camera, sol));
            }}>
                Load more
            </div>}
        </>
    )
}

export default Submit;