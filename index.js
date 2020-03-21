const core = require('@actions/core');
const github = require('@actions/github');
var ip = require('ip');
var geoip = require('geoip-lite');
const publicIp = require('public-ip');
global.ip=""
global.ipinf=""
try {

  (async () => {
    // var ipinf = console.log(await publicIp.v4());
    if(ip = await publicIp.v4()){
      console.log("in")
      console.log(ip);
      console.log("last")
      let ips = geoip.lookup(ip);
      console.log(ips)
      ipinf = JSON.stringify(ips);
    console.log(ipinf)
    
    }

    

})();

const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    core.setOutput("triggered ip information:",ipinf)

} catch (error) {
  core.setFailed(error.message);
}
