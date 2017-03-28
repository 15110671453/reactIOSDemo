'use strict';
let React = require('react-native');
let {
	
	StyleSheet,Text,View,AppRegistry,TouchableHighlight

} = React;
/*分辨率模块*/
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let naviButtonWidth = totalWidth / 4;
let naviButtonHeight = naviButtonWidth * 0.75;
let NaviBar = React.createClass({

	propTypes:{
		 naviBarStatus:React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
		onNaviBarPress:React.PropTypes.func.isRequired,
	},
	getInitialState: function() {
		
		return {
			inputedNum:'',
			inputedPW:'',
			needToConfirm: false,
		};
	},
	_naviTab0Pressed: function(){
			this.props.onNaviBarPress(0);

	},
	_naviTab1Pressed: function(){
			this.props.onNaviBarPress(1);

	},
	_naviTab2Pressed: function(){
			this.props.onNaviBarPress(2);

	},
	_naviTab3Pressed: function(){
			this.props.onNaviBarPress(3);

	},


	render: function () {
			var buttonColors = this.props.naviBarStatus.map(function(aNumber){
		if(aNumber == 0) return 'white';
		return 'gray';
	});
		return (

				<View style = {styles.naviRow}>
				
					
					<TouchableHighlight onPress={this._naviTab0Pressed}>
					<View style={styles.button,{backgroundColor:buttonColors[0]}} >
				    <Text style={styles.textStyle1}>栏目一</Text>
					</View>
					</TouchableHighlight>



					<TouchableHighlight onPress={this._naviTab1Pressed}>
					<View style={styles.button,{backgroundColor:buttonColors[1]}} >
				    <Text style={styles.textStyle1}>栏目二</Text>
					</View>
					</TouchableHighlight>


					<TouchableHighlight onPress={this._naviTab2Pressed}>
					<View style={styles.button,{backgroundColor:buttonColors[2]}} >
				    <Text style={styles.textStyle1}>栏目三</Text>
					</View>
					</TouchableHighlight>


					<TouchableHighlight onPress={this._naviTab3Pressed}>
					<View style={styles.button,{backgroundColor:buttonColors[3]}} >
				    <Text style={styles.textStyle1}>栏目四</Text>
					</View>
					</TouchableHighlight>
				
					
				</View>
			);
	},
});

let styles = StyleSheet.create({
	naviRow: {
		flexDirection: 'row',
		justifyContent:'space-around',

	
	},
	
	button:{
		
		width: naviButtonWidth,
		height: naviButtonHeight,
		justifyContent:'center',
	},
	textStyle1:{
	  
		fontSize:20,
		textAlign: 'center',
	
	},
	



});
module.exports = NaviBar;


