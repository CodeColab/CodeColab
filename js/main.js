var editor = ace.edit("editor");
var sharejs = require('share');
editor.getSession().setMode("ace/mode/javascript");
editor.getSession().setMode(new JavaScriptMode());

sharejs.open('hello', 'text', 'http://localhost:7774', function(error, doc) {
   doc.attach_ace(editor);
});
