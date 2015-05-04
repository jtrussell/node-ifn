
var sh = require('shelljs')
  , gaze = require('gaze')
  , debounce = require('lodash.debounce');

module.exports = function(patterns, executable, opts) {
  var gazeOpts = {};

  if(opts.debounce) {
    gazeOpts.debounceDelay = opts.debounce;
  }

  gaze(patterns, gazeOpts, function(err, watcher) {
    if(err) {
      throw err;
    }

    this.on('all', function() {
      sh.exec(executable);
    });
  });
};
