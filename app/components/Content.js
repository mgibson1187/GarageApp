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
		flex:1,
		height: undefined,
		width: undefined,
		marginBottom: 5
	}
});

export default class Content extends Component{
	constructor(props) {
		super(props);
		this.state = {
			status: 'connecting'
		};
		this.getStatus = this.getStatus.bind(this);
	}

	componentWillMount() {
		this.getStatus(this.props.doorSensor, this.props.connection);
	}

	shouldComponentUpdate(prevProps) {
		if (prevProps.doorSensor !== this.props.doorSensor) {
			return true;
		}
		if (prevProps.connection !== this.props.connection) {
			return true;
		}
		return false;
	}

	getStatus(data, door) {
		if (data && door === 1) {
			this.setState({
				status: 'open'
			});
		} else if (data && door === 0) {
			this.setState({
				status: 'closed'
			});
		}
	}

	render(){
		return(
			<View style={styles.myView}>
				<Text style={[styles.myText, {color: 'black'}]}>Status: {this.state.status}</Text>
				<Image
				  style={styles.image}
					source={require('../../img/connecting.png')}
				  resizeMode="contain"
				/>
			</View>
		);
	}
}

Content.propTypes = {
	doorSensor: PropTypes.number,
	connection: PropTypes.string
};

AppRegistry.registerComponent('Content', () => Content);