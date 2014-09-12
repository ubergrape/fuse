var constructorApply = require('constructor-apply');
var indexof = require('indexof');
var slice = [].slice;

module.exports = Fuse;

/**
 * Fuses multiple objects into one to allow calling methods on all of them simultaneously.
 *
 * @param {Object} objN
 * @return {Fuse}
 */
function Fuse() {
	if (!(this instanceof Fuse)) return constructorApply(Fuse, arguments);
	this.objs = [];
	for (var i = 0, l = arguments.length; i < l; i++) this.add(arguments[i]);
}

var proto = Fuse.prototype;

proto.add = function (obj) {
	if (!~indexof(this.objs, obj)) this.objs.push(obj);
};

proto.remove = function (obj) {
	var index = indexof(this.objs, obj);
	if (~index) this.objs.splice(index, 1);
};

proto.has = function (obj) {
	return !!~indexof(this.objs, obj);
};

proto.call = function (method) {
	this.apply(method, slice.call(arguments, 1));
};

proto.apply = function (method, args) {
	for (var i = 0, l = this.objs.length; i < l; i++)
		this.objs[i][method].apply(this.objs[i], args);
};