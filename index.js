const core = require('@actions/core');
const github = require('@actions/github');
var ip = require('ip');
var geoip = require('geoip-lite');
const publicIp = require('public-ip');
const speedTest = require('speedtest-net');
global.ip=""
global.ipin=""
const { exec } = require("child_process");
exec("npm install --global speedtest-net", (error, stdout, stderr) => {
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
});

exec("speedtest-net --accept-license", (error, stdout, stderr) => {
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
});


try {

  (async () => {
    // var ipinf = console.log(await publicIp.v4());
    if(ip = await publicIp.v4()){
      
      console.log("IP address:",ip);

      let ips = geoip.lookup(ip);
      // console.log(ips)
      ipin = JSON.stringify(ips);
      console.log(ips)
      const ipinf = ipin
// console.log(ipinf)
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // core.setOutput("ipinf",ipinf);
    
    }

    

})();

(async () => {
  try {
    console.log(await speedTest(acceptLicense=true));
  } catch (err) {
    console.log(err.message);
  } finally {
    process.exit(0);
  }
})();


} catch (error) {
  core.setFailed(error.message);
}


