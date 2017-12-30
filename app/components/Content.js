import React, {Component} from 'react';
import {AppRegistry, Image, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	myView: {
		backgroundColor: '#c1bebd',
		borderRadius: 2,
		borderWidth: 1,
		borderColor: '#232323',
		height: 200,
		marginTop: 50,
		marginBottom: 50,
		marginLeft: 30,
		marginRight: 30
	},
	myText: {
		textAlign: 'center',
		fontSize: 20,
		marginTop: 10
	},
	image: {
		flex: 1,
		height: undefined,
		width: undefined,
		marginBottom: 5
	}
});

class StatusText extends Component {
	propTypes = {
		doorSensor: PropTypes.number
	};

	render() {
		const {doorSensor} = this.props;
		switch (doorSensor) {
			case (1):
				return (
					<Text style={[styles.myText, {color: 'red'}]}>Status: open</Text>
				);
			case (0):
				return (
					<Text style={[styles.myText, {color: 'black'}]}>Status: closed</Text>
				);
			default:
				return (
					<Text style={[styles.myText, {color: 'black'}]}>Status: connecting</Text>
				);
		}
	}
}

class StatusImage extends Component {
	propTypes = {
		doorSensor: PropTypes.number
	};

	render() {
		const {doorSensor} = this.props;
		switch (doorSensor) {
			case (1):
				return (
					<Image
						style={styles.image}
						source={require('../../img/door_open.png')}
						resizeMode="contain"
					/>
				);
			case (0):
				return (
					<Image
						style={styles.image}
						source={require('../../img/door_closed.png')}
						resizeMode="contain"
					/>
				);
			default:
				return (
					<Image
						style={styles.image}
						source={require('../../img/connecting.png')}
						resizeMode="contain"
					/>
				);
		}
	}
}

export default class Content extends Component {
	propTypes = {
		doorSensor: PropTypes.number
	};

	shouldComponentUpdate(prevProps) {
		const {doorSensor} = this.props;
		if (prevProps.doorSensor !== doorSensor) {
			return true;
		}
		return false;
	}

	render() {
		const {doorSensor} = this.props;
		console.log(`Content Door Sensor: ${doorSensor}`);
		return (
			<View style={styles.myView}>
				<StatusText
					doorSensor={doorSensor} />
				<StatusImage
					doorSensor={doorSensor} />
			</View>
		);
	}
}

AppRegistry.registerComponent('Content', () => Content);