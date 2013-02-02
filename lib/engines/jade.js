var _ = require('underscore');
var Engine = require('./engine');

module.exports = _.inherit(Engine, {
  defaults: {
    type: 'jst',
    compileDebug: false
  },

  process: function (asset, cb) {
    try {
      var jade = require('jade');
      var ext = asset.ext();
      var options = this.options;
      var out = ext === 'jst' || ext === 'html' ? ext : options.type;
      var html = out === 'html';
      options = _.extend({filename: asset.abs, client: !html}, options);
      var template = jade.compile(asset.raw, options);
      asset.raw = html ? template() : template.toString();
      if (out !== ext) asset.exts.push(out);
      cb();
    } catch (er) {
      cb(er);
    }
  }
});