var UCIEngine = require('./engine').UCIEngine,
  util = require('util');

var START_POS = 'rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w - - 0 1';

var test_positions = [
'4C4/4a4/b2ank2b/9/9/1RNR1crC1/3r1p3/3cKA3/4A4/4n4 w - - 0 1',
'9/2Cca4/3k1C3/4P1p2/4N1b2/4R1r2/4c1n2/3p1n3/2rNK4/9 w - - 0 1',
'9/4a4/3k1a3/2R3r2/1N5n1/C7c/1N5n1/2R3r2/3p1p3/4K4 w - - 0 1',
'9/4P4/2NakaR2/3P1P3/2pP1cb2/3r1c3/1rPNppCn1/3K1A3/2p3n2/9 w - - 0 1',
'9/9/4Nk3/3c2p2/3r2P2/3p2B2/3p2r2/4KC3/9/9 w - - 0 1',
'9/9/3k1N3/9/1C5N1/9/1n5r1/9/3p1K3/9 w - - 0 1',
'9/9/5k1N1/4p1P1p/3P1C1C1/2N1r1r2/9/3ABK3/2ncpp3/1pBAc4 w - - 0 1',
'1nb1ka3/4a4/4c4/2p1C4/9/3Rcr3/P8/n3C4/4Apr2/4KA3 w - - 0 1',
'9/3Rak3/3a1n3/1PpP1PPR1/1P5n1/1rBp1pcp1/3C1p3/3Kcr3/9/9 w - - 0 1',
'1PP1kab2/1R2a4/4b3R/4C4/1C7/r8/9/2n6/3p1r3/4K4 w - - 0 1',
'3k5/5P3/3a1r3/9/9/9/9/2R6/7p1/4K4 w - - 0 1',
'3aka3/3P5/7R1/4r2C1/6C2/6R2/9/3p1n3/4p4/3K5 w - - 0 1',
'4ka3/2R1a4/7N1/9/9/9/4p4/2C6/2p1p1r2/1R3K3 w - - 0 1'];

var eleeye = new UCIEngine('eleeye.exe', {
  usemillisec: false,
  batch: true,
  debug: true,
  ponder: false,});

eleeye.evaluate_done(function (pos) {
	util.log('result:' + pos.s + '\t' + pos.m);
});

eleeye.launch();
eleeye.evaluate(START_POS);

test_positions.forEach(function(pos) {
  eleeye.evaluate(pos);
});

