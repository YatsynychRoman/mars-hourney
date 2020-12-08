import React from 'react';

function Photo({imageUrl}) {
    return (
    <>
       <img src={`${imageUrl}`} alt="mars" width='100px' height='100px'>
       </img>
    </>
    )
}

export default Photo;