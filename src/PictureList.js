import React from 'react';

import './PictureList.css';
import PictureItem from './PictureItem';

import * as mock from './mock-gallery'

class PictureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
  }

  getPictures() {
    const pictures = mock;
    this.setState({
      pictures: pictures
    });
  }

  componentWillMount() {
    this.getPictures();
  }

  render() {
    console.log(this.props);
    const PictureCollection = this.state.pictures.map(
      (picture) => { return (
        <PictureItem key={picture.id.toString()}
                     orientation={this.props.orientation}
                     image={picture.img}
                     title={picture.title}
                     description={picture.description}
        />
      )}
    );
    const className = `picture__list ${this.props.orientation}`;
    return (
      <div className={className}>
        {PictureCollection}
      </div>
    );
  }
}

export default PictureList;
