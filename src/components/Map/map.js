import React, {Component} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';


class Map extends Component{

  constructor(props){
    super(props)
    this.state = {
      viewport: {
        width: "100vw",
        height: "80vh",
        latitude: 43,
        longitude: -72,
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
        mapStyle="mapbox://styles/mapbox/light-v10"
      >
                 <Marker 
          key={"1"}
          latitude={43}
          longitude={-72}
          >
            <svg 
            overflow="visible">
              <circle
              r={5}
              >
              </circle>
            </svg>
          </Marker>
        

      </ReactMapGL>
      </div>
    );
  }
}


export default Map