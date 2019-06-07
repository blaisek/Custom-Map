import React from 'react'
import './map.css';
import L from 'leaflet';

class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      latitude: props.latitude,
      longitude: props.longitude
    };

  }

  componentDidUpdate() {
    // create map
    if (this.state.latitude !== this.props.latitude && this.state.longitude !== this.props.longitude ) {
      this.map = L.map('mapid', {
        center: [this.props.latitude, this.props.longitude],
        zoom: 15,
        layers: [
          L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          }),
        ]
      });
      this.marker = L.marker([this.props.latitude, this.props.longitude]).addTo(this.map);
      
    }
  }

  componentDidMount(){
    // recherche sur le serveur des balises de position à afficher sur la carte 
  }

  render() {
    return (
    <div className="leaflet-container">
    <div id="mapid"></div>
    </div>
    )
  }
}

export default Map;
  
  