import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types'

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

export default class Button extends Component {
	propTypes = {
		onPress: PropTypes.func
	};

	render() {
		const {onPress} = this.props;
		return (
			<View style={styles.myView}>
				<TouchableOpacity style={styles.button} onPress={onPress}>
					<Text style={styles.myText}>DOOR</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

AppRegistry.registerComponent('Button', () => Button);