# node-pdflatex #

`node-pdflatex` is a very thin wrapper around the `pdflatex` command.

## Installation ##

	npm install pdflatex

## Usage ##

	var PDFLatex = require('pdflatex');
	var tex = new PDFLatex("samplefile.tex");
	tex.process();