var events = require('events')

/**
 * Expose Sanitize wrapper for plugin support
 */

module.exports = function(){
  return function(editable){
    return new Sanitize(editable);
  }
}


/**
 * expose Sanitize
 */

module.exports.Sanitize = Sanitize;


/**
 * Initializes Sanitize with `editable`.
 *
 * @param {Editable} editable
 * @return {self}
 * @api private
 */

function Sanitize(editable){
  var el = this.el = editable.el;
  editable.sanitize = this;

  this.events = events(el, this);
  this.events.bind('paste', 'clean');
  this.events.bind('drop', 'clean');
  this.events.bind('keydown', 'preventEnter');

  this.editable = editable;
  editable.on('html', this.clean.bind(this));
  editable.once('unbind', this.events.unbind.bind(this.events));
}


/**
 * Removes any html by setting the text
 * content with the text content. Bit lame.
 *
 * @api private
 */

Sanitize.prototype.clean = function(){
  var edit = this.editable

  setTimeout(function(){
    edit.text(edit.text());
  }, 0);
}


/**
 * Prevents Default on enter key.
 *
 * @param {Event} e
 * @api private
 */

Sanitize.prototype.preventEnter = function(e){
  var key = e.keyCode;

  if (key == 13) {
    e.preventDefault();
    return false
  }
}