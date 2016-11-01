/**
 * Created by 1ping on 2016/10/18.
 */

'use strict';
const React = require('react'),ReactNative = require('react-native');
var HttpExecute = require("./http/HttpExecute");
var {
    Dimensions,
        View,
        Text,
        Image,
        ListView,
        RefreshControl,
} = ReactNative,
    ww = Dimensions.get('window').width,  //设备宽度
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  // ListView 数据需要


var IndexView = React.createClass({
    //render 之前启用
    componentDidMount:function () {
        this._getData();
    },
    //开始的时候设定数据使用
    getInitialState: function () {
        return {
            indexData: ds.cloneWithRows([0]),
            isRefreshing: false
        };
    },
    _getData(){
        //HttpExecute.getDynamicHome({},this._getSuccess,this._getFail)
    },
    _getSuccess(json){
        this.setState({
            isRefreshing: false,
            indexData: ds.cloneWithRows(json.Data)
        });
        console.log(json.Data);
    },
    _getFail(msg){
        this.setState({
            isRefreshing: false,
        });
        console.error(msg);
    },
    //循环布局
    _row(row){
        let rowWidth = parseInt(row.width),
            rowHeight = parseInt(row.height),
            bi = ww / rowWidth;

        if (row.type == 'model_horizontal') {
            for (let col of row.col) {
                col.bi = bi;
            }
            return (
                <View style={{width:ww,height:rowHeight * bi}}>
                    <ListView
                        dataSource={ds.cloneWithRows(row.col)}
                        renderRow={this._colHorizontal}
                        horizontal={true}
                    />
                </View>
            );
        } else if (row.type == 'model_space') {
            return (<View style={{width:ww,height:rowHeight}} ></View>);
        } else if (row.type == 'model_title') {
            return (
                <View style={{width:ww,height:30,backgroundColor:'#ffffff'}} >
                    <Text style={{padding:10}}>{row.col.title}</Text>
                </View>
            );
        } else {
            return null;
        }

    },
    _colHorizontal(col){
        return (
            <Image source={{uri:col.image_url_3x}} style={{width: col.bi * col.width,height:col.bi * col.height}}/>
        );
    },
    _onRefresh() {
        this.setState({isRefreshing: true});
        this. _getData();
    },
    render: function () {
        return (
            <ListView
                dataSource={this.state.indexData}
                renderRow={this._row}
                onEndReached={this._onEndReached} //到达底部需要设置则个
                pageSize={3}  //??
                initialListSize ={3}  //??  每帧渲染几条
                onEndReachedThreshold={10} // 设置10px 需要设置，才能正常触发到达底部
                refreshControl={
                <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh}
                    tintColor="#ff0000"
                    title="Loading..."
                    titleColor="#00ff00"
                    colors={['#ff0000', '#00ff00', '#0000ff']}
                    progressBackgroundColor="#ffff00"
            />}
            />
        );
    }
});
module.exports = IndexView;