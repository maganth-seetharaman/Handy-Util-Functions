//JSON UNESCAPE
var unescapeInput = null;
var unescapeOutput = null;

window.addEventListener('load', (event) => {
    unescapeInput = document.getElementById("unescape-input");
    unescapeOutput = document.getElementById("unescape-output");
    unescapeInput.addEventListener('input', parseJSON, false);
    parseJSON();
});

function parseJSON(event) {
    try {
        var escaped = unescapeInput.value;
        escaped = escaped.replace(/\\\\/g, '\\');
        escaped = escaped.replace(/\\\//g, '/');
        escaped = escaped.replace(/\\\b/g, '\b');
        escaped = escaped.replace(/\\\f/g, '\f');
        escaped = escaped.replace(/\\\n/g, '\n');
        escaped = escaped.replace(/\\\r/g, '\r');
        escaped = escaped.replace(/\\\t/g, '\t');
        escaped = escaped.replace(/\\\"/g, '"');
    
        var object = JSON.parse(escaped);
        unescapeOutput.innerHTML = JSON.stringify(object, null, 4);
    } catch(err) {
        console.error(err);
        unescapeOutput.innerHTML = "";
    }
}

//JSON ESCAPE
var escapeInput = null;
var escapeOutput = null;

window.addEventListener('load', (event) => {
    escapeInput = document.getElementById("escape-input");
    escapeOutput = document.getElementById("escape-output");
    escapeInput.addEventListener('input', escapeJSON, false);
    escapeJSON();
});

function escapeJSON(event) {
    try {
        var unescaped = escapeInput.value;
        var object = JSON.parse(unescaped);
        escapeOutput.innerHTML = JSON.stringify(JSON.stringify(object));
    } catch(err) {
        console.error(err);
        escapeOutput.innerHTML = "";
    } 
}