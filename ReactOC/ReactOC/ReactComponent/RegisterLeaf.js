'use strict';
let React = require('react-native');
let {
	AppRegistry,StyleSheet,Text,View,TextInput,} = React;


let ConfirmDialog = require('./ConfirmDialog');
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let leftStartPoint = totalWidth *  0.1;
let componentWidth = totalWidth * 0.8;
let RegisterLeaf = React.createClass({
	getInitialState: function() {
		return {
			inputedNum:'',
			inputedPW:'',
			needToConfirm: true,
		};
	},

	userPressConfirme : function() {
		this.setState((state) => {
			return {
				needToConfirm: true,
			};
		});
	},
	userCanceled: function(){
		this.setState((state) => {
			return {
				needToConfirm:false,
			};
		});
	},
	userConfirmed:function(){
		this.setState((state) => {
			return {
				needToConfirm: false,
			};
		});
		this.props.navigator.replace({
			phoneNumber: this.state.inputedNum,
			userPW: this.state.inputedPW,
			name:'page1',
		});
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
	renderWithDialog:function(){
		console.log('renderWithDialog');

		return (
				<View style={styles.container}>

					<TextInput style={styles.numberInputStyle} placeholder={'请输入手机号'} 
					onChange={this.updateNum}>
					</TextInput>
					<Text style={styles.textPromptStyle}  > 您输入的手机号码:{this.state.inputedNum} </Text>
					<TextInput style={styles.passwordInputStyle} placeholder={'请输入密码'} 
					onChange={(newText) => this.updatePW(newText)}>
					</TextInput>
					<Text style={styles.bigTextPrompt}  onPress={this.userConfirmed}

					> 您输入的手机号码:{this.state.inputedNum} </Text>
					<ConfirmDialog userConfirmed={this.userConfirmed} 
					userCanceled={this.userCanceled}
					promptToUser={  '使用' + this.state.inputedNum + '号码登陆?'}
					></ConfirmDialog>
				</View>
			);

	},
	render: function () {

		if(this.state.needToConfirm) return this.renderWithDialog();
		return (

				<View style = {styles.container}>
					<TextInput style={styles.numberInputStyle} 
					placeholder={'请输入手机号吗'} editable={true}  onChangeText={(newText) => this.updateNum(newText)} value={this.state.text} multiline={false} keyboardType={'default'} defaultValue={'ceshi'}/>
					<Text style ={styles.textPromptStyle}> 您输入的手机号</Text>
					<TextInput style={styles.passwordInputStyle} placeholder={'请输入密码'}
					 password={true} onChangeText={(newText) => this.updatePW(newText)}/>
					 <Text style={styles.bigTextPrompt} onPress={this.userConfirmed}>
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
module.exports = RegisterLeaf;


