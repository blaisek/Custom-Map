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
  IonToggle,
  IonLabel,
  IonItem
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
 
  handleFavori = (event) => {

    // if selected 
    if(event.target.checked === true ){  

      
      console.log('local storage');
    }
    if(event.target.checked === false ){
      console.log('dataBase');
    }
    
    
    
    // stocke la liste des selected de l'enfant sur local storage
// else fait rien 

// aller chercher les marker sur local storage et les mettre dans la liste marker liste setState
    //this.setState({})
   
    
  }

  reset = () => {
    // vide le local storage et charge les marqueurs depuis la database
    console.log('reset le local storage switch sur la database');
    
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
        <Map latitude = {this.state.latitude} longitude={this.state.longitude} markerList={this.state.markerList} favoris={this.handleFavori}/>
      </IonContent>
      <ion-footer no-shadow>
      <IonItem>
        <IonLabel>Favoris</IonLabel>
        <IonToggle value="Favoris" onClick={this.handleFavori}></IonToggle>
      </IonItem>
      <IonButton onClick={this.reset}>Reset</IonButton>
      </ion-footer>
    </IonApp>
    
      )
  }
  
}



export default App;

