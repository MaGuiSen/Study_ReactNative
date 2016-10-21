/**
 * Created by 1ping on 2016/10/19.
 */
"use strict";

var React = require("react"),
    {
        Dimensions,
        Alert,
        Text,
        View,
        Image,
        StyleSheet,
        RefreshControl,
        ToastAndroid,
        ScrollView
        } = require("react-native");
var sh = Dimensions.get('window').height,
    sw = Dimensions.get('window').width;
const SERVE_DETAIL = 0, HEALTH_PROFILE = 1, MSG_RECORD = 2;
export default class Login extends React.Component {
    _clickHeaderTool(a) {
        const { navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
        console.log(a)
        switch (a) {
            case SERVE_DETAIL:
                ToastAndroid.show("点击服务内容", ToastAndroid.SHORT);
                break;
            case HEALTH_PROFILE:
                ToastAndroid.show("点击健康档案", ToastAndroid.SHORT);
                break;
            case MSG_RECORD:
                ToastAndroid.show("点击消息记录", ToastAndroid.SHORT);
                break;
            default :
                break;
        }
    }

    _onRefresh() {
        ToastAndroid.show("刷新", ToastAndroid.SHORT);
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({
                isRefreshing: false
            });
        }, 5000);
    }
    constructor(props) {
        super(props);
        this.state = {  isRefreshing:false };
    }


    //getInitialState() {
    //    return {
    //        isRefreshing: false
    //    };
    //}

    render() {
        return (
            <ScrollView style={styles.container}  refreshControl={
                  <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    tintColor="#ff0000"
                    title="Loading..."
                    titleColor="#00ff00"
                    colors={['#ff0000', '#00ff00', '#0000ff']}
                    progressBackgroundColor="#ffff00"
                  />
                }>
                <View style={styles.headerLay}>
                    <Image style={styles.avatar}
                           source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                    <Text>小敏aaa</Text>
                    <View style={styles.headerTool}>
                        <Text style={styles.headerToolTxt}
                              onPress={this._clickHeaderTool.bind(this,SERVE_DETAIL)}>服务内容</Text>
                        <Text>|</Text>
                        <Text style={styles.headerToolTxt} onPress={this._clickHeaderTool.bind(this,HEALTH_PROFILE)}>健康档案</Text>
                        <Text>|</Text>
                        <Text style={styles.headerToolTxt}
                              onPress={this._clickHeaderTool.bind(this,MSG_RECORD)}>我的预告</Text>
                    </View>
                </View>
                <View style={[styles.serveLay,,{paddingTop:20}]}>
                    <View style={styles.serveItem}>
                        <Image style={styles.serveImg}
                               source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                        <Text style={styles.serveTxt}>图文咨询</Text>
                        <Text style={styles.serveNum}>不限</Text>
                    </View>
                    <View style={styles.serveItem}>
                        <Image style={styles.serveImg}
                               source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                        <Text style={styles.serveTxt}>图文咨询</Text>
                        <Text style={styles.serveNum}>不限</Text>
                    </View>
                    <View style={styles.serveItem}>
                        <Image style={styles.serveImg}
                               source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                        <Text style={styles.serveTxt}>图文咨询</Text>
                        <Text style={styles.serveNum}>不限</Text>
                    </View>
                </View>
                <View style={[styles.serveLay]}>
                    <View style={styles.serveItem}>
                        <Image style={styles.serveImg}
                               source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                        <Text style={styles.serveTxt}>图文咨询</Text>
                        <Text style={styles.serveNum}>不限</Text>
                    </View>
                    <View style={styles.serveItem}>
                        <Image style={styles.serveImg}
                               source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                        <Text style={styles.serveTxt}>图文咨询</Text>
                        <Text style={styles.serveNum}>不限</Text>
                    </View>
                    <View style={styles.serveItem}>
                        <Image style={styles.serveImg}
                               source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                        <Text style={styles.serveTxt}>图文咨询</Text>
                        <Text style={styles.serveNum}>不限</Text>
                    </View>
                </View>
                <View style={[styles.serveLay,{paddingBottom:20}]}>
                    <View style={styles.serveItem}>
                        <Image style={styles.serveImg}
                               source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                        <Text style={styles.serveTxt}>图文咨询</Text>
                        <Text style={styles.serveNum}></Text>
                    </View>
                    <View style={styles.serveItem}>
                        <Image style={styles.serveImg}
                               source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                        <Text style={styles.serveTxt}>图文咨询</Text>
                        <Text style={styles.serveNum}></Text>
                    </View>
                </View>
                <View style={styles.docLay}>
                    <Text style={styles.docLayTitle}>儿科专家</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.serveItem}>
                            <Image style={styles.docImg}
                                   source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                            <Text style={styles.docTxt}>系主任</Text>
                            <Text style={styles.docValue}>急症科</Text>
                        </View>
                        <View style={styles.serveItem}>
                            <Image style={styles.docImg}
                                   source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                            <Text style={styles.docTxt}>系主任</Text>
                            <Text style={styles.docValue}>急症科</Text>
                        </View>
                        <View style={styles.serveItem}>
                            <Image style={styles.docImg}
                                   source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                            <Text style={styles.docTxt}>系主任</Text>
                            <Text style={styles.docValue}>急症科</Text>
                        </View>
                        <View style={styles.serveItem}>
                            <Image style={styles.docImg}
                                   source={{uri: 'http://file.1ping.com/Public/app/images/screen/yao_banner.jpg'}}></Image>
                            <Text style={styles.docTxt}>系主任</Text>
                            <Text style={styles.docValue}>急症科</Text>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        );
    }
}


var styles = {
    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex
        flexDirection: 'row'
    },
    cell: {
        flex: 1,
        height: 50,
        backgroundColor: '#aaaaaa'
    },
    welcome: {
        backgroundColor: "red",
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    container: {
        backgroundColor: "#f2f2f2",
        flexDirection: "column"
    },
    headerLay: {
        height: 200,
        backgroundColor: "pink",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    headerTool: {
        flexDirection: "row",
        marginTop: 10
    },
    headerToolTxt: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    serveLay: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    serveItem: {
        width: sw / 3,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10
    },
    serveImg: {
        height: 45,
        width: 45,
    },
    serveTxt: {
        fontSize: 16,
        color: "#4d4d4d"
    },
    serveNum: {
        fontSize: 14,
        color: "#b3b3b3"
    },
    docLay: {
        marginBottom: 10,
        backgroundColor: "#ffffff",
        marginTop: 10,
    },
    docLayTitle: {
        height: 30,
        fontSize: 16,
        paddingTop: 4,
        color: "#b3b3b3",
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderColor: "#f2f2f2"
    },
    docLayContent: {},
    docImg: {
        height: 50,
        width: 50,
    },
    docTxt: {
        fontSize: 16,
        color: "#4d4d4d"
    },
    docValue: {
        fontSize: 14,
        color: "#b3b3b3"
    },
};
module.exports = Login;