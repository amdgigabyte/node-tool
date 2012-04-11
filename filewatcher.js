// vim: set et sw=4 ts=4 sts=4 fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * filename.js
 *
 * @author qiaofu<amdgigabyte#gmail.com>
 * @date
 * @link   http://www.zipeng.info/
 */

// get the param from command line
//
var filename = process.argv[2];
var callback = process.argv[3];
var pwd = process.cwd();
if (!callback) {
    console && console.log('nothing to do');
    callback = function() {
        console.log('changed');
    }
}
var fs = require('fs');

filename = pwd + '/' + filename;

fs.watchFile(filename, function(prev, cur) {
    if (prev.mtime != cur.mtime) {
        callback();
    }
});
