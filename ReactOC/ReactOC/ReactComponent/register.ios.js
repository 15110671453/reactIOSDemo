'use strict';
let React = require('react-native');
let {
	AppRegistry,StyleSheet,Text,View,TextInput
} = React;

let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let leftStartPoint = totalWidth *  0.1;
let componentWidth = totalWidth * 0.8;
let ReactOC = React.createClass({
	getInitialState: function() {
		return {
			inputedNum:'',
			inputedPW:'',
		};
	},
	updateNum: function(newText) {
		this.setState((oldState) => {
			for (var aName in oldState) {
				console.log(aName);
				console.log(oldState[aName]);
				
			}
			return {
				inputedNum: newText,
				aBrandnewStateVariable: 'I am a new variable',
			};
		},this.changeNumDone);
	},
	changeNumDone:function() {
		console.log('React Native has changed inputed Num');
	},
	updatePW: function (newText) {
		this.setState(() => {
			return {
				updatePW: newText,
			};
		});
	},
	render: function () {
		return (

				<View style = {styles.container}>
					<TextInput style={styles.numberInputStyle} 
					placeholder={'请输入手机号吗'} editable={true}  onChangeText={(newText) => this.updateNum(newText)} value={this.state.text} multiline={false} keyboardType={'default'} defaultValue={'ceshi'}/>
					<Text style ={styles.textPromptStyle}> 您输入的手机号</Text>
					<TextInput style={styles.passwordInputStyle} placeholder={'请输入密码'}
					 password={true} onChangeText={(newText) => this.updatePW(newText)}/>
					 <Text style={styles.bigTextPrompt}>
						确定
					 </Text>

				</View>
			);
	},
});

let styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'white',
	},
	numberInputStyle: {
		top: 20,
		left:leftStartPoint,
		width:componentWidth,
		backgroundColor: 'gray',
		fontSize: 20,
		height:60,

	},
	textPromptStyle:{
		top:30,
		left: leftStartPoint,
		width: componentWidth,
		fontSize: 20,
	},
	passwordInputStyle:{
		top: 50,
		left: leftStartPoint,
		width: componentWidth,
		backgroundColor: 'gray',
		fontSize: 20,
		height:40,
	},
	bigTextPrompt:{
		top: 70,
		left: leftStartPoint,
		width: componentWidth,
		backgroundColor: 'gray',
		color:'white',
		textAlign:'center',
		fontSize: 40,
	}
});
AppRegistry.registerComponent('ReactOC', () => ReactOC);


