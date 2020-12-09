import React, {useEffect} from 'react';
import './App.css';
import 'fontsource-roboto';

import MainPage from "./Components/MainPage";
import {getRovers} from "./actions/optionsFlow";
import {useDispatch} from "react-redux";

function App() {
    console.warn("You opened console in your browser, if you don't know what are you doing it's better to close it ;)");
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(getRovers());
        })()
    }, [dispatch])

    return (
        <>
            <MainPage/>
        </>
    )
}

export default App;
