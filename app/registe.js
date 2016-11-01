/**
 * Created by 1ping on 2016/10/19.
 */
"use strict";

var React = require("react"),
    {
        Alert,
        Text,
        View,
        Image,
        StyleSheet,
        RefreshControl,
        ToastAndroid,
        ScrollView,
        TouchableHighlight,
        TextInput,
        TouchableWithoutFeedback,
        BackAndroid,
        Platform
        } = require("react-native");
var ScreenUtil = require("./util/ScreenUtil");
var ColorUtil = require("./util/color");
var imageFile = require("../images/tabbar_2_press.png")
var LoadingDialog = require("./componet/LoadingDialog")
var timeCount = 5;
var timer  = null;
export default class Com extends React.Component {
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        }
    }
    onBackAndroid(){
        //往上一层退
        const { navigator} = this.props;
        if (navigator) {
            navigator.pop()
        }
        return true;
    }
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            pwd: "",
            canSeePwd: true,
            showLoading:false,
            txtVcode:"获取二维码"
        }
    }

    render() {
        let canSeePwdIcon = this.state.canSeePwd ? 'http://res.dyhjw.com/ueditor/php/upload/image/20161027/1477530185494247.jpg' : 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg';
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <Image style={styles.avatar}
                           source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                    <View style={styles.inputLay}>
                        <Image style={styles.icon_input_l}
                               source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                        <TextInput style={styles.txtInput}
                                   underlineColorAndroid={'#ffffff'}
                                   placeholder="用户名"
                                   numberOfLines={1}
                                   autoFocus={false}
                                   onChangeText={(userName) => this.setState({userName})}
                                   value={this.state.userName}/>
                    </View>
                    <View style={styles.inputLay}>
                        <Image style={styles.icon_input_l}
                               source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                        <TextInput style={styles.txtInput}
                                   underlineColorAndroid={'#ffffff'}
                                   placeholder="密码"
                                   numberOfLines={1}
                                   autoFocus={false}
                                   secureTextEntry={!this.state.canSeePwd}
                                   onChangeText={(pwd) => this.setState({pwd})}
                                   value={this.state.pwd}/>
                        <TouchableHighlight onPress={this._switchCanSeePwd.bind(this)}>
                            <Image style={styles.icon_input_r} source={{uri:canSeePwdIcon}}></Image>
                        </TouchableHighlight>
                    </View>
                    <View style={[styles.inputLay,{ paddingRight: 0,}]}>
                        <TextInput style={styles.txtInput}
                                   underlineColorAndroid={'#ffffff'}
                                   placeholder="验证码"
                                   numberOfLines={1}
                                   autoFocus={false}
                                   secureTextEntry={!this.state.canSeePwd}
                                   onChangeText={(pwd) => this.setState({pwd})}
                                   value={this.state.pwd}/>
                        <Text style={styles.btnVcode} onPress={this._getVcode.bind(this)}>{this.state.txtVcode}</Text>
                    </View>
                    <View style={styles.btnLay}>
                        <Text style={styles.commit} onPress={this._commit.bind(this)}>注册</Text>
                        <Text style={styles.cancel} onPress={this._cancel.bind(this)}>取消</Text>
                    </View>
                    {
                        !this.state.showLoading ? (
                            null
                        ) : (
                            <LoadingDialog
                                title="注册中"
                                cancelable = {true}
                                clickOuter={()=>{
                                    ToastAndroid.show("clickOuter", ToastAndroid.SHORT);
                                    this.setState({
                                        showLoading:false
                                    })
                                }
                            }/>
                        )
                    }
                </View>
            </ScrollView>
        );
     }

    _getVcode(){
        //实现倒记时
        var that = this;
        if(!timer) {
            ToastAndroid.show("5秒后可以重发" + "", ToastAndroid.SHORT);
            timer = setInterval(()=> {
                if (timeCount <= 0) {
                    that.setState({
                        txtVcode:"获取二维码"
                    })
                    clearInterval(timer);
                    timer = null;
                    timeCount = 5;
                    return;
                }
                that.setState({
                    txtVcode: timeCount + "秒"
                })
                timeCount--;
            }, 1000);
        }
        ToastAndroid.show(timeCount+"秒后重发" + "", ToastAndroid.SHORT);
    }

    _forget(){
        ToastAndroid.show("_forget" + "", ToastAndroid.SHORT);
    }

    _otherLogin(which) {
        ToastAndroid.show("_otherLogin" + which, ToastAndroid.SHORT);
    }

    _commit() {
        ToastAndroid.show("_commit", ToastAndroid.SHORT);
        this.setState({
            showLoading:!this.state.showLoading
        });
    }

    _cancel() {
        ToastAndroid.show("取消", ToastAndroid.SHORT);
        const { navigator} = this.props;
        if (navigator) {
            navigator.pop()
        }
    }

    _switchCanSeePwd() {
        this.setState({
                canSeePwd: !this.state.canSeePwd
            }
        );
    }
}


var styles = {
    scroll:{
        backgroundColor:"red",
        minHeight: ScreenUtil.SH,
    },
    container: {
        padding: 0,
        minHeight: ScreenUtil.SH,
        backgroundColor: ColorUtil.bg_color,
        display: "flex",
        alignItems: "center",
    },
    avatar: {
        marginTop: 50,
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    inputLay: {
        width: ScreenUtil.SW - 80,
        height: 44,
        backgroundColor: "white",
        borderColor: ColorUtil.bg_color,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    icon_input_l: {
        height: 24,
        width: 24,
    },
    icon_input_r: {
        height: 24,
        width: 24,
    },
    txtInput: {
        flex: 1,
        backgroundColor: "white",
        marginLeft: 10,
        height: 40,
        fontSize: 16,
        lineHeight: 40,
    },
    btnVcode:{
        textAlign:"center",
        lineHeight:33,
        height:44,
        width:88,
        fontSize:14,
        color:"white",
        backgroundColor:"orange",
    },
    btnLay: {
        width: ScreenUtil.SW - 80,
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20
    },
    commit: {
        backgroundColor: "blue",
        borderRadius: 4,
        flex: 1,
        fontSize: 16,
        color: "white",
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
        marginRight: 10,
    },
    cancel: {
        backgroundColor: "purple",
        borderRadius: 4,
        flex: 1,
        fontSize: 16,
        color: "white",
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
        marginLeft: 10,
    },
    other_title: {
        color: "white",
        fontSize: 14,
        marginTop: 10,
    },
    serveLay: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    serveItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10
    },
    serveImg: {
        height: 40,
        width: 40,
    },
    serveTxt: {
        marginTop: 10,
        fontSize: 14,
        color: "white"
    },
    forget_title: {
        color: "white",
        fontSize: 16,
    },
};
module.exports = Com;