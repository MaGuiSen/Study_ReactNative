/**
 * Created by 1ping on 2016/10/21.
 */
'use strict';
var React = require("react"),
    {
        Text,
        View,
        StyleSheet,
        } = require("react-native");

class MsgItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.txt}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        height:100,
        borderBottomWidth:1,
        borderBottomColor:"green"
    },
});

module .exports = MsgItem;