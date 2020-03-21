const core = require('@actions/core');
const github = require('@actions/github');
var ip = require('ip');
var geoip = require('geoip-lite');
const publicIp = require('public-ip');
global.ip=""
global.ipin=""
try {

  (async () => {
    // var ipinf = console.log(await publicIp.v4());
    if(ip = await publicIp.v4()){
      
      console.log("IP address:",ip);

      let ips = geoip.lookup(ip);
      // console.log(ips)
      ipin = JSON.stringify(ips);
      console.log(ipin)
      const ipinf = ipin
// console.log(ipinf)
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    core.setOutput("ipinf",ipinf)
    
    }

    

})();


} catch (error) {
  core.setFailed(error.message);
}
