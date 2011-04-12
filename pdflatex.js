var util = require('util');
var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;

/*
 PDFLatex class
*/
// constructor
function PDFLatex(inputPath) {
	// default settings
	this.outputDirectory = process.cwd() + "/";
	this.inputPath = inputPath;
};

PDFLatex.prototype.outputDir = function(path) {
	this.outputDirectory = path;
	return this;
};

PDFLatex.prototype.process = function() {
	if (this.inputPath && this.inputPath.length > 0) {
		var command = "pdflatex -output-directory " + this.outputDirectory + " '" + this.inputPath + "'";
		util.puts(command);
		exec(command, function(err) {
			if (err) throw err;
		});
	}
};

module.exports = PDFLatex;