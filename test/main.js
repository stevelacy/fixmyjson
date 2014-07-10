var fs = require('fs');
var path = require('path');
var should = require('should');

var fixmyjson = require('../lib/fixmyjson');
var normalFixture = fs.readFileSync(path.resolve(__dirname, './fixtures/normal.json'));
var normalExpected = fs.readFileSync(path.resolve(__dirname, './expected/normal.json'), 'utf8');
var optionsExpected = fs.readFileSync(path.resolve(__dirname, './expected/options.json'), 'utf8');

describe('fixmyjson', function(){
  it('should clean and order json', function(done){
    fixmyjson(normalFixture, {}, function(data){
      data.should.equal(normalExpected);
      done();
    });
  });
  it('should use options', function(done){
    fixmyjson(normalFixture, {indent: 4}, function(data){
      data.should.equal(optionsExpected);
      done();
    });
  });
});
