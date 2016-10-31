/**
 * Created by 1ping on 2016/10/31.
 */
var {Dimensions,} = require("react-native"),
    sh = Dimensions.get('window').height,
    sw = Dimensions.get('window').width;

module.exports = {
    SW:sw,
    SH:sh,
}