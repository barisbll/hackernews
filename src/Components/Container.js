import React from 'react';
import './Container.css';

const Container = (props) => {
    const link = props.pURL;
    return(
        <div className="container"> 
            <h1 className="title" dangerouslySetInnerHTML={{__html:  props.pTitle }}></h1>
            <button className="button"><a href={link}>Link</a></button>
            <p className="p">Written by -- {props.pAuthor} </p>
        </div>
    );
}

export default Container;