var fs = require('fs');
var path = require('path');
var argv = process.argv.slice(2);

module.exports = function(original, options, cb){

  json = String(original);
  if (!options) options = {};
  if (!options.indent) options.indent = 2;

  try{
    var clean = JSON.stringify(JSON.parse(json, null, options.indent), null, options.indent);
    cb(clean);
  }
  catch(e){
    return console.log("Error: ", e);
  }
};
module.exports.cli = function(original, options){
  if (!options) options = {};
  if (!options.indent) options.indent = 2;

  original.forEach(function(v, k){

    try{
      var json = fs.readFileSync(v, 'utf8');
      var clean = JSON.stringify(JSON.parse(json, null, options.indent), null, options.indent);
      fs.writeFile(String(v), clean, function(err){
        if (err) return console.log("error " + err);
        console.log("Fixed: " + String(v));
      });
    }
    catch(e){
      return console.log("Error: ", e);
    }
  });
};
