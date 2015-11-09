'use strict';
var eachAsync = require('each-async');
var stripNgLog = require('strip-nglog');

module.exports = function (grunt) {
	grunt.registerMultiTask('stripNgLog', 'Strip $log statements', function () {
		eachAsync(this.files, function (el, i, next) {
			grunt.file.write(el.dest, stripNgLog(grunt.file.read(el.src[0])));
			next();
		}, this.async());
	});
};
