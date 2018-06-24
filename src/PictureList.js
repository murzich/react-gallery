import React from 'react';
import Transition from 'react-transition-group/Transition';

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
    const { orientation, show, timeout } = this.props;
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
      <Transition in={show} timeout={timeout}>
        {(state) => (
          <div className={`PictureList ${orientation} ${state}`}>
            {PictureCollection}
          </div>
        )}
      </Transition>
    );
  }
}

export default PictureList;
