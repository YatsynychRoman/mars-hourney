import React, {useRef, useState} from 'react';

import Rovers from './Rovers';
import Cameras from './Cameras';
import Submit from './Submit';

import mainPageStyles from '../styles/mainpage'
import arrowStyles from "../styles/arrows";
import Button from "@material-ui/core/Button";



function MainPage() {
    const [index, setIndex] = useState(0);
    const classes = mainPageStyles();
    const arrowClasses = arrowStyles();

    const startRef = useRef();

    function scrollDown(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }

    const components = [<Rovers/>, <Cameras/>, <Submit/>]

    return (
        <>
            <div className={classes.intro}>
                <h1>WELCOME TO THE MARS TRIP WEBSITE</h1>
                <h2>Here you can look at different photos of mars made by rovers</h2>
                <h2>To start your journey simply push the button below and don't forget to fasten your seatbelts</h2>
                <Button className={classes.root} onClick={() => scrollDown(startRef)}>
                    LET'S GO
                </Button>
            </div>
            {index === 0 ? <div className={classes.settingsIntro}>

            </div> : <></>}
            <div ref={startRef} className={classes.settingsMain}>
                {index === 0 ? <></> : <button className={arrowClasses.leftArrow} onClick={() => setIndex(index - 1)}>&lt;</button>}
                {components[index]}
                {index === 2 ? <></> : <button className={arrowClasses.rightArrow} onClick={() => setIndex(index + 1)}>&gt;</button>}
            </div>
            <footer>
                <div className={classes.credentials}>
                    All rights to photos belong to NASA
                </div>
            </footer>
        </>
    )
}

export default MainPage;