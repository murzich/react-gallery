import React from 'react';
import './PictureItem.css';

function PictureItem (props) {
  const itemClass = `item ${props.orientation}`;

  return (
    <div className={itemClass}>
      <div className="picture">
        <img src={props.image} alt="img" className="image"/>
      </div>
      <div className="text">
        <h2 className="picture__title">{props.title}</h2>
        <p className="picture__description">{props.description}</p>
      </div>
    </div>
  )
}

export default PictureItem;
