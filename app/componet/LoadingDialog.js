/**
 * Created by 1ping on 2016/11/1.
 */

var React = require("react");
var {
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    ActivityIndicator,
    TouchableWithoutFeedback,
    Platform,
    BackAndroid,
    ToastAndroid
}=require("react-native"),
    sw = Dimensions.get('window').width,
    sh = Dimensions.get('window').height;

module.exports=(React.createClass(
    {
        componentWillMount() {
            if (Platform.OS === 'android') {
                BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
            }
        },
        componentWillUnmount() {
            if (Platform.OS === 'android') {
                BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
            }
        },
        onBackAndroid(){
            if(this.props.cancelable){
                this.props.clickOuter();
                ToastAndroid.show('关闭dialog', ToastAndroid.SHORT);
            }else{
            }
            return true;
        },
        //开始的时候设定数据使用
        getInitialState: function () {
            return {
            };
        },
        render: function () {
            return (
                <TouchableWithoutFeedback  onPress={this.clickOuter} >
                    <View style={styles.outer} >
                        <TouchableWithoutFeedback  onPress={this.clickMain} >
                            <View style={styles.content} >
                                <ActivityIndicator
                                    animating={true}
                                    style={{height: 20}}
                                    size="small"
                                />
                                <Text style={{color:"#fff",fontSize:14, opacity:1,}}>{this.props.title ? this.props.title :"加载中"}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            )
        },
        clickMain:function(){

        },
        clickOuter:function(){
            if(this.props.cancelable){
                this.props.clickOuter();
            }else{

            }
        }
    }
));

var styles={
    outer:{
        position:"absolute",
        left:0,
        top:0,
        height:sh,
        width:sw,
        zIndex:1000,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    content:{
        borderRadius: 4,
        display:"flex",
        height:100,
        width:100,
        backgroundColor:"#808080",
        opacity:1,
        justifyContent:"center",
        alignItems:"center"
    }
};
