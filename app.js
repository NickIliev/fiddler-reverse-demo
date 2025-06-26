const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xmlHttp = new XMLHttpRequest();
try {
    /* 
        The default server port is 8843 (when Fiddler is not in the reverse proxy mode the client app should use that port).
        However, in this case, set port 8877, which corresponds to the "Client Port" within the "Reverse Proxy" section
    */
    xmlHttp.open("GET", 'http://localhost:8877/jsonData', false);

    xmlHttp.setRequestHeader('content-type', 'application/json');
    xmlHttp.setRequestHeader('custom-header', 'Nick Iliev');

    xmlHttp.send(null);
    result = xmlHttp.responseText;
    console.log(`Result: ${result}`);
} catch (err) {
    console.log(`Status: ${xmlHttp.status}, Error: ${err.message}`);
}