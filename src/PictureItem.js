import React from 'react';
import './PictureItem.css';

function PictureItem (props) {
  const itemClass = `PictureItem ${props.orientation}`;

  return (
    <div className={itemClass}>
      <div className="PictureItem-picture">
        <img src={props.image} alt="img" className="PictureItem-image"/>
      </div>
      <div className="PictureItem-text">
        <h2 className="PictureItem-title">{props.title}</h2>
        <p className="PictureItem-description">{props.description}</p>
      </div>
    </div>
  )
}

export default PictureItem;
