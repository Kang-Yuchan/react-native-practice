import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({ temp, condition }) {
	function localizeKR() {
		if (condition === 'Clear') {
			condition = '맑음';
		} else if (condition === 'Drizzle') {
			condition = '이슬비';
		} else if (condition === 'Rain') {
			condition = '비내림';
		} else if (condition === 'Snow') {
			condition = '눈내림';
		} else if (condition === 'Thunderstorm') {
			condition = '천둥치는 폭풍우';
		} else if (condition === 'Clouds') {
			condition = '흐림';
		} else if (condition === 'Haze') {
			condition = '안개낌';
		} else if (condition === 'Mist') {
			condition = '안개낌';
		} else if (condition === 'Fog') {
			condition = '안개낌';
		} else if (condition === 'Dust') {
			condition = '먼지낌';
		}
	}
	localizeKR();
	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<MaterialCommunityIcons size={86} name="weather-lightning-rainy" />
				<Text style={styles.text}>{temp}°</Text>
			</View>
			<View style={styles.botContainer}>
				<Text style={styles.text}>{condition}</Text>
			</View>
		</View>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Clear',
		'Clouds',
		'Haze',
		'Mist',
		'Dust',
		'Fog'
	]).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 42
	},
	topContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	botContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
