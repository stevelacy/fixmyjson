var fs = require('fs');
var path = require('path');
var beautifyJson = require('js-beautify');
var argv = process.argv.slice(2);

module.exports = function(original, options, cb){

  original = String(original);
  if (!options) options = {};
  if (!options.indent_size) options.indent_size = 2;
  if (!options.wrap_line_length) options.wrap_line_length = 80;

  try{
    var clean = beautifyJson(original, options);
    cb(clean);
  }
  catch(e){
    console.log("Error: ", e);
  }
};
module.exports.cli = function(original, options){
  if (!options) options = {};
  if (!options.indent_size) options.indent_size = 2;
  if (!options.wrap_line_length) options.wrap_line_length = 80;

  original.forEach(function(v, k){

    try{
      var json = fs.readFileSync(v, 'utf8');
      var clean = beautifyJson(json, options);
      fs.writeFile(String(v), clean, function(err){
        if (err) console.log("error " + err);
        console.log("Fixed: " + String(v));
      });
    }
    catch(e){
      console.log("Error: ", e);
    }
  });
};
