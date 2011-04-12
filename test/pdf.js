var PDFLatex = require('../pdflatex');

var tex = new PDFLatex("samplefile.tex");
tex.process();

var tex2 = new PDFLatex("samplefile.tex");
tex2.outputDir("/Users/Oliver/Downloads").process();