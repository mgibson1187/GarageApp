import React, {Component} from 'react';
import { AppRegistry } from 'react-native';

import App from './app/containers/App';

console.disableYellowBox = true;

export default class GarageApp extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <App />
    );
  }
}

AppRegistry.registerComponent('GarageApp', () => GarageApp);