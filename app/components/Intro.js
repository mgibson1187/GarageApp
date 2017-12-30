import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	myView: {
		marginTop: 45,
		marginBottom: 10
	},
	myText: {
		textAlign: 'center',
		fontSize: 40
	}
});


export default class Intro extends Component{
	render(){
		return(
			<View style={styles.myView}>
				<Text style={styles.myText}>Garage Door</Text>
				<Text style={styles.myText}>Opener</Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('Intro', () => Intro);