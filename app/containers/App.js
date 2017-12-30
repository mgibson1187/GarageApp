import React, {Component} from 'react';
import {AppRegistry, NetInfo, View, StyleSheet} from 'react-native';
import SocketIOClient from 'socket.io-client';
import config from '../../config';

import Intro from '../components/Intro';
import Content from '../components/Content';
import Button from '../components/Button';

const styles = StyleSheet.create({
  myView: {
    backgroundColor: '#f9f9f9',
    flex: 1
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doorSensor: null,
      connection: null
    };
    this._handleNetInfoChange = this._handleNetInfoChange.bind(this);
    this.socket = new SocketIOClient(config.myInfo.ip_address);
    this.socket.on('recieve', (res) => {
      this.setState({
        doorSensor: res.state
      });
    });
  }

  componentWillMount() {
    NetInfo.fetch().then(this._handleNetInfoChange);
    NetInfo.addEventListener('change', this._handleNetInfoChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('change', this._handleNetInfoChange);
  }

  _handleNetInfoChange(info) {
    this.setState({
      connection: info
    });
  }

  render() {
    return (
      <View style={styles.myView}>
        <Intro />
        <Content
          doorSensor={this.state.doorSensor}
          connection={this.state.connection}/>
        {this.state.connection === 'NONE' ? (null) : (
          <Button />
        )}
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);