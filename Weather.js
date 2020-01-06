import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
	Thunderstorm: {
		iconName: 'weather-lightning',
		gradient: [ '#373B44', '#4286f4' ],
		title: '천둥번개를 동반한 폭풍우',
		subtitle: '밖에 나가면..알지?'
	},
	Drizzle: {
		iconName: 'weather-hail',
		gradient: [ '#89F7FE', '#66A6FF' ],
		title: '이슬비가 촉촉..',
		subtitle: '촉촉한 초코칩이 땡기는 그런 날씨지?'
	},
	Rain: {
		iconName: 'weather-rainy',
		gradient: [ '#00C6FB', '#005BEA' ],
		title: '비가 내리고...',
		subtitle: 'ASMR ㅗㅜㅑ...'
	},
	Snow: {
		iconName: 'weather-snowy',
		gradient: [ '#7DE2FC', '#B9B6E5' ],
		title: '눈이 내리고...',
		subtitle: '홀리쓋 엘싸!'
	},
	Clear: {
		iconName: 'weather-sunny',
		gradient: [ '#FF7300', '#FEF253' ],
		title: '내 마음처럼 맑은 날씨',
		subtitle: '아..광합성한다'
	},
	Clouds: {
		iconName: 'weather-cloudy',
		gradient: [ '#D7D2CC', '#304352' ],
		title: '흐림. 그저 흐림',
		subtitle: '우산 안챙기면 후회할것만 같은 그런~~~날씨?'
	},
	Mist: {
		iconName: 'weather-fog',
		gradient: [ '#4DA0B0', '#D39D38' ],
		title: '안개가 자욱..',
		subtitle: '혹시 영화 미스트라고 아니?'
	},
	Dust: {
		iconName: 'weather-hail',
		gradient: [ '#4DA0B0', '#D39D38' ],
		title: '어우..미세먼지',
		subtitle: 'ㅎㅎ 짱ㄲ..아니 중국 조심하자!'
	},
	Haze: {
		iconName: 'weather-fog',
		gradient: [ '#4DA0B0', '#D39D38' ],
		title: '안개가 자욱..',
		subtitle: '앙..안개띠..'
	},
	Fog: {
		iconName: 'weather-fog',
		gradient: [ '#4DA0B0', '#D39D38' ],
		title: '안개가 자욱..',
		subtitle: '조심해! 녀석이 안보인다!!'
	}
};

export default function Weather({ temp, condition }) {
	return (
		<LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
				<Text style={styles.temp}>{temp}°</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
			</View>
		</LinearGradient>
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
		flex: 1
	},
	temp: {
		fontSize: 42,
		color: 'white'
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		color: 'white',
		fontSize: 44,
		fontWeight: '300',
		marginBottom: 10,
		textAlign: 'left'
	},
	subtitle: {
		fontWeight: '600',
		color: 'white',
		fontSize: 24,
		textAlign: 'left'
	},
	textContainer: {
		alignItems: 'flex-start',
		paddingHorizontal: 40,
		justifyContent: 'center',
		flex: 1
	}
});
