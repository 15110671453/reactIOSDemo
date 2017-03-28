'use strict';
let React = require('react-native');
let {
	AppRegistry,StyleSheet,Text,View
} = React;


let WaitingLeaf = React.createClass({
	
	render: function () {
		return (

				<View style = {styles.container}>
					<Text style={styles.textPromptStyle}>
					注册使用手机号：{this.props.phoneNumber}</Text>
					<Text style={styles.textPromptStyle}>
					注册使用手机号：{this.props.userPW} </Text>
					<Text style={styles.bigTextPrompt} onPress={this.goBack}>
					返回</Text>


				</View>
			);
	},

	goBack: function(){
		this.props.navigator.replace({
			name: 'RegisterLeaf'
		});
	}
});

let styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#F5FCFF',
	},
	
	textPromptStyle:{
		
		fontSize: 20,
	},

	bigTextPrompt:{
		
		width: 300,
		backgroundColor: 'gray',
		color:'white',
		textAlign:'center',
		fontSize: 40,
	}
});
module.exports = WaitingLeaf;


