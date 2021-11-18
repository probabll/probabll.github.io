// node.js
var md = require("markdown-it")({
	html: false,
	xhtmlOut: true,
	typographer: true
}).use( require("markdown-it-anchor"), { permalink: true, permalinkBefore: true, permalinkSymbol: '§' } )
  .use( require("markdown-it-toc-done-right") );

var result = md.render("# markdown-it rulezz!\n\n${toc}\n## with markdown-it-toc-done-right rulezz even more!");

// browser without AMD, added to "window" on script load
// Note, there is no dash in "markdownit".
var md = window.markdownit({
	html: false,
	xhtmlOut: true,
	typographer: true
}).use( window.markdownItAnchor, { permalink: true, permalinkBefore: true, permalinkSymbol: '§' } )
  .use( window.markdownItTocDoneRight );

var result = md.render("# markdown-it rulezz!\n\n${toc}\n## with markdown-it-toc-done-right rulezz even more!");

