'use strict';
let React = require('react-native');
let {
	
	StyleSheet,Text,View,AppRegistry

} = React;
/*分辨率模块*/
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let ReactOC = React.createClass({
	
	render: function () {
		return (

				<View style = {styles.container}>
					<View style={styles.test1} >
				

					</View>
					<View style={styles.test2} >
				

					</View>
					
				</View>
			);
	},
});

let styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'green',
	},
	
	test1:{
	
		width: 360,
		height: 60,
		backgroundColor: 'red',
	},

	test2:{
		
		width: 40,
		height: 40,
		backgroundColor: 'blue',
	},



});
AppRegistry.registerComponent('ReactOC' , () => ReactOC);


