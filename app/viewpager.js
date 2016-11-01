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
var ScrollableTabView = require('react-native-scrollable-tab-view');
var {DefaultTabBar,ScrollableTabBar} = ScrollableTabView;


var Mine = require('./mine');
var Home = require('./home');
var Lv = require('./listview');

export default class ViewPager extends React.Component {
    render() {
        const { navigator} = this.props;
        return (
            <ScrollableTabView
                tabBarUnderlineColor='#FF0000'
                tabBarBackgroundColor='#FFFFFF'
                tabBarActiveTextColor='#9B30FF'
                tabBarInactiveTextColor='#7A67EE'
                tabBarTextStyle={{fontSize: 12}}
                renderTabBar={() => <ScrollableTabBar/>}>
                <Text tabLabel='Tab1'/>
                <Text style={{backgroundColor:"red",height:2000,width:100}} tabLabel='Tab2'/>
                <Mine navigator={navigator} tabLabel='Mine'/>
                <Home navigator={navigator}  tabLabel='Home'/>
                <Lv  navigator={navigator} tabLabel='Lv'/>
            </ScrollableTabView>
        );
    }
}



module.exports = ViewPager;