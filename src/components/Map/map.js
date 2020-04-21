import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component{

  constructor(props){
    super(props)
    this.state = {
      viewport: {
        width: "100vw",
        height: "90vh",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
  } 

  };
  render(){
    return (
      <div>
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken= {"pk.eyJ1IjoiYXJyY29sZSIsImEiOiJjazFpODM1eWowMGFnM2lwN2M1a3hheHczIn0.or7eL1mNGyvc2t1f8yypKA"}
      />
      </div>
    );
  }
}


export default Map