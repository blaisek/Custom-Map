import React from 'react'
import './map.css';
import L from 'leaflet';
import {IonCard} from '@ionic/react';

class Map extends React.Component {

  constructor(props){
    
    super(props);
    this.state = {
      latitude: props.latitude,
      longitude: props.longitude,
      markerList: props.markerList
    };

  }

  componentDidUpdate = () => {

    if (this.state.latitude !== this.props.latitude && this.state.longitude !== this.props.longitude ) {
      
       this.map.setView([this.props.latitude, this.props.longitude],15)
      this.marker = L.marker([this.props.latitude, this.props.longitude]).addTo(this.map).bindPopup('Vous êtes ici');

    }
   
      let liste = [];
      liste = this.props.markerList; 
      liste.map(point=> {
             L.geoJSON(point).addTo(this.map).bindPopup(point.properties.popupContent);
             
            })

    

  }

  componentDidMount = () => {

    this.map = L.map('mapid', {
      center: [this.state.latitude, this.state.longitude],
      zoom: 7,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    
  }

  render() {
    return (
    <IonCard>
    <ion-card-content id="mapid"> </ion-card-content>
    </IonCard>
    )
  }
}

export default Map;
  
  