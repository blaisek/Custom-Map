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
      favoris: []
    };
    this.setStyle = L.icon ({
      iconUrl:"../../assets/img/marker-icon-red.png",
      shadowUrl:"../../assets/img/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })


  }

  componentDidUpdate = () => {

    if (this.state.latitude !== this.props.latitude && this.state.longitude !== this.props.longitude ) {
      
      this.map.setView([this.props.latitude, this.props.longitude],14)
      this.marker = L.marker([this.props.latitude, this.props.longitude],{icon:this.setStyle}).addTo(this.map).bindPopup('<h1>'+'Vous êtes ici'+'</h1>');
      
    }
   
      this.liste = [];
      this.liste = this.props.markerList; 
      this.liste.map(point=> {
             L.geoJSON(point).addTo(this.map).bindPopup('<h1>'+point.properties.popupContent+'</h1>');
             
            });

  }

  componentDidMount = () =>{

    this.map = L.map('mapid', {
      center: [this.state.latitude, this.state.longitude],
      zoom: 7,
      
    });
  
     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map)
    
    setTimeout(()=> {this.map.invalidateSize()},1000);
    
  }

  listenTarget = () => {
    console.log('listen target ')
  }

  render() {
    return (
    <IonCard>
    <ion-card-content id="mapid"></ion-card-content>
    </IonCard>
    )
  }
}

export default Map;
  
  