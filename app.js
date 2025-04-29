const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xmlHttp = new XMLHttpRequest();
try {
    // The application uses custom port 8866 - this is the port on which the Fiddler proxy works
    xmlHttp.setRequestHeader('content-type', 'application/json');
    xmlHttp.open("GET", 'http://localhost:8866/jsonData', false);
    xmlHttp.setRequestHeader('custom-header', 'Nick Iliev');
    xmlHttp.send(null);
    result = xmlHttp.responseText;
    console.log(`Result: ${result}`);
} catch (err) {
    console.log(`Status: ${xmlHttp.status}, Error: ${err.message}`);
}