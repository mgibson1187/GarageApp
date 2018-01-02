import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';
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
  constructor() {
    super();
    this.state = {
      connection: false,
      doorSensor: null
    };
    this.socket = new SocketIOClient(`${config.server.protocol}://${config.server.host}:${config.server.port}`);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleconnectionChange = this.handleconnectionChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentWillMount() {
    this.socket.on('recieve', this.handleStatusChange);
    this.socket.on('disconnect', this.handleconnectionChange);
  }

  handleButtonPress() {
    this.socket.emit('reply', {});
  }

  handleconnectionChange() {
    this.setState({
      connection: false,
      doorSensor: null
    });
  }

  handleStatusChange(info) {
    this.setState({
      connection: true,
      doorSensor: info.state
    });
  }

  render() {
    const {connection, doorSensor} = this.state;

    return (
      <View style={styles.myView}>
        <Intro />
        <Content
          doorSensor={doorSensor} />
        {(!connection) ? (null) : (
          <Button
            onPress={this.handleButtonPress} />
        )}
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);