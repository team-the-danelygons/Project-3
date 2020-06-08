import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import API from "../../../utils/API";

// examples:
import GoogleMap from './GoogleMap';

// variables for latitude and longitude 
var lat;
var lng;

// InfoWindow component
const InfoWindow = (props) => {
  const { place } = props;
  const infoWindowStyle = {
    position: 'relative',
    bottom: 150,
    left: '-45px',
    width: 220,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>
       <a href={`/business/${place._id}`}>{place.bizname}</a> 
      </div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: 'grey' }}>
          {place.rating}{' '}
        </span>
        <span style={{ color: 'orange' }}>
          {String.fromCharCode(9733).repeat(Math.floor(place.rating))}
        </span>
        <span style={{ color: 'lightgrey' }}>
          {String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}
        </span>
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {place.types[0]}
      </div>
      <div style={{ fontSize: 14, color: 'green' }}>
      
        {place.opening_hours ? (place.opening_hours.open_now ? 'Open' : 'Closed') : 'Unknown'}
      </div>
    </div>
  );
};

// Marker component
const Marker = (props) => {
  const markerStyle = {
    border: '1px solid white',
    borderRadius: '50%',
    height: 10,
    width: 10,
    backgroundColor: props.show ? 'red' : 'blue',
    cursor: 'pointer',
    zIndex: 10,
  };

  return (
    <Fragment>
      <div style={markerStyle} />
      {props.show && <InfoWindow place={props.place} />}
    </Fragment>
  );
};


class MapWithMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }

  
  componentDidMount() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else { 
        console.log("Geolocation is not supported by this browser.");
    }
    //gets geolocation from browser and passes lat and lng to placesAPI  
  };

  showPosition = (position) => {
    lat = position.coords.latitude 
     lng = position.coords.longitude
     console.log ("lat and lng: ", lat, lng);
     this.loadPage(lat, lng);
  }

loadPage = (lat, lng) => {
  console.log("LAT_LONG", lat, lng)
  this.props.setLatLng(lat, lng);
  this.props.loadPage();
  API.getPlaces(lat, lng)
    .then((res) => {
      console.log("Look Here", res.data)
      this.setState({ places: res.data })
    })
    .catch((err) => console.log(err));
};



  // onChildClick callback can take two arguments: key and childProps
  onChildClickCallback = (key) => {
    this.setState((state) => {
      const index = state.places.findIndex(e => e._id === key);
      state.places[index].show = !state.places[index].show; // eslint-disable-line no-param-reassign
      return { places: state.places };
    });
  };

  render() {
    const places = this.state.places;

    return (
      <>
      <Fragment >
        {!isEmpty(places) && (
          <GoogleMap
            defaultZoom={12}
            defaultCenter={[lat, lng]}
            bootstrapURLKeys={{ key: "AIzaSyBiSOIBbrhQrecwDybnjkZgjaBM_KBvXk0" }}
            onChildClick={this.onChildClickCallback}
            
          >
            {places.map(place =>
              (<Marker
                key={place._id}
                lat={place.geometry.location.lat}
                lng={place.geometry.location.lng}
                show={place.show}
                place={place}
                
              />))}
          </GoogleMap>
        )}
      </Fragment>


      


</>

    );
  }
}

InfoWindow.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string,
    formatted_address: PropTypes.string,
    rating: PropTypes.number,
    types: PropTypes.array,
    price_level: PropTypes.number,
    opening_hours: PropTypes.object,
  }).isRequired,
};

Marker.propTypes = {
  show: PropTypes.bool.isRequired,
  place: PropTypes.shape({
    name: PropTypes.string,
    formatted_address: PropTypes.string,
    rating: PropTypes.number,
    types: PropTypes.array,
    price_level: PropTypes.number,
    opening_hours: PropTypes.object,
  }).isRequired,
};

export default MapWithMark;