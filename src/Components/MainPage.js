import React, {useState} from 'react';

import Rovers from "./Rovers";
import Cameras from "./Cameras";
import Submit from "./Submit";

function MainPage() {
    const [options, setOptions] = useState(0);

    const components = [<Rovers/>, <Cameras/>, <Submit/>]

    const switchOptions = (index, arrowDirection) => {
        return arrowDirection === 'left' ? setOptions(index - 1) : setOptions(index + 1);
    }

    return (
        <>
            <h1 className="settings-header">Before starting, let's do some settings up</h1>
            {options === 0 ? <></> : <button onClick={() => switchOptions(options, 'left')}>left</button>}
            {components[options]}
            {options === 2 ? <></> : <button onClick={() => switchOptions(options, 'right')}>RIGHT</button>}
        </>
    )
}

export default MainPage;