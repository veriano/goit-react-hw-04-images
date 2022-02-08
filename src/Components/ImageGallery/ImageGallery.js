import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';
import './ImageGallery.css';

class ImageGallery extends Component {
    
    render() {
        const { children } = this.props;
    return (
        <ul className="ImageGallery">
            { children }
        </ul>
    )
    }
}
ImageGallery.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ImageGallery;
