/**
 * Created by 1ping on 2016/10/18.
 */

var React = require("react");
var {
    Text,
    Dimensions,
    StyleSheet,
    Image
    } =  require("react-native");
var Main = require('./main');
var bannerHeight = Dimensions.get('window').height,
    bannerWidth = Dimensions.get('window').width;
var styles = StyleSheet.create({
    banner: {
        height: bannerHeight,
        width: bannerWidth
    }
});

var start_logo =  require('../resources/image/app_logo_start.png');

export default class Start extends React.Component {
    render() {
        console.log(this);
        return (
            <Image source={start_logo}
                   style={styles.banner}/>
        );
    }

    componentDidMount(){
        var self = this;
        this.timer = setTimeout(
            () => {
                const { navigator} = self.props;
                console.log(self);
                if(navigator){
                    console.log('dhahhhsa');
                    navigator.push({
                        name:'Main',
                        component:Main,
                        params:{}
                    })
                }
            },
            500
        );
    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
}
module.exports = Start;