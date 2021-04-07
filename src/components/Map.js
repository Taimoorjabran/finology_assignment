import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { styles } from '../styles/styles';
import { API_KEY } from '../App';

const OurLocation = ({ text }) => (
  <div style={styles.mapCurrentLoactionTextCont}>{text}</div>
);

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 3.07198,
      lng: 101.67117,
    },
    zoom: 15,
  };

  render() {
    return (
      <div style={this.props.mapCont}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <OurLocation
            lat={3.07198}
            lng={101.67117}
            text="Taman Overseas Union"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
