import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.blueView}>
				<Text>It's Blue</Text>
			</View>
			<View style={styles.yellowView}>
				<Text>It's Yellow</Text>
			</View>
			<View style={styles.whiteView}>
				<Text>It's White</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gray'
	},
	blueView: {
		flex: 5,
		backgroundColor: 'blue'
	},
	yellowView: {
		backgroundColor: 'yellow',
		flex: 5
	},
	whiteView: {
		backgroundColor: 'white',
		flex: 5
	}
});
