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
var Registe = require("./registe")
export default class Login extends React.Component {
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
        ToastAndroid.show("login——onBackAndroid", ToastAndroid.SHORT);
        ////往上一层退
        //const { navigator} = this.props;
        //if (navigator) {
        //    navigator.pop()
        //}
        //return true;
        return false;
    }
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            pwd: "",
            canSeePwd: true,
            showLoading:false,
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
                    <View style={styles.btnLay}>
                        <Text style={styles.commit} onPress={this._commit.bind(this)}>登陆</Text>
                        <Text style={styles.registe} onPress={this._registe.bind(this)}>注册</Text>
                    </View>
                    <Text style={styles.other_title}>------其他登陆方式------</Text>
                    <View style={styles.serveLay}>
                        <TouchableWithoutFeedback onPress={this._otherLogin.bind(this,0)} >
                            <View style={styles.serveItem}>
                                <Image style={styles.serveImg}
                                       source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                                <Text style={styles.serveTxt}>QQ</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this._otherLogin.bind(this,1)} >
                            <View style={styles.serveItem}>
                                <Image style={styles.serveImg}
                                       source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                                <Text style={styles.serveTxt}>微信</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this._otherLogin.bind(this,2)} >
                            <View style={styles.serveItem}>
                                <Image style={styles.serveImg}
                                       source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                                <Text style={styles.serveTxt}>新浪</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <Text style={styles.other_title} onPress={this._forget.bind(this)}>忘记密码</Text>
                    {
                        !this.state.showLoading ? (
                            null
                        ) : (
                            <LoadingDialog
                                title="登陆中"
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

    _registe() {
        ToastAndroid.show("_registe", ToastAndroid.SHORT);
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'Registe',
                component:Registe,
                params:{}
            })
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
    registe: {
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
module.exports = Login;