const core = require('@actions/core');
const github = require('@actions/github');
var ip = require('ip');
var geoip = require('geoip-lite');

var ip = ip.address()
var ipinf = geoip.lookup(ip);
try {
  // `who-to-greet` input defined in action metadata file
  // const nameToGreet = core.getInput('who-to-greet');
  // console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("triggered ip information:",ipinf)
  // Get the JSON webhook payload for the event that triggered the workflow
  
} catch (error) {
  core.setFailed(error.message);
}
