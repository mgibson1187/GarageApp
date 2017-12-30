import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SocketIOClient from 'socket.io-client';
import config from '../../config';

const styles = StyleSheet.create({
	myView: {
		marginTop: 5,
		marginBottom: 5
	},
	myText: {
		textAlign: 'center',
		fontSize: 40,
		color: '#d1cecc'
	},
	button: {
    justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#4f4e4d',
		borderRadius: 10,
    borderWidth: 1,
    borderColor: '#232323',
		height: 80,
		marginTop: 20,
		marginLeft: 38,
		marginRight: 38
	}
});

export default class Button extends Component{
	constructor(props){
		super(props);
		this.onPress = this.onPress.bind(this);
		this.socket = new SocketIOClient(config.myInfo.ip_address);
	}

	onPress(){
		console.log('Button Pressed');
		this.socket.emit('reply', {});
	}

	render(){
		return(
			<View style={styles.myView}>
				<TouchableOpacity style={styles.button} onPress={this.onPress}>
					<Text style={styles.myText}>DOOR</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

AppRegistry.registerComponent('Button', () => Button);