/**
 * Created by 1ping on 2016/10/21.
 */
'use strict';
var React = require("react"),
    {
        Image,
        Text,
        View,
        StyleSheet,
        TouchableWithoutFeedback,
        ToastAndroid,
        } = require("react-native");

var Registe = require("../registe")
class MsgItem extends React.Component{
    constructor(props){
        super(props);
    }

    clickItem(text){
        ToastAndroid.show("clickItem" + text, ToastAndroid.SHORT);
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'Registe',
                component:Registe,
                params:{}
            })
        }
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={this.clickItem.bind(this,this.props.txt)}>
                <View style={styles.container}>
                    <View style={styles.layLeft}>
                        <Image style={styles.avatar} source={{uri:"http://file.1ping.com/Public/app/images/screen/yao_banner.jpg"}}></Image>
                        <Text style={styles.really}>资质认证</Text>
                    </View>
                    <View style={styles.layRight}>
                        <Text style={styles.name}>{this.props.txt}</Text>
                        <Text style={styles.level}>本科 大专</Text>
                        <Text style={styles.detail} numberOfLines ={2}>
                            会一些生 会一些生 会一些生 会一些生 会一些生
                            会一些生 会一些生 会一些生 会一些生 会一些生
                            会一些生 会一些生 会一些生 会一些生 会一些生
                            会一些生 会一些生 会一些生 会一些生 会一些生
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


var styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        marginBottom:5,
        height:100,
        flexDirection:"row",
        borderWidth:1,
        borderColor:"#f2f2f2"
    },
    layLeft:{
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:100,
        flexDirection:"column"
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:40,
    },
    really:{
        marginTop:10,
        width:66,
        textAlign:"center",
        fontSize:14,
        color:"#b3b3b3",
        borderWidth:1,
        borderColor:"#f2f2f2"
    },
    layRight:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        paddingRight:10,
    },
    name:{
        fontSize:16,
        color:"orange",
    },
    level:{
        fontSize:14,
        color:"#b3b3b3",
    },
    detail:{
        fontSize:14,
        color:"#b3b3b3",
    },


});

module .exports = MsgItem;