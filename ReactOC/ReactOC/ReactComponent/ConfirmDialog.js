'use strict';
let React = require('react-native');
let {
	StyleSheet,Text,View,NavigatorIOS
} = React;
/*分辨率模块*/
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let ConfirmDialog = React.createClass({
	
	render: function () {
		return (

				<View style = {styles.confirmCont}>
					<View style={styles.dialogStyle}>
					<Text style={styles.textPrompt}>
					{this.props.promptToUser} </Text>

					<Text style={styles.yesButton} onPress={this.props.userConfirmed} numberOfLines={3}>
					{'\r\n'}确定

					</Text>

					<Text style={styles.cancelButton} onPress={this.props.userCanceled} numberOfLines={3}>
					{'\r\n'}取消

					</Text>





					</View>
					
					


				</View>
			);
	},
});

let styles = StyleSheet.create({
	confirmCont: {
		position:'absolute',
		top: 0,
		width: totalWidth,
		height: totalHeight,
		
		backgroundColor:'rgba(52,52,52,0.5)',
	},
	
	dialogStyle:{
		position:'absolute',
		top: totalWidth * 0.4,
		left: totalWidth / 10 ,
		width: totalWidth * 0.8,
		height: totalHeight * 0.3,
		backgroundColor: 'white',
	},

	textPrompt:{
		
		position: 'absolute',
		top: 10,
		left: 10,
		color:'black',
		
		fontSize: 20,
	},

	yesButton: {
		position: 'absolute',
		bottom: 10,
		left: 10,
		width: totalWidth * 0.35,
		height: totalHeight * 0.12,
		backgroundColor: 'grey',
		fontSize: 20 ,
		color: 'white',
		textAlign: 'center',
	},
		cancelButton: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		width: totalWidth * 0.35,
		height: totalHeight * 0.12,
		backgroundColor: 'grey',
		fontSize: 20 ,
		color: 'white',
		textAlign: 'center',
	},

});
module.exports = ConfirmDialog;


