// test/env-1/mustache-default/a.mustache
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('mustache-default/a', ['jade', 'mustache', 'underscore'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jade'), require('mustache'), require('underscore'));
  } else {
    root['mustache-default/a'] = factory(root['jade'], root['Mustache'], root['_']);
  }
})(this, function (jade, Mustache, _) {
var source = "<h1>hello {{{name}}}</h1>\n";
var fn = function (data, partials) {
  return Mustache.render(source, data, partials);
};
fn.source = source;
return fn;
});
