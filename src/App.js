import React, {Component} from 'react';
import './App.css';
import Map from './Components/map/map';
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';


class App extends Component {

  constructor(){
    super()
    this.state = {
      latitude:47.054414,
      longitude:8.309171,
      markerList: []
    }
    this.dataApi();
    
  }
    
  componentDidMount =() => {


       if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition((position) => {
       this.setState({latitude: position.coords.latitude,
                    longitude: position.coords.longitude });
       console.log('lat: ',this.state.latitude, 'long: ',this.state.longitude);
      });
    } else {
         alert("Le service de géolocalisation n'est pas disponible sur votre navigateur.");
    };
    
  }
 
  localStorage = () => {

    // if selected 
    // stocke la liste des selected de l'enfant 
// else fait rien 

// aller chercher les marker sur local storage et les mettre dans la liste marker liste setState
    //this.setState({})
    console.log('save to local storage');
    
  }

dataApi = async () =>{
// aller chercher les marker sur le back end 
const data = await fetch("./Api/data.json").then(res => res.json()).catch(err => err);

    this.setState({markerList:data.response}); 
    console.log('App this.state.markerList',this.state.markerList);
    
  }

  render() {
    
    return (

      <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Custom Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Map latitude = {this.state.latitude} longitude={this.state.longitude} markerList={this.state.markerList}/>
      </IonContent>
      <ion-footer no-shadow>
        <IonButton onClick={this.localStorage}> save</IonButton>
        <IonButton> reset</IonButton>
      </ion-footer>
    </IonApp>
    
      )
  }
  
}



export default App;

