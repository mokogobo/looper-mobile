cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rjfun.cordova.httpd/www/CorHttpd.js",
        "id": "com.rjfun.cordova.httpd.CorHttpd",
        "clobbers": [
            "cordova.plugins.CorHttpd"
        ]
    },
    {
        "file": "plugins/edu.uic.travelmidwest.cordova.udptransmit/www/udptransmit.js",
        "id": "edu.uic.travelmidwest.cordova.udptransmit.udptransmit",
        "merges": [
            "udptransmit"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.rjfun.cordova.httpd": "0.9.2",
    "edu.uic.travelmidwest.cordova.udptransmit": "0.0.1",
    "org.apache.cordova.device-motion": "0.2.10"
}
// BOTTOM OF METADATA
});