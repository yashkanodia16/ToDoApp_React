import React from 'react';

function Joke(props) {
    return (
        <div>
            <p style={{display: !props.jokes.question && "none"}}>Question: {props.jokes.question}</p>
            <p>Punch-Line: {props.jokes.punchLine}</p>
        </div>
    )
}

export default Joke;