import React from 'react';
import { Alert } from 'react-native';
import Loader from './Loader';
import * as Location from 'expo-location';

export default class extends React.Component {
	state = {
		isLoading: true
	};
	getLocation = async () => {
		try {
			await Location.requestPermissionsAsync();
			const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
			this.setState({ isLoading: false });
		} catch (err) {
			Alert.alert("I can't get location..");
		}
	};
	componentDidMount() {
		this.getLocation();
	}
	render() {
		const { isLoading } = this.state;
		return isLoading ? <Loader /> : null;
	}
}
