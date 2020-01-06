import React from 'react';
import { Alert } from 'react-native';
import Loader from './Loader';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '241051bf13976dd3ddf8b8d9f247255e';
const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather?';

export default class extends React.Component {
	state = {
		isLoading: true
	};
	getWeather = async (latitude, longitude) => {
		try {
			const { data } = await axios.get(
				`${WEATHER_API}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
			);
			console.log(data);
		} catch (err) {
			Alert.alert("I can't get weather..");
		}
	};
	getLocation = async () => {
		try {
			await Location.requestPermissionsAsync();
			const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
			this.getWeather(latitude, longitude);
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
