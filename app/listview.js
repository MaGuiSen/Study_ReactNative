/**
 * Created by 1ping on 2016/10/18.
 */

'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
    StyleSheet,
    RefreshControl,
    ListView,
    View,
    ToastAndroid,
    } = ReactNative;

var MsgItem = require("./adapter/MsgItem");
var HttpExecute = require("./http/HttpExecute");
const styles = StyleSheet.create({

});

class Lv extends React.Component {
    constructor(props){
        super(props);
        var datas = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
        this.state = {
            isRefreshing: false,
            dataSource:datas.cloneWithRows(["row 1","row 2" , "row 3", "row 3", "row 3", "row 3", "row 3", "row 3", "row 3", "row 3"])
        };
    }

    _onEndReached(){
        ToastAndroid.show("到达底部", ToastAndroid.SHORT);
    }

    render() {
        HttpExecute.getDynamicHome({},function(json){
           console.log(json.Data);
        });
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow = {this._renderRow}
                onEndReached={this._onEndReached} //到达底部需要设置则个
                pageSize={3}  //??
                initialListSize ={3}  //??  每帧渲染几条
                onEndReachedThreshold={10} // 设置10px 需要设置，才能正常触发到达底部
                refreshControl={
                <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    tintColor="#ff0000"
                    title="Loading..."
                    titleColor="#00ff00"
                    colors={['#ff0000', '#00ff00', '#0000ff']}
                    progressBackgroundColor="#ffff00"
            />}></ListView>
        );
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

     _renderRow(rowData) {
       return (<MsgItem txt={rowData}></MsgItem>);
    }
}
module.exports = Lv;