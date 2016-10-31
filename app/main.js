/**
 * Created by 1ping on 2016/10/18.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    BackAndroid,
    Platform,
    ToastAndroid,
} from 'react-native';
var Mine = require('./mine');
var Home = require('./home');
var Lv = require('./listview');
var ViewPager = require('./viewpager');
//引入tabbar支持包
import TabNavigator from 'react-native-tab-navigator';

const TabNavigatorItem =TabNavigator.Item;

const TAB_NORMAL_1=require('../images/tabbar_1.png');
const TAB_NORMAL_2=require('../images/tabbar_2.png');
const TAB_NORMAL_3=require('../images/tabbar_3.png');
const TAB_NORMAL_4=require('../images/tabbar_4.png');

const TAB_PRESS_1=require('../images/tabbar_1_press.png');
const TAB_PRESS_2=require('../images/tabbar_2_press.png');
const TAB_PRESS_3=require('../images/tabbar_3_press.png');
const TAB_PRESS_4=require('../images/tabbar_4_press.png');

let Comp = Home;
var lastBackPressed = 0 ;
export default class Main extends Component {
    constructor(){
        super();
        this.state={
            selectedTab:'Home',
        }
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    onBackAndroid = () => {
        if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }
    /**
     tab点击方法
     **/
    onPress(tabName){
        if(tabName){
            this.setState(
                {
                    selectedTab:tabName,
                }
            );
        }
    }
    /**
     渲染每项
     **/
    renderTabView(title,tabName,tabContent,isBadge){
        var tabNomal;
        var tabPress;
        switch (tabName) {
            case 'Home':
                tabNomal=TAB_NORMAL_1;
                tabPress=TAB_PRESS_1;
                Comp = Home;
                break;
            case 'Video':
                tabNomal=TAB_NORMAL_2;
                tabPress=TAB_PRESS_2;
                Comp = Lv;
                break;
            case 'Follow':
                tabNomal=TAB_NORMAL_3;
                tabPress=TAB_PRESS_3;
                Comp = ViewPager;
                break;
            case 'Mine':
                tabNomal=TAB_NORMAL_4;
                tabPress=TAB_PRESS_4;
                Comp = Mine;
                break;
            default:
        }
        return(
            <TabNavigatorItem
                title={title}
                renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}
                renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
                selected={this.state.selectedTab===tabName}
                selectedTitleStyle={{color:'#f85959'}}
                onPress={()=>this.onPress(tabName)}
                renderBadge={()=>isBadge?<Text style={styles.badgeText}>15</Text>:null}
            >
                <Comp navigator={this.props.navigator}></Comp>
            </TabNavigatorItem>
        );
    }

    /**
     自定义tabbar
     **/
    tabBarView(){
        return (
            <TabNavigator tabBarStyle={styles.tab}>
                {this.renderTabView('头条','Home','头条板块',true)}
                {this.renderTabView('视频','Video','视频板块',true)}
                {this.renderTabView('关注','Follow','关注板块',false)}
                {this.renderTabView('我的','Mine','我的板块',false)}
            </TabNavigator>
        );
    }


    render() {
        var tabBarView=this.tabBarView();
        return (
            <View style={styles.container}>
                {tabBarView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    tab:{
        height: 52,
        alignItems:'center',
        backgroundColor:'#f4f5f6',
    },
    tabIcon:{
        width:25,
        height:25,
    },
    badgeText:{
        padding:2,
        marginTop:8,
        borderRadius:8,
        backgroundColor:'black',
        color:'#fff',
        fontSize:8,
    }
});
module.exports = Main;