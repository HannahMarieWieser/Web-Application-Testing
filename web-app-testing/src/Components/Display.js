import React, {useState} from 'react';

const Display = (...props) => {
    console.log(props)
    return(
        <>
            Balls: {props.balls}
            Strikes: {props.strikes}
            Fouls: {props.fouls}
            Hits: {props.hits}
        </>
    )
}
export default Display