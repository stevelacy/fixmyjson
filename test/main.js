var fs = require('fs');
var path = require('path');
var should = require('should');

var fixmyjson = require('../lib/fixmyjson');
var normalFixture = fs.readFileSync(path.resolve(__dirname, './fixtures/normal.json'));
var normalExpected = fs.readFileSync(path.resolve(__dirname, './expected/normal.json'), 'utf8');
var intentExpected = fs.readFileSync(path.resolve(__dirname, './expected/indent.json'), 'utf8');
var tabsExpected = fs.readFileSync(path.resolve(__dirname, './expected/tabs.json'), 'utf8');

describe('fixmyjson', function(){
  it('should clean and order json', function(done){
    fixmyjson(normalFixture, {}, function(data){
      data.should.equal(normalExpected);
      done();
    });
  });
  it('should indent with 4', function(done){
    fixmyjson(normalFixture, {indent: 4}, function(data){
      data.should.equal(intentExpected);
      done();
    });
  });
  it('should indent with tabs', function(done){
    fixmyjson(normalFixture, {indent: '\t'}, function(data){
      data.should.equal(tabsExpected);
      done();
    });
  });
});
