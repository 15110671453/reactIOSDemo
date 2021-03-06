'use strict';
let React = require('react-native');
let {
	
	StyleSheet,Text,View,AppRegistry,TouchableHighlight

} = React;
/*分辨率模块*/
let NaviBar = require('./NavBar.js');
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let FlexBoxUI3 = React.createClass({
	onNaviBarPress: function(aNumber){





		switch (aNumber) {
			case 0:
			return;
			case 1:
			this.props.navigator.push({
				name:'WaitingLeaf',
			});
			return;
			case 2:
			this.props.navigator.push({
				name:'RegisterLeaf',
			});
			return;
			case 3:
			this.props.navigator.push({
				name:'FlexBoxUI2',
			});
			return;
		}

	},
	
	render: function () {
		return (
				
				<View style = {styles.container}>
				<NaviBar naviBarStatus={[1,0,0,0]}
				onNaviBarPress={this.onNaviBarPress}
				>
				</NaviBar>
					<View style={styles.test1} >
				

					</View>
					<View style={styles.test3} >
					<TouchableHighlight>
					<View style={styles.test4} >
				

					</View>
					</TouchableHighlight>

					</View>
					<View style={styles.test2} >
				
						<Text>{'\n'}
					显示器的分辨率是指显示器的屏幕的像素组成的数量（指液晶显示器），如21.5英寸的显示器的分辨率是1920X1080是指屏幕上横向有1920个像素，纵向上有1080个像素。

图像分辨率是一幅图片中像素的组成数量，如1024X768的图片，有1280X1024的图片，也有非常大的如2560X1600分辨率的图片等。
{'\n'}

当图像的分辨率大于显示器的分辨率时有两种显示方法，一种是局部显示，即屏幕的像素有多少就显示多少像素，这时只能看到图片的某一部分，可以上下左右的移动来看完整的内容。另一种方法是在屏幕内显示完整的图像，这时图片的像素会被压缩，如2560X1600的图片会删去一部分像素，以1920X1080的分辨率（显示屏的分辨率）来显示。
{'\n'}这时可以看到完整的图片内容，不过在细节上是丢失一小部分像素的，如用数码相机的屏幕也可以看到完整的照片，不过感觉很模糊，放在电脑上看就好多了，因为屏幕的分辨率低。


当图像的分辨率小于显示器的分辨率时也有两种显示方法，一种是显示实际大小，即图片的分辨率是多少，就用屏幕上的多少个像素来显示，这时屏幕是以点对点的方式来显示图片，不过图片不是全屏，只在屏幕中央的一部分。另一种方法也是全屏显示，这时图片不是被压缩像素，而是被人为的插入了很多像素，图片看起来很大，满屏显示，不过有效像素很少，比如说可以把一个很小的图标文件放完屏来观看，不过画面惨不忍睹。
						</Text>
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

		borderTopWidth: 1,
		borderColor: 'black',
		width: 375,
		height: 60,
		backgroundColor: 'red',
	},
	test3:{
	  
		width: 360,
		height: 120,
		backgroundColor: 'gray',
	},
	test4:{
	
		width: 360,
		height: 60,
		backgroundColor: 'white',
	},

	test2:{
		
		width: 320,
		flex:1,
		backgroundColor: 'blue',
	},



});
module.exports= FlexBoxUI3;


