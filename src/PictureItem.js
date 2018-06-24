import React from 'react';
import './PictureItem.css';

function PictureItem (props) {
  const { orientation, image, title, description } = props;

  return (
    <figure className={`PictureItem ${orientation}`}>
        <img src={image} alt="img" className="PictureItem-image"/>
      <div className="PictureItem-text">
        <h2 className="PictureItem-title">{title}</h2>
        <p className="PictureItem-description">{description}</p>
      </div>
    </figure>
  )
}

export default PictureItem;
