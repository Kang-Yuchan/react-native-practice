import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Loading() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Getting the Fucking Weather</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fdf6aa',
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingVertical: 150
	},
	text: {
		fontSize: 43
	}
});

export default Loading;
