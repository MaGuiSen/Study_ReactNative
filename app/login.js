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
        TextInput
        } = require("react-native");
var ScreenUtil = require("./util/ScreenUtil");
var ColorUtil = require("./util/ColorUtil");
const SERVE_DETAIL = 0, HEALTH_PROFILE = 1, MSG_RECORD = 2;
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            pwd:"",
            canSeePwd:true
        }
    }

    render() {
        let canSeePwdIcon = this.state.canSeePwd ? 'http://res.dyhjw.com/ueditor/php/upload/image/20161027/1477530185494247.jpg': 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg';
        return (
            <ScrollView>
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
                        <View style={styles.serveItem} onPress={this._otherLogin.bind(this,0)}>
                            <Image style={styles.serveImg}
                                   source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                            <Text style={styles.serveTxt}>QQ</Text>
                        </View>
                        <View style={styles.serveItem} onPress={this._otherLogin.bind(this,1)}>
                            <Image style={styles.serveImg}
                                   source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                            <Text style={styles.serveTxt}>微信</Text>
                        </View>
                        <View style={styles.serveItem} onPress={this._otherLogin.bind(this,2)}>
                            <Image style={styles.serveImg}
                                   source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                            <Text style={styles.serveTxt}>新浪</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }

    _otherLogin(which){
        ToastAndroid.show("_otherLogin"+which, ToastAndroid.SHORT);
    }

    _commit(){
        ToastAndroid.show("_commit", ToastAndroid.SHORT);
    }

    _registe(){
        ToastAndroid.show("_registe", ToastAndroid.SHORT);
    }

    _switchCanSeePwd() {
        this.setState({
                canSeePwd: !this.state.canSeePwd
            }
        );
    }
}


var styles = {
    container: {
        backgroundColor: ColorUtil.bg_color,
        display: "flex",
        alignItems: "center",
    },
    avatar: {
        marginTop:50,
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    inputLay: {
        width: ScreenUtil.SW - 80,
        height: 44,
        backgroundColor: "white",
        borderColor: ColorUtil.bg_color,
        paddingLeft:10,
        paddingRight:10,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        marginTop:10,
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
        flex:1,
        backgroundColor:"white",
        marginLeft:10,
        height: 40,
        display: "block",
        borderBottom:"none",
        fontSize:16,
        lineHeight:40,
    },
    btnLay:{
        width: ScreenUtil.SW - 80,
        display:"flex",
        flexDirection:"row",
        marginTop:20,
        marginBottom:20
    },
    commit:{
        backgroundColor:"blue",
        borderRadius: 4,
        flex:1,
        fontSize:16,
        color:"white",
        paddingTop:10,
        paddingBottom:10,
        textAlign:"center",
        marginRight:10,
    },
    registe:{
        backgroundColor:"purple",
        borderRadius: 4,
        flex:1,
        fontSize:16,
        color:"white",
        paddingTop:10,
        paddingBottom:10,
        textAlign:"center",
        marginLeft:10,
    },
    other_title:{
        color:"white",
        fontSize:14,
        marginTop:10,
    },
    serveLay: {
        marginTop:20,
        display:"flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    serveItem: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10
    },
    serveImg: {
        height: 40,
        width: 40,
    },
    serveTxt: {
        marginTop:10,
        fontSize: 14,
        color: "white"
    },
};
module.exports = Login;