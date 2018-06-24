import React from 'react';
import './PictureItem.css';

function PictureItem (props) {
  const itemClass = `PictureItem ${props.orientation}`;

  return (
    <figure className={itemClass}>
        <img src={props.image} alt="img" className="PictureItem-image"/>
      <div className="PictureItem-text">
        <h2 className="PictureItem-title">{props.title}</h2>
        <p className="PictureItem-description">{props.description}</p>
      </div>
    </figure>
  )
}

export default PictureItem;
