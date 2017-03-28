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
	getInitialState: function() {
		return {
			appColor1:'red',
			vsH:50
			
		};
	},
	ontextPress:function(){
		this.setState({
			appColor1:'white',
			vsH:120
		});
	},
	render: function () {
		return (

				<View style = {styles.container}>
					<View style={styles.vs} >
					<Text>View1</Text>
						
					</View>
					<View style={styles.vs} >
					<Text>View2</Text>

					</View>
					<View style={styles.vs} >
					<Text>View3</Text>
					</View>
					<View style={[styles.aStyle,{backgroundColor:this.state.appColor1,height:this.state.vsH}]} >
						<Text onPress={this.ontextPress}>
						View4
						</Text>
						<Text onPress={this.ontextPress}
						>点我修改样式{'\n'}第一：{'\n'}
						组件可以有多种样式，多种样式会合并操作，如果对一个键有重复定义，
						那么后面的样式定义的键将覆盖前面的{'\n'}
						第二：{'\n'}
						动态改变样式

						</Text>

					</View>
					<View style={styles.vs1} >
					<Text>View5{'\n'}
					第二：{'\n'}
						flex是决定组件显示规则的样式键
						开发者使用flex需注意 它不仅自动缩放 改变自己的宽 高与位置
						还会改变与它同级的其他组件的位置

						  我们对这五个view都适用vs样式 就会在手机屏幕上均匀地
						  分布高度为50的红色长条
						  {'\n'}
						  第一：{'\n'}
						  当我们对第五个view应用vs1样式时

						  不仅让该view沿着它的父组件规定的flexDirection的方向

						  扩展到相邻同级组件，并且还顶着其相邻组件继续扩展，直到所有的同级组件
						  都顶结实了才收手

					</Text>
					  <View style={styles.welcome}  opacity={0} ></View>
						  <View style={styles.welcome}  opacity={0.1} ></View>
						  <View style={styles.welcome}  opacity={0.25} ></View>
						  <View style={styles.welcome}  opacity={0.75} ></View>
						  <View style={styles.welcome}  opacity={1} ></View>
						  <View style={styles.welcome}  opacity={5} ></View>

					</View>
					
				</View>
			);
	},
});

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		backgroundColor:'green',
	},
	
	vs:{
	
		
		height: 50,
		backgroundColor: 'red',
	},

	vs1:{
		
		flex: 1,
		backgroundColor: 'blue',
		/*让自组件圆圈之间等间距相隔*/
		justifyContent:'space-around',
		/*让自组件圆圈居中显示*/
		alignItems:'center',

	},
	aStyle:{
		height: 50,
		backgroundColor: 'red',
	
		


	},
	welcome:{
		width:20,
		height:20,
		borderWidth:1,
		backgroundColor:'red',
		borderRadius:10,
	}



});
module.exports = ReactOC;


