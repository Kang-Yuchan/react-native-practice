import React from 'react';
import { Alert } from 'react-native';
import Loader from './Loader';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '241051bf13976dd3ddf8b8d9f247255e';
const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather?';

export default class extends React.Component {
	state = {
		isLoading: true
	};
	getWeather = async (latitude, longitude) => {
		const { data: { main: { temp }, weather } } = await axios.get(
			`${WEATHER_API}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
		);
		this.setState({
			isLoading: false,
			condition: weather[0].main,
			temp
		});
	};
	getLocation = async () => {
		try {
			await Location.requestPermissionsAsync();
			const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
			this.getWeather(latitude, longitude);
		} catch (error) {
			Alert.alert("Can't find you.", 'So sad');
		}
	};
	componentDidMount() {
		this.getLocation();
	}
	render() {
		const { isLoading, temp, condition } = this.state;
		return isLoading ? <Loader /> : <Weather temp={Math.round(temp)} condition={condition} />;
	}
}
