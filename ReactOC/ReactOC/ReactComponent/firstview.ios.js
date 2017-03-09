'use strict';
var React = require('react-native');
var {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    ListView,
} = React;
 //上面是es6 的语法 引入react需要的组件
  //
var BASE_URL = 'https://api.github.com/search/repositories?q=';
var styles = StyleSheet.create({
                               container: {
                               flex: 1,
                               justifyContent: 'center',
                               alignItems: 'center',
                               backgroundColor: '#F5FCFF',
                               },
                               customing: {
                               width: 200,
                               height: 200,
                               },
                               searchBarInput: {
                               marginTop: 30,
                               padding: 5,
                               fontSize: 15,
                               height: 30,
                               backgroundColor: '#EAEAEA',
                               },
                               row: {
                                alignItems: 'center',
                                backgroundColor: 'white',
                                flexDirection: 'row',
                                padding: 5,
                               },
                               profpic: {
                                width: 50,
                                height: 50,
                               },
                               title: {
                                fontSize: 20,
                                marginBottom: 8,
                                fontWeight: 'bold',
                               },
                               subtitle: {
                                fontSize: 16,
                                marginBottom: 8,
                               },
                               textcontainer: {
                                paddingLeft: 10,
                               },
                               blanktext: {
                                padding: 10,
                                fontSize: 20,
                               }
                               
                               
});
class ReactOC extends React.Component {
   
     constructor(props) {

        super(props);
         var ds = new ListView.DataSource({rowHasChanged: (row1,row2) => row1 !== row2,
               });
       this.onSearchChange =  this.onSearchChange.bind(this);
        this.state = {
        dataSource: ds,
         };
         
          console.log("Constructor!");
    }
    //
    //function(x, y) { 
    //  x++;
    //  y--;
    //  return x + y;
    //}
    
    //(x, y) => {x++; y--; return x+y}
    //
     componentWillMount () {
       console.log("componentWillMount!");
    }

    //
    //
    render () {

        console.log("Render!");
        if (this.state.dataSource.getRowCount() === 0) {
            console.log("YES");
           
        }

     var content = this.state.dataSource.getRowCount() === 0 ? <Text>
            Please enter a search term to see results.
        </Text> : <ListView
          ref='listview' 
          dataSource={this.state.dataSource} 
          renderRow={this.renderRow}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode='onDrag'
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={true}
        /> ;
        
        return (
        <View style ={styles.container}>
                <TextInput autoCapitalize='none' 
                autoCorrect={false} 
                placeholder='小丁丁在coding' 
                style={styles.searchBarInput} 
                onEndEditing={this.onSearchChange}/>
                <Text>
                HelloWorld
                </Text>
                <Text>
                程序员的情人节
                </Text>
                 <Text>
                This is my first react native project custom View
                
                </Text>
                <Text>
               第一个ReactNative 程序构建成功
                </Text>
                <Text>
            
                
                感谢 facebook 致自己
                </Text>
                <Image source={{uri:'http://ak1.polyvoreimg.com/cgi/img-buddy/id/19820417/size/s.jpg'}} style={styles.customing}>
                </Image>
                <Text>
               成功实现原生客户端无需频繁更新安装包就可以更新UI界面
                </Text>
                {content}
        </View>
        );
    }
    //
    //
//    getInitialState () {
//      return {
//        dataSource: new ListView.DataSource({
//          rowHasChanged: (row1,row2) => row1 !== row2,
//        }),
//      };
//
//    }
    //这里是es6 的语法 声名方法实现 无需使用冒号属性的方式
    //也无需在每个方法之间使用逗号分隔ß
    //
    onSearchChange (event: Object) {
         console.log("InputSearch!");
    var searchTerm = event.nativeEvent.text.toLowerCase();
    var queryURL = BASE_URL + encodeURIComponent(searchTerm);
       
    fetch(queryURL).then((response) => response.json())
        .then((responseData) => {
              
              console.log(responseData);
              
              if (responseData.items) {
            console.log("InputSearchBack!");
          
       this.setState({
      dataSource : this.state.dataSource.cloneWithRows(responseData.items)});
              }
              }).done();
    }
    //this.renderRow方法渲染每一条数据结果

     renderRow (repo: Object){
      return (
        <View>
           <View style = {styles.row}>
              <Image source={{uri : repo.owner.avatar_url }} style = {styles.profpic}/>
              <View style={styles.textcontainer}>
              <Text style={styles.title}>{repo.name}</Text>
              <Text style={styles.subtitle}>{repo.owner.login}</Text>
              </View>
             
              <View style={styles.cellBorder}/>
           </View>
        </View>
        );
     }

    
}

React.AppRegistry.registerComponent('ReactOC',() => ReactOC);
