const marked = require("marked");

marked.setOptions({
    renderer:new marked.Renderer(),
    highlight: (code,language) =>{
        const hljs = require("highlight.js");
        const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
        return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: true,
    breaks:false,
    sanitize: false,
    smartLists: true,
    smartypants : false,
    xhyml : false
});

module.exports = marked;