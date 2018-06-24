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

  // TODO: Do move getting data to parent App component?
  componentWillMount() {
    this.getPictures();
  }

  render() {
    const { orientation } = this.props;
    const PictureCollection = this.state.pictures.map(
      ({ id, img, title, description }) => {
        return (
          <PictureItem key={id.toString()}
                       orientation={orientation}
                       image={img}
                       title={title}
                       description={description}
          />
        )}
    );

    return (
      <div className={`PictureList ${orientation}`}>
        {PictureCollection}
      </div>
    );
  }
}

export default PictureList;
