import React, {Component} from 'react';
import './App.css';
import Map from './Components/map/map'


class App extends Component {

  constructor(){
    super()
    this.state = {
      latitude:'',
      longitude:''
    }
    
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

  render() {
    
    return (

      <div className="App">
        <h1>Custom Map</h1>
        <Map latitude = {this.state.latitude} longitude={this.state.longitude}/>
      </div>
      )
  }
  
}



export default App;

