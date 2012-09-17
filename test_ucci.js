var ucci = require('./ucci').ucci,
    util = require('util');

var START_POS = 'rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w - - 0 1';


var eleeye = new ucci('eleeye.exe', {
  usemillisec: false,
  batch: true,
  debug: true,
  ponder: false,
  }, false);

eleeye.on('engineError', function(err) { 
  util.log(err);
});

eleeye.on('engineState', function(newstate) {
  util.log(newstate);
});

eleeye.on('commandSent', function(command) {
  util.log(command);
});

eleeye.on('ucciok', function(data) {
  util.log(data);
  // print engine id
  util.log('engine id: \n' + util.inspect(eleeye.id, false, null));
  // print engine defaults
  util.log('engine defaults: \n' + util.inspect(eleeye.defaults, false, null));
  // test thinking
  eleeye.position(START_POS);
  eleeye.go('ponder', 'depth 6');
});

eleeye.on('bye', function(data) {
  util.log(data);
});

eleeye.on('id', function(data) {
  util.log(data);
});

eleeye.on('option', function(data) {
  util.log(data);
});

eleeye.on('bestmove', function(data) {
  util.log(data);
});

eleeye.loadEngine();
eleeye.boot();


