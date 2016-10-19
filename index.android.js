///**
// * Sample React Native App
// * https://github.com/facebook/react-native
// * @flow
// */
var React =  require('react'),
    { AppRegistry,Navigator} =  require('react-native')
    Start = require('./app/start');
export default class Root extends React.Component{
    _renderScene(route,navigator){
        if(route.component) {
            let Component = route.component;
            //这里将数据往下传
            return <Component {...route.params} navigator={navigator}/>
        }
    };
    _configureScene(){
      //跳转的动画
        return Navigator.SceneConfigs.PushFromRight;
    };
    render(){
        let defaultName = 'start',defaultComponent = Start;
        return(
            //指定了默认的页面，也就是启动app之后会看到的第一屏，需要两个参数，name跟component
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent,params:{}}}
                configureScene = {this._configureScene}
                renderScene={this._renderScene}
            />
        );
    }
}
AppRegistry.registerComponent('Eping', () => Root);
//
////const { AppRegistry } = require('react-native');
////var Mine = require('./app/mine');
////
////AppRegistry.registerComponent('Eping',() => Mine);
