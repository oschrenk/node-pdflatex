# node-pdflatex #

`node-pdflatex` is just a very thin wrapper arround the pdflatex command.

## Installation ##

	git clone git://github.com/oschrenk/node.pdflatex.git
	
or

	npm install pdflatex

## Usage ##

	var PDFLatex = require('pdflatex');
	var tex = new PDFLatex("samplefile.tex");
	tex.process();