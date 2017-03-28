// 'use strict';

// var React = require('react-native');

// var {
//     Text,
//     View
// } = React;

// var style = React.StyleSheet.create({
//     container: {
//              flex:1,
//             backgroundColor:'red',
//                  },
//                                     });

// class SimpleApp extends React.Component
// {
//     render() {
//         return ( <View style = { styles.container } >
//                 <Text> This is a SimpleApp project 
//                 </Text>
//                 </View>
//                 );
//     }
// }

// React.AppRegistry.registerComponent('SimpleApp',() => SimpleApp)
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
2.变量声明
ES5只有2种声明变量的方法：
var、function。
ES6共有6种声明变量的方法：
var、function、let、const、import(require)、class。
*/

'use strict'
 var React = require('react-native');

 var {Text,View,AppRegistry,Navigator,} = React;

//这句代码是ES6 中新增的解构(Destructuring)赋值语句。
//准许你获取对象的多个属性并且使用一条语句将它们赋给多个变量。
//上面的代码等价于：var StyleSheet = React.StyleSheet;
//var Text = React.Text;
//var View = React.View

var RegisterLeaf = require('./RegisterLeaf');
var WaitingLeaf = require('./WaitingLeaf');
var FlexBoxUI2 = require('./FlexBoxUI2');
var FlexBoxUI3 = require('./FlexBoxUI3');
/*
ES6中添加了对类的支持，
引入了class关键字（其实class在JavaScript中一直是保留字，
目的就是考虑到可能在以后的新版本中会用到，现在终于派上用场了）。
JS本身就是面向对象的，ES6中提供的类实际上只是JS原型模式的包装。
现在提供原生的class支持后，对象的创建，继承更加直观了，
并且父类方法的调用，实例化，静态方法和构造函数等概念都更加形象化。
*/
var NaviModule = React.createClass({

  configureScene: function(route){
    return Navigator.SceneConfigs.PushFromRight;
  },
  renderScene: function(router,navigator){
    this._navigator = navigator;
    switch(router.name){
      case 'WaitingLeaf' :
      return <WaitingLeaf navigator={navigator}></WaitingLeaf>;

       case 'RegisterLeaf' :

      return <RegisterLeaf navigator={navigator}></RegisterLeaf>;

       case 'page1':
      return <FlexBoxUI3 navigator={navigator}></FlexBoxUI3>;
       case 'FlexBoxUI2':
      return <FlexBoxUI2 navigator={navigator}></FlexBoxUI2>;
    }
  },
  render:function(){
    return (<Navigator initialRoute={{name:'page1'}}
     configureScene={this.configureScene} renderScene={this.renderScene}></Navigator>);
  }
});



 




React.AppRegistry.registerComponent( 'ReactOC' , () => NaviModule );

